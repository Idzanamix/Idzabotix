declare module '*.svg';
declare module 'react-dom/client';
declare module 'vite';
declare module '@vitejs/plugin-react';
declare module 'compression'
declare module 'cookie-parser'
declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides extends Record<CustomVariants, true> {}
}
