// @ts-ignore
import packageInfo from '../../package.json';

export const environment = {
  production: true,
  version: packageInfo.version,
  apiBase: $ENV.API_BASE,
  NAME: $ENV.NAME
};
