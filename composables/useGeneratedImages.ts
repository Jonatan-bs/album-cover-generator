import { useStorage } from "@vueuse/core";
export const useGeneratedImages = () => {
	const generatedImages = useStorage<string[]>("generated-images", []);

	return { generatedImages };
};
