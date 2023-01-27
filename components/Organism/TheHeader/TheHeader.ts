import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

export default defineComponent({
	name: "TheHeader",
	setup() {
		const menuIsActive = ref(false);
		const { isAuthenticated, login, logout } = useAuth();
		const refMenu = ref<HTMLElement>();
		const { activate, deactivate, hasFocus } = useFocusTrap(refMenu);

		const toggleMenu = async () => {
			const htmlElm = document.querySelector("html");
			if (menuIsActive.value) {
				if (htmlElm) htmlElm.style.overflow = "auto";
				menuIsActive.value = false;
				deactivate();
			} else {
				window.scrollTo(0, 0);
				if (htmlElm) htmlElm.style.overflow = "hidden";
				menuIsActive.value = true;
				activate();
			}
		};

		return { menuIsActive, toggleMenu, hasFocus, refMenu, isAuthenticated, login, logout };
	},
});
