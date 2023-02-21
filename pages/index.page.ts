export default defineComponent({
	name: "HomePage",
	setup: () => {
		const { isAuthenticated, login, images: savedImages, user } = useAuth();
		return { isAuthenticated, login, savedImages, user };
	},
});
