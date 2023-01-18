import { createAuth0 } from "@auth0/auth0-vue";

export default defineNuxtPlugin((nuxtApp) => {
	const { public: publicEnv } = useRuntimeConfig();
	const auth0 = createAuth0({
		domain: publicEnv.AUTH_DOMAIN,
		client_id: publicEnv.AUTH_CLIENT_ID,
		redirect_uri: publicEnv.AUTH_REDIRECT_URL,
	});

	if (process.client) {
		nuxtApp.vueApp.use(auth0);
	}
});
