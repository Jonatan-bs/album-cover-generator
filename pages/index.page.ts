export default defineComponent({
	name: "HomePage",
	setup: () => {
		const { isAuthenticated } = useAuth();
		return { isAuthenticated };
	},
});
