import { StyleImage } from "~~/types/components/StyleSelect";

export default defineComponent({
	name: "StyleSelect",
	props: {
		styles: { type: Array as () => StyleImage[], default: [] },
		activeIndex: { type: Number, default: 0 },
	},
	setup() {
		return {};
	},
});
