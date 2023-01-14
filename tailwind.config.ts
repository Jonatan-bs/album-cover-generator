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
			"blue-whale": "#020B14",
			"blue-galaxy": "#38354A",
			"blue-thoughts": "#261E57",

			// YELLOWs
			"yellow-energy-yellow": "#DBB04F",
		},
		fontFamily: {
			sans: ["Roboto Condensed", "sans-serif"],
		},
		spacing: {
			"4xs": ".7rem",
			"3xs": "1rem",
			"2xs": "1.6rem",
			xs: "1.8rem",
			sm: "3rem",
			md: "4rem",
			lg: "6rem",
			xl: "20rem",
			"2xl": "35rem",
			"3xl": "45rem",
		},

		fontSize: {
			xs: "1.3rem",
			sm: "1.5rem",
			base: "2.1rem",
			md: "2.6rem",
			lg: "3rem",
			xl: "4.9rem",
			"2xl": "7rem",
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
