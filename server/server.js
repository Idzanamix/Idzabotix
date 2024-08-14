import { PORT, DOMAIN } from './app/env.js';
import { app, HTTPS_SERVER } from './app/appExpress.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import bot from './bot/bot.js'

// Serve HTML
app.use('*', renderMiddleware);

// Start http server
HTTPS_SERVER.listen(PORT, '0.0.0.0', DOMAIN, () => {
  console.log(`HTTPS server running https://${DOMAIN}:${PORT}`);
});


