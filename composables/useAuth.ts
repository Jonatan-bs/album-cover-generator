import { useAuth0 } from "@auth0/auth0-vue";
import { useStorage } from "@vueuse/core";
export const useAuth = () => {
	// Composition API
	const auth0 = process.client ? useAuth0() : undefined;
	const { generatedImage } = useGeneratedImage();

	const login = () => {
		auth0?.checkSession();
		if (!auth0?.isAuthenticated.value) {
			auth0?.loginWithRedirect({
				appState: {
					target: useRoute().path,
				},
			});
		}
	};

	const logout = () => {
		navigateTo("/");
		generatedImage.value = null;
		auth0?.logout();
	};

	return {
		logout,
		login,
		isAuthenticated: auth0?.isAuthenticated,
		user: auth0?.user,
		authIsLoading: auth0?.isLoading,
	};
};
