// import { useAuth0 } from "@auth0/auth0-vue";
const isInstanciated = ref(false);
const images = ref<{ image: string; id: number }[]>([]);
const user = reactive<{ id: string | null; credits: number | null }>({ id: null, credits: null });
export const useAuth = () => {
	const client = useSupabaseClient();
	const authUser = useSupabaseUser();

	const getUserImages = async () => {
		if (!authUser.value?.id) return;
		const { data } = await client
			.from("saved_image")
			.select("id, image")
			.eq("user_id", authUser.value.id)
			.order("created_at", { ascending: false });

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		images.value = data;
	};
	const getUserData = async () => {
		if (!authUser.value?.id) return null;
		const { data } = await client
			.from("user")
			.select("credits")
			.eq("user_id", authUser.value.id)
			.limit(1)
			.single();
		return data || null;
	};
	const setUserData = async () => {
		if (!authUser.value?.id) return;
		const data = await getUserData();
		if (data?.credits != null) {
			user.credits = data.credits;
		}
		if (authUser.value.id != null) {
			user.id = authUser.value.id;
		}
	};
	const initUserData = async () => {
		if (!authUser.value?.id) return;
		const { data } = await client
			.from("user")
			.select("credits")
			.eq("user_id", authUser.value.id)
			.limit(1)
			.single();
		if (data) return;
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		await client.from("user").insert<{ image: string; user_id: string }>({
			credits: 9,
			user_id: authUser.value.id,
		});
	};

	if (!isInstanciated.value) {
		client.auth.onAuthStateChange(async (event) => {
			if (event === "SIGNED_IN") {
				getUserImages();
				await setUserData();
				initUserData();
			}
		});
		isInstanciated.value = true;
	}

	// Composition API
	// const auth0 = process.client ? useAuth0() : undefined;
	const { generatedImage } = useGeneratedImage();

	const login = async () => {
		await client.auth.signInWithOAuth({ provider: "google" });
	};

	const logout = () => {
		client.auth.signOut();
		navigateTo("/");
		generatedImage.value = null;
	};

	return {
		logout,
		login,
		isAuthenticated: computed(() => !!authUser.value),
		user: authUser.value ? user : null,
		images,
		getUserImages,
	};
};
