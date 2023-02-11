export default defineComponent({
	name: "HomePage",
	setup: () => {
		const { isAuthenticated, login } = useAuth();
		return { isAuthenticated, login };
	},
});
