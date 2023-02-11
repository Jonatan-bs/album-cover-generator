// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	nitro: {
		preset: "vercel",
	},
	build: {
		transpile: ["gsap"],
	},
	runtimeConfig: {
		AUTH_CLIENT_SECRET: process.env.AUTH_CLIENT_SECRET,

		public: {
			SD_API: process.env.SD_API,
			ROBOTS: process.env.ROBOTS,
			BASE_URL: process.env.BASE_URL,
			CLOUDINARY_WEBSITE: process.env.CLOUDINARY_WEBSITE,
			AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID,
			AUTH_DOMAIN: process.env.AUTH_DOMAIN,
			AUTH_REDIRECT_URL: process.env.AUTH_REDIRECT_URL,
		},
	},
	css: ["~/assets/styles/main.scss"],
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "~/modules/robots", "~/modules/router"],
	components: [
		{ path: "~/components", extensions: ["vue"] },
		{ path: "~/assets/svg", extensions: ["vue"], prefix: "svg" },
	],
	image: {
		cloudinary: {
			baseURL: process.env.CLOUDINARY_WEBSITE,
		},
		screens: {
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			"2xl": 1640,
			"4xl": 1920,
		},
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" },

		head: {
			htmlAttrs: { lang: "en" },
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "use-credentials",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
				},
			],
		},
	},
});
