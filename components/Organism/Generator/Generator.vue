<script src="./Generator.ts" lang="ts"></script>
<template>
	<div class="w-full">
		<!-- <form @submit.prevent="generateImage"> -->
		<AtomTextHeading tag="h2" class="mb-xs">Write what you want on your cover</AtomTextHeading>
		<div class="flex mb-lg">
			<input
				v-model="prompt"
				type="text"
				class="rounded-sm w-full p-3xs text-base"
				placeholder="Example: Death Valley"
			/>
		</div>
		<AtomTextHeading tag="h2" class="">Pick what style you want</AtomTextHeading>
		<p class="text-white text-xs md:text-sm italic mb-xs">
			Selected style:
			<span class="font-bold text-yellow-energy-yellow">{{ activeStyle.name }}</span>
		</p>

		<OrganismStyleSelect
			class="mb-lg"
			:styles="styles"
			:active-index="activeStyleIndex"
			@select="activeStyleIndex = $event"
		/>
		<div class="flex justify-center">
			<button
				class="bg-yellow-energy-yellow text-base text-white rounded-sm px-lg py-2xs min-w-[30rem] hover:bg-yellow-brick-road"
				@click="generateImage"
			>
				Generate
			</button>
		</div>
		<!-- </form> -->
		<ClientOnly>
			<p
				v-if="!isAuthenticated && (generatedImage || isGenerating)"
				class="mt-lg text-white text-base text-center"
			>
				You need to
				<button
					class="text-yellow-energy-yellow hover:text-yellow-brick-road"
					@click="login"
				>
					login
				</button>
				to save images and to generate in high resolution
			</p>
		</ClientOnly>
		<ClientOnly>
			<div
				v-if="generatedImage || isGenerating"
				class="bg-blue-whale py-sm px-xs md:px-lg flex items-center mt-md flex-col"
			>
				<div v-if="isGenerating">
					<p class="text-white text-md text-center">Generating cover</p>
					<p class="text-white text-sm text-center">Wait a couple of minutes</p>
					<SvgLoader />
				</div>
				<div v-else class="aspect-1 w-full bg-blue-thoughts max-w-[65rem] mb-sm">
					<div v-if="generatedImage" class="flex flex-wrap">
						<div class="relative w-full">
							<nuxt-img
								provider=""
								:src="generatedImage"
								:alt="`AI generated album cover`"
								class="aspect-1 w-full bg-blue-galaxy"
							>
							</nuxt-img>
						</div>
					</div>
				</div>
				<div class="flex flex-col items-center" v-if="!isGenerating">
					<div class="flex gap-sm flex-col md:flex-row mb-sm md:mb-[0]">
						<button
							v-if="!isSaved"
							class="border border-white text-base text-white rounded-sm px-lg py-4xs min-w-[20rem] hover:bg-blue-light-house md:mb-sm"
							@click="saveImage"
						>
							Save Cover
						</button>
						<button
							class="border border-white text-base text-white rounded-sm px-lg py-4xs min-w-[20rem] hover:bg-blue-light-house md:mb-sm"
							@click="downloadImage"
						>
							Download
						</button>
					</div>
					<button
						v-if="!isInhanced"
						class="border border-white text-base text-white rounded-sm px-lg py-4xs min-w-[20rem] hover:bg-blue-light-house"
						@click="enhanceImage"
					>
						Generate in high quality
					</button>
				</div>
			</div>
		</ClientOnly>
		<!-- <div v-else>
			<div class="flex items-center flex-col mt-md">
				<div class="flex flex-col items-center">
					<SvgArrowUp class="text-yellow-energy-yellow w-[10rem] mb-sm" />
					<h2 class="text-white italic text-md font-light mb-md">
						1. Write what you want on your album cover <br />
						2. Select a style <br />
						3. click generate
					</h2>
					<div>
						<p
							v-for="text in [
								`All content generated by DeepAI's tools and APIs are free of copyright, <br/>you may use them for any legal purpose you wish including commercial use`,
							]"
							:key="text"
							class="text-blue-cornflower italic text-sm"
							v-html="'* ' + text"
						></p>
					</div>
				</div>
			</div>
		</div> -->
	</div>
</template>
