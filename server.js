/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from 'node:fs/promises'
import express from 'express'
import helmet from 'helmet';
import axios from "axios";
import cors from 'cors';

function setTokenCookie(value, liveMinutes) {
  const date = new Date();

  date.setTime(date.getTime() + (liveMinutes * 60 * 1000));

  const expires = "expires=" + date.toUTCString();

  document.cookie = "Token=" + value + ";" + expires + ";path=/";
}

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'
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
  app.use(cors({
    origin: `http://localhost:5173`, // Ваш домен фронтенда
    credentials: true,
  }));
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression());
  app.use(cors({
    origin: `http://localhost:5173`, // Ваш домен фронтенда
    credentials: true,
  }));
  app.use(helmet({
    contentSecurityPolicy: false
  }));
  app.use(base, sirv('./dist/client', { extensions: [] }))
}


app.get('/auth', (req, res) => {
  res.redirect(redirect);
});


app.post('/api/graphql', async (req, res) => {
  const accessToken = req.cookies?.access_token; // Получаем токен из куки

  console.log('accessToken', req.cookies?.access_token);

  if (accessToken) {
    try {
      const response = await axios.post('https://api.github.com/graphql', req.body, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      res.send(response.data);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('no Token');
  }
});


app.get('/oauth', async ({ query: { code } }, res) => {
  console.log('111');

  const params = `client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}&redirect_uri=${process.env.SITE_URL}`

  try {
    console.log('222');

    const { data } = await axios.post('https://github.com/login/oauth/access_token?' + params,
      {
        headers: {
          'Accept': 'application/json',
        }
      }, {
      timeout: 5000
    }
    );

    console.log('token', data);

    if (data?.access_token) {
      console.log('333');

      res
        .cookie('access_token', data.access_token, {
          httpOnly: true,
          secure: isProduction,
          maxAge: 60 * 60 * 1000
        })
        .redirect('/repository');
    }

  } catch (error) {
    console.error("Ошибка при получении токена:", error);
    res.status(500).send("Ошибка сервера");
  }
});



// Serve HTML
app.use('*', async (req, res) => {
  console.log('4444');
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
  console.log(`Server started at http://localhost:${port}`)
});



