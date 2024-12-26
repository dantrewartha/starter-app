declare global {
  interface Window {
    API_HOST: string;
    API_PATH: string;
    ENV_NAME: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    AUTH_API: string;
    ASSET_API: string;
    APP_BASE_URL: string;
    AUTH_DOMAIN: string;
    AUTH_ID: string;
    AUTH_AUDIENCE: string;
    PROXY_KEY: string;
  }
}

export {};
