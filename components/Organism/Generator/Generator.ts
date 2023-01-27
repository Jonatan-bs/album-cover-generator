import { useToast } from "vue-toastification";

export default defineComponent({
	name: "Generator",
	setup() {
		const { isAuthenticated, login, authIsLoading } = useAuth();
		const { SD_GenerateImage } = useStabelDiffusion();
		const { info } = useToast();
		const { generatedImages } = useGeneratedImages();

		const isGenerating = ref(false);
		const generateImage = async () => {
			if (isGenerating.value) return;
			generatedImages.value = [];
			isGenerating.value = true;
			const { data, error } = await SD_GenerateImage(prompt.value);
			if (error.value || !data.value?.data) {
				console.error(error.value, data.value?.data);
				info("Try again in 5 min - Generator is busy ");
			} else {
				generatedImages.value = data.value?.data;
			}
			isGenerating.value = false;
		};
		const prompt = ref("");
		return {
			prompt,
			generateImage,
			generatedImages,
			isGenerating,
			isAuthenticated,
			login,
			authIsLoading,
		};
	},
});
