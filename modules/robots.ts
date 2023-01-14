import { defineNuxtModule } from "@nuxt/kit";
import { resolve } from "path";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

export default defineNuxtModule({
	setup(options, nuxt) {
		nuxt.hook("nitro:build:before", async () => {
			const content =
				nuxt.options.runtimeConfig.public.ROBOTS === "true"
					? `User-agent: *\nDisallow:`
					: `User-agent: *\nDisallow: /`;
			try {
				fs.writeFileSync(resolve(__dirname, "../public/robots.txt"), content, console.log);
			} catch (e) {
				console.log("Cannot write file ", e);
			}
		});
	},
});
