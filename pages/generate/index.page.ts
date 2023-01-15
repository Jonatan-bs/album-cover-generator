export default defineComponent({
	name: "GeneratePage",
	setup: () => {
		const { SD_GenerateImage } = useStabelDiffusion();
		const generatedImage = ref<string>();
		const isGenerating = ref(false);
		const generateImage = async () => {
			isGenerating.value = true;
			const { data, error } = await SD_GenerateImage(prompt.value);
			if (error.value || !data.value?.data) {
				console.error(error.value, data.value);
			} else {
				generatedImage.value = data.value?.data;
			}
			isGenerating.value = false;
		};
		const prompt = ref("");
		return { prompt, generateImage, generatedImage, isGenerating };
	},
});
