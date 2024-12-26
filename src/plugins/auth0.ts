import { createAuth0 } from '@auth0/auth0-vue';
import type { Auth0Plugin } from '@auth0/auth0-vue';

const auth0Client: Auth0Plugin = createAuth0({
  domain: window.AUTH_DOMAIN,
  clientId: window.AUTH_ID,
  authorizationParams: {
    redirect_uri: window.location.origin + window.APP_BASE_URL,
    audience: window.AUTH_AUDIENCE,
  },
  cacheLocation: 'localstorage',
});

export default auth0Client;

export const getAccessToken = async () => {
  const accessToken = await auth0Client.getAccessTokenSilently();
  return accessToken;
};
