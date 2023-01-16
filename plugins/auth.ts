import { createAuth0 } from "@auth0/auth0-vue";

export default defineNuxtPlugin((nuxtApp) => {
	const { isAuthenticated, user } = useAuth();
	const { public: publicEnv } = useRuntimeConfig();
	const auth0 = createAuth0({
		domain: publicEnv.AUTH_DOMAIN,
		client_id: publicEnv.AUTH_CLIENT_ID,
		redirect_uri: publicEnv.AUTH_REDIRECT_URL,
	});

	if (process.client) {
		nuxtApp.vueApp.use(auth0);
	}

	addRouteMiddleware(
		"auth",
		async (to, _from) => {
			// if (process.client && to.path === "/generate") {
			if (process.client) {
				await auth0.checkSession();
				console.log(auth0.isAuthenticated.value);
				// if (!auth0.isAuthenticated.value) {
				// 	auth0.loginWithRedirect({
				// 		appState: {
				// 			target: to.path,
				// 		},
				// 	});
				// 	return false;
				// }
			}
		},
		{ global: true }
	);
});
