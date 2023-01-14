import { PropType } from "nuxt/dist/app/compat/capi";

export default defineNuxtComponent({
	name: "TextBase",
	props: {
		type: {
			type: String as PropType<"DEFAULT">,
			default: "DEFAULT",
		},
		tag: {
			type: String,
			default: "p",
		},
	},
});
