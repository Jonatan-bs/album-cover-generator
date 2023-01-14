import plugin from "tailwindcss/plugin";

module.exports = {
	mode: "jit",
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		letterSpacing: {
			0: "0",
			1: "1",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				"2xl": "14rem",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1640px",
			"4xl": "1920px",
		},
		colors: {
			transparent: "transparent",
			// WHITE
			white: "#FFFFFF",

			// BLACKS
			black: "#000000",

			// BLUE
			"blue-cornflower": "#656188",
			"blue-light-house": "#020B14",
			"blue-whale": "#26213C",
			"blue-galaxy": "#38354A",
			"blue-thoughts": "#261E57",

			// YELLOWs
			"yellow-energy-yellow": "#DBB04F",
			"yellow-brick-road": "#a6780d",
		},
		fontFamily: {
			sans: ["Roboto Condensed", "sans-serif"],
		},
		spacing: {
			"4xs": ".7rem",
			"3xs": "1rem",
			"2xs": "1.5rem",
			xs: "2rem",
			sm: "3rem",
			md: "4rem",
			lg: "6rem",
			xl: "8rem",
			"2xl": "12rem",
			"3xl": "14rem",
			"4xl": "16rem",
		},

		fontSize: {
			xs: "1.3rem",
			sm: "1.6rem",
			base: "1.8rem",
			md: "3rem",
			lg: "4rem",
			xl: "6rem",
		},
		fontWeight: {
			light: 300,
			normal: 400,
			bold: 700,
		},
		borderRadius: {
			none: "0",
			sm: "1.3rem",
			lg: "2.2rem",
			full: "999rem",
		},
		aspectRatio: {
			"1": "1",
			"5/3": "5 / 3",
		},
	},

	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".main-grid": {
					display: "grid",
					gridTemplateColumns: "repeat(12, 1fr)",
					columnGap: "1.6rem",
					rowGap: "1.6rem",
				},
			});
		}),
	],
};
