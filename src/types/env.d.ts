interface ImportMetaEnv {
  readonly VITE_CLIENT_SECRET: string;
  readonly VITE_CLIENT_ID: string;
  readonly VITE_SITE_URL: string;
  // ... другие переменные
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
