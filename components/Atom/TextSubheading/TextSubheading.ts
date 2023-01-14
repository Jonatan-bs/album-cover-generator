import { PropType } from "nuxt/dist/app/compat/capi";

export default defineComponent({
	name: "TextSubheading",
	props: {
		tag: {
			type: String,
			default: "p",
		},
		size: {
			type: String as PropType<"DEFAULT" | "SMALL">,
			default: "DEFAULT",
		},
		color: {
			type: String as PropType<"DEFAULT" | "LIGHT">,
			default: "DEFAULT",
		},
	},
});
