export default defineComponent({
	name: "CoverThumb",
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
	},
});
