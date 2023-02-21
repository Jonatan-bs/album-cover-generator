import { useToast } from "vue-toastification";
import { StyleImage } from "~~/types/components/StyleSelect";

export default defineComponent({
	name: "Generator",
	setup() {
		const { isAuthenticated, login, user, getUserImages } = useAuth();
		const { SD_GenerateImage, SD_EnhanceImage } = useStabelDiffusion();
		const { error, success } = useToast();
		const {
			generatedImage,
			isSaved,
			isInhanced,
			clearImage,
			setGeneratedImage,
			setOptimizedImage,
		} = useGeneratedImage();
		onMounted(() => {
			setTimeout(() => {
				useCredit();
			}, 1000);
		});
		const client = useSupabaseClient();
		const saveImage = async () => {
			if (!generatedImage.value || !user) return;
			const { data } = await client
				.from("saved_image")
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				.insert<{ image: string; user_id: string }>({
					image: generatedImage.value,
					user_id: user.id,
				});
			getUserImages();

			// images.value.push({});
			isSaved.value = true;
			console.log(data);
		};
		const useCredit = async () => {
			if (!user?.id) return;
			const { data } = await client
				.from("user")
				.select("credits")
				.eq("user_id", user.id)
				.limit(1)
				.single();
			if (typeof data?.credits === "number") {
				const res = await client
					.from("user")
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					//@ts-ignore
					.update({ credits: 8 })
					.eq("user_id", user.id);
				console.log(res);
			}
		};
		// const deleteImage = async () => {};
		const isGenerating = ref(false);
		const generateImage = async () => {
			if (isGenerating.value) return;
			clearImage();
			isGenerating.value = true;
			try {
				const response = await SD_GenerateImage(prompt.value, activeStyle.value.id);
				await useCredit();
				setGeneratedImage(response.output_url);
			} catch (err) {
				error("Something went wrong, try again later");
				console.log(err);
			}

			isGenerating.value = false;
		};
		const enhanceImage = async () => {
			if (isGenerating.value || !generatedImage.value) return;

			const tempGeneratedImage = generatedImage.value;
			clearImage();
			isGenerating.value = true;
			try {
				const response = await SD_EnhanceImage(tempGeneratedImage);
				setOptimizedImage(response.output_url);
				isInhanced.value = true;
				success("Album cover was successfully enhanced");
			} catch (err) {
				generatedImage.value = tempGeneratedImage;
				error("Something went wrong, try again later");
				console.log(err);
			}
			isGenerating.value = false;
		};
		const activeStyle = computed(() => {
			return styles[activeStyleIndex.value];
		});
		async function downloadImage() {
			if (!generatedImage.value) return;
			const image = await fetch(generatedImage.value);
			const imageBlog = await image.blob();
			const imageURL = URL.createObjectURL(imageBlog);

			const link = document.createElement("a");
			link.href = imageURL;
			link.download = "aiCover";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			success("Cover was successfully downloaded");
		}
		const styles: StyleImage[] = [
			{
				id: "fantasy-world-generator",
				name: "fantasy world",
				img: "fantasy_world.jpg",
			},
			{
				id: "cyberpunk-generator",
				name: "cyberpunk",
				img: "cyberpunk.jpg",
			},
			{
				id: "old-style-generator",
				name: "old style",
				img: "old_style.jpg",
			},
			{
				id: "renaissance-painting-generator",
				name: "renaissance painting",
				img: "renaissance_painting.jpg",
			},
			{
				id: "abstract-painting-generator",
				name: "abstract painting",
				img: "abstract_painting.jpg",
			},
			// {
			// 	id: "impressionism-painting-generator",
			// 	name: "impressionism painting",
			// 	img: "impressionism_painting.jpg",
			// },
			{
				id: "surreal-graphics-generator",
				name: "surreal graphics",
				img: "surreal_graphics.jpg",
			},
			// {
			// 	id: "watercolor-painting-generator",
			// 	name: "watercolor painting",
			// 	img: "watercolor_painting.jpg",
			// },
			{
				id: "pop-art-generator",
				name: "pop art",
				img: "pop_art.jpg",
			},
			{
				id: "future-architecture-generator",
				name: "future architecture",
				img: "future_architecture.jpg",
			},
			// {
			// 	id: "fantasy-character-generator",
			// 	name: "fantasy character",
			// 	img: "fantasy_character.jpg",
			// },
			{
				id: "steampunk-generator",
				name: "steampunk",
				img: "steampunk.jpg",
			},
			{
				id: "street-art-generator",
				name: "street art",
				img: "street_art.jpg",
			},
			// {
			// 	id: "surreal-portrait-generator",
			// 	name: "surreal portrait",
			// 	img: "surreal_portrait.jpg",
			// },
			// {
			// 	id: "anime-world-generator",
			// 	name: "anime world",
			// 	img: "anime_world.jpg",
			// },
		];
		const activeStyleIndex = ref<number>(0);

		const prompt = ref("");
		return {
			saveImage,
			downloadImage,
			isInhanced,
			prompt,
			activeStyleIndex,
			styles,
			activeStyle,
			generateImage,
			generatedImage,
			isGenerating,
			isAuthenticated,
			login,
			enhanceImage,
			isSaved,
		};
	},
});
