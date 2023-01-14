import { PropType } from "nuxt/dist/app/compat/capi";

export default defineComponent({
	name: "TextHeading",
	props: {
		tag: {
			type: String,
			default: "p",
		},
	},
});
