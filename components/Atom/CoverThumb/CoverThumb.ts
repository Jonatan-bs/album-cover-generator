export default defineComponent({
	name: "CoverThumb",
	props: {
		provider: {
			type: String,
			default: "cloudinary",
		},
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		prompt: {
			type: String,
			required: false,
			default: undefined,
		},
	},
});
