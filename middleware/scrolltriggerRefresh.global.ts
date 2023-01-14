import { ScrollTrigger } from "gsap/ScrollTrigger";
export default defineNuxtRouteMiddleware((to, from) => {
	if (!process.server) {
		if (to.path !== from.path) {
			ScrollTrigger.getAll().forEach((ST) => ST.kill());
		}
		setTimeout(() => ScrollTrigger.refresh(), 1000);
	}
});
