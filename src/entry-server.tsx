import React from "react"
import App from "./main"
import ReactDOMServer from 'react-dom/server'
import { ReduxProvider } from "./app/providers/Redux/Redux"
import { StaticRouter } from "react-router-dom/server";
import { MuiThemeProvider } from "./app/providers/Theme/ThemeProvider";
import createEmotionServer from '@emotion/server/create-instance';
import { extractStyleTags } from "./utils/extractStyleTags";
import { removeStyleTags } from "./utils/removeStyleTags";
import { createEmotionCache } from "./app/providers/Cache/createEmotionCache";
import { CacheProvider } from "@emotion/react";

interface IRenderApp {
  path: string;
}


export function render({ path }: IRenderApp) {
  const cache = createEmotionCache()
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

  const htmlString = ReactDOMServer.renderToString(
    <React.StrictMode>
      <ReduxProvider>
        <StaticRouter location={path}>
          <CacheProvider value={cache}>
            <MuiThemeProvider>
              <App />
            </MuiThemeProvider>
          </CacheProvider>
        </StaticRouter>
      </ReduxProvider>
    </React.StrictMode>
  );

  const emotionChunks = extractCriticalToChunks(htmlString);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  const css = extractStyleTags(htmlString) + emotionCss;
  const html = removeStyleTags(htmlString);

  return { html, css }
}
