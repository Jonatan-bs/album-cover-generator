import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default defineComponent({
	name: "App",
	setup: async () => {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
	},
});
