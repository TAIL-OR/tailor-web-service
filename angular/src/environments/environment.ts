import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'TAILOR',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44382/',
    redirectUri: baseUrl,
    clientId: 'TAILOR_App',
    responseType: 'code',
    scope: 'offline_access TAILOR',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44344',
      rootNamespace: 'TAILOR',
    },
  },
} as Environment;
