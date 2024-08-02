import { IS_PROD, BASE, DOMAIN } from './env.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import express from 'express'
import axios from "axios";
axios.defaults.withCredentials = true;

const app = express();

let vite
if (!IS_PROD) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    BASE
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression());
  app.use(cors({
    origin: `${DOMAIN}`,
    credentials: true,
  }));
  app.use(helmet({
    contentSecurityPolicy: false
  }));
  app.use(BASE, sirv('./dist/client', { extensions: [] }));
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}

export { app, vite };



