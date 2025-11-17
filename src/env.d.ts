/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly JWT_SECRET: string;
  readonly ADMIN_USERNAME: string;
  readonly ADMIN_PASSWORD_HASH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  interface Locals {
    user?: {
      id: string;
      username: string;
      role: 'admin';
    };
    csrfToken?: string;
  }
}
