import { useStorage } from "@vueuse/core";
export const useGeneratedImage = () => {
	const generatedImage = ref<string | null>(null);
	const isInhanced = ref<boolean>(false);
	const isSaved = ref<boolean>(false);

	const setGeneratedImage = (src: string) => {
		generatedImage.value = src;
		isInhanced.value = false;
	};
	const setOptimizedImage = (src: string) => {
		generatedImage.value = src;
		isInhanced.value = true;
	};
	const clearImage = () => {
		generatedImage.value = null;
		isInhanced.value = false;
	};
	return {
		generatedImage,
		isInhanced,
		setGeneratedImage,
		setOptimizedImage,
		clearImage,
		isSaved,
	};
};
