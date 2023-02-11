import { useStorage } from "@vueuse/core";
export const useGeneratedImage = () => {
	const generatedImage = useStorage<string | undefined>("generated-image", null);
	const isInhanced = useStorage<boolean>("generated-image-is-inhanced", false);

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
	return { generatedImage, isInhanced, setGeneratedImage, setOptimizedImage, clearImage };
};
