import { defineNuxtModule } from "@nuxt/kit";
import { ProjectSlugsDocument } from "./../operations-types";
// import { useCmsClient } from "./../composables/cmsClient";
// import { GraphQLClient } from "graphql-request";
// import fs from "fs";
// import { resolve } from "path";
// import { ICmsPage } from "~/interfaces/cms/globals";
// import { CMSResource } from "../resources/contentfulClient";
// import { GetAllPages } from "../resources/contentfulHelper";
// import { VehicleClient } from "../resources/vehicleClient";
export default defineNuxtModule({
	async setup(_options, nuxt) {
		nuxt.hook("build:done", async () => {
			console.warn("Sitemap is not setup")
			// const cmsClient = new GraphQLClient(nuxt.options.runtimeConfig.public.VITE_GQL_HOST, {
			// 	headers: {
			// 		authorization: `Bearer ${nuxt.options.runtimeConfig.public.VITE_GQL_TOKEN}`,
			// 	},
			// });
			// const data = await cmsClient.request(ProjectSlugsDocument);
			// if (!data.projectCollection?.items) {
			// 	return console.error("Error while creating sitemap");
			// }

			// const baseUrl = nuxt.options.runtimeConfig.public.BASE_URL;
			// let sitemapString =
			// 	'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">';
			// sitemapString += `<url>
			// 	<loc>${baseUrl}</loc>
			// 	</url>`;
			// data.projectCollection?.items?.forEach((project) => {
			// 	if (project?.seo?.slug) {
			// 		sitemapString += `<url>
			// 		<loc>${baseUrl + "/projekt/" + project?.seo?.slug}</loc>
			// 		</url>`;
			// 	}
			// });
			// sitemapString += "</urlset>";
			// try {
			// 	fs.writeFileSync(resolve(__dirname, "../public/sitemap.xml"), sitemapString);
			// } catch (e) {
			// 	console.log("Cannot write file ", e);
			// }
		});
	},
});
