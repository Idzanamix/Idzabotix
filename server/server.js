/* eslint-disable @typescript-eslint/no-explicit-any */
import { PORT, DOMAIN } from './app/env.js';
import { app } from './app/appExpress.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

// Serve HTML
app.use('*', renderMiddleware);

// Start http server
app.listen(PORT, () => {
  console.log(`Server started at ${DOMAIN}`);
});



