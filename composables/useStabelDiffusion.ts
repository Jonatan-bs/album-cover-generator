export const useStabelDiffusion = () => {
	const SD_GenerateImage = (prompt: string) => {
		return useFetch("/api/genereate-image", { body: { prompt }, method: "POST" });
	};
	return { SD_GenerateImage };
};
