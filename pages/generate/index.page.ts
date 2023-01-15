export default defineComponent({
	name: "GeneratePage",
	setup: () => {
		const { SD_GenerateImage } = useStabelDiffusion();
		const generatedImages = ref<string[]>([]);
		const isGenerating = ref(false);
		const generateImage = async () => {
			generatedImages.value = [];
			isGenerating.value = true;
			const { data, error } = await SD_GenerateImage(prompt.value);
			if (error.value || !data.value?.data) {
				console.error(error.value, data.value?.data);
			} else {
				generatedImages.value = data.value?.data;
			}
			isGenerating.value = false;
		};
		const prompt = ref("");
		return { prompt, generateImage, generatedImages, isGenerating };
	},
});
