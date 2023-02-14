export default defineComponent({
	name: "ProfilePage",
	setup: () => {
		const { isAuthenticated, login } = useAuth();
		return { isAuthenticated, login };
	},
});
