/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from 'node:fs/promises'
import express from 'express'
import helmet from 'helmet';
import axios from "axios";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
axios.defaults.withCredentials = true;

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'
const dimain = process.env.DOMAIN || 'http://localhost:5173'
const redirect = `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.SITE_URL}`;

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined

// Create http server
const app = express();

let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression());
  app.use(cors({
    origin: `${dimain}`,
    credentials: true,
  }));
  app.use(helmet({
    contentSecurityPolicy: false
  }));
  app.use(base, sirv('./dist/client', { extensions: [] }));
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}


app.get('/auth', (req, res) => {
  res.redirect(redirect);
});

let access_token;
let redirectCallback;

app.get('/oauth', async ({ query: { code }, cookies }, res) => {
  const params = `client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}&redirect_uri=${process.env.SITE_URL}`

  try {
    const { data } = await axios.post('https://github.com/login/oauth/access_token?' + params,
      {
        headers: {
          'Accept': 'application/json',
        }
      })

    if (data) {
      const decodedCookie = decodeURIComponent(data);
      const token = new URLSearchParams(decodedCookie).get('access_token');
      const isAuthorized = cookies?.isAuthorized;

      access_token = token;

      if (!isAuthorized || isAuthorized == null || isAuthorized == 'null') {
        const date = new Date();
        date.setHours(date.getHours() + 24);

        res.cookie('isAuthorized', true, {
          secure: true,
          httpOnly: true,
          expires: date,
          sameSite: 'strict',
        });
      }
    }

    res.redirect(`${redirectCallback || '/'}`);

    redirectCallback = ''
  } catch (error) {
    console.error("Ошибка при получении токена:", error);

    res.redirect(`${redirectCallback || '/'}`);
    res.status(500).send("Ошибка сервера");
    redirectCallback = ''
  }
}
);


app.get('/login', (req, res) => {
  if (access_token) {
    res.json(access_token);
    access_token = ''
  }
});

app.get('/logout', ({ cookies }, res) => {
  const isAuthorized = cookies?.isAuthorized;

  if (isAuthorized) {
    res.clearCookie('isAuthorized')
  }

  res.redirect('/');
});


app.get('/isAuthorized', ({ cookies }, res) => {
  const isAuthorized = cookies?.isAuthorized;

  if (isAuthorized) {
    res.json(isAuthorized)
  } else {
    res.json(false)
  }
})

app.get('/AuthorizedToggle/*', ({ cookies, path }, res) => {
  const isAuthorized = cookies?.isAuthorized;
  const redirectUrl = path.replace('/AuthorizedToggle/', '');

  if (isAuthorized) {
    redirectCallback = redirectUrl;
    res.redirect(`/auth`);
  } else {
    res.redirect(`/${redirectUrl}`);
  }
})


// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')

    let template
    let render
    if (!isProduction) {
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url, ssrManifest)

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (error) {
    vite?.ssrFixStacktrace(error)
    console.log(error);
    res.status(500).end(error.stack)
  }
});


// Start http server
app.listen(port, () => {
  console.log(`Server started at ${dimain}`)
});



