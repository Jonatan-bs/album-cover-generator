import axios from "axios";

export default defineEventHandler(async (event) => {
	const { prompt } = await readBody(event);
	const { SD_API } = useRuntimeConfig();

	try {
		const response = await axios.post("https://stablediffusionapi.com/api/v3/dreambooth", {
			key: SD_API,
			model_id: "midjourney",
			prompt: prompt,
			negative_prompt: "",
			width: "512",
			height: "512",
			samples: "1",
			num_inference_steps: "30",
			seed: null,
			guidance_scale: 7.5,
			webhook: null,
			track_id: null,
		});

		if (
			response.data.status === "success" &&
			response.data.output &&
			response.data.output.length
		) {
			return {
				data: response.data.output[0] as string,
				success: true,
				error: null,
			};
		} else {
			return {
				data: null,
				success: false,
				error: null,
			};
		}
	} catch (error) {
		return {
			data: null,
			success: false,
			error,
		};
	}
});
