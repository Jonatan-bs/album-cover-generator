import deepai from "deepai";

export const useStabelDiffusion = () => {
	const { public: publicEnv } = useRuntimeConfig();
	const SD_GenerateImage = async (prompt: string, type: string) => {
		deepai.setApiKey(publicEnv.SD_API);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return deepai.callStandardApi(type, {
			grid_size: "1",
			width: "650",
			height: "650",
			text: prompt || " ",
		});
	};
	const SD_EnhanceImage = async (url: string) => {
		deepai.setApiKey(publicEnv.SD_API);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return deepai.callStandardApi("torch-srgan", {
			image: url,
		});
	};
	return { SD_GenerateImage, SD_EnhanceImage };
};
