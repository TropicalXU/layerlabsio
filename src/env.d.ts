/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_SERVICE_ID: string
    readonly VITE_APP_TEMPLATE_ID: string
    readonly VITE_APP_USER_ID: string

    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }