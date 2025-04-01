/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VERCEL_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
