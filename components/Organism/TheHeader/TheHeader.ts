import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

export default defineComponent({
	name: "TheHeader",
	props: {},
	setup() {
		const menuIsActive = ref(false);
		const { isAuthenticated, login, logout } = useAuth();
		const refMenu = ref<HTMLElement>();
		const { activate, deactivate, hasFocus } = useFocusTrap(refMenu);

		const toggleMenu = async () => {
			if (menuIsActive.value) {
				menuIsActive.value = false;
				deactivate();
			} else {
				window.scrollTo(0, 0);
				menuIsActive.value = true;
				activate();
			}
		};

		return { menuIsActive, toggleMenu, hasFocus, refMenu, isAuthenticated, login, logout };
	},
});
