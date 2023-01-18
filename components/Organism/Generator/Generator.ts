import { useToast } from "vue-toastification";

export default defineComponent({
	name: "Generator",
	props: {},
	setup() {
		const { isAuthenticated, login } = useAuth();
		const { SD_GenerateImage } = useStabelDiffusion();
		const { info } = useToast();

		const generatedImages = ref<string[]>([]);
		const isGenerating = ref(false);
		const generateImage = async () => {
			generatedImages.value = [];
			isGenerating.value = true;
			const { data, error } = await SD_GenerateImage(prompt.value);
			if (error.value || !data.value?.data) {
				console.error(error.value, data.value?.data);
				info("Try again in 2min - Generator is busy ");
			} else {
				generatedImages.value = data.value?.data;
			}
			isGenerating.value = false;
		};
		const prompt = ref("");
		return { prompt, generateImage, generatedImages, isGenerating, isAuthenticated, login };
	},
});
