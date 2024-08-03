import React from "react"
import App from "./main"
import ReactDOMServer from 'react-dom/server'
import { ReduxProvider } from "./app/providers/Redux/Redux"
import { StaticRouter } from "react-router-dom/server";
import { MuiThemeProvider } from "./app/providers/Theme/ThemeProvider";
import { CssBaseline } from "@mui/material";
import { clientSideEmotionCache } from "./app/providers/Cache/createEmotionCache";
import createEmotionServer from '@emotion/server/create-instance';
import { MuiCacheProvider } from "./app/providers/Cache/MuiCacheProvider";

interface IRenderApp {
  path: string;
}


export function render({ path }: IRenderApp) {
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(clientSideEmotionCache);

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <ReduxProvider>
        <StaticRouter location={path}>
          <MuiCacheProvider>
            <MuiThemeProvider>
              <CssBaseline />
              <App />
            </MuiThemeProvider>
          </MuiCacheProvider>
        </StaticRouter>
      </ReduxProvider>
    </React.StrictMode>
  );

  const emotionChunks = extractCriticalToChunks(html);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  return { html, emotionCss }
}
