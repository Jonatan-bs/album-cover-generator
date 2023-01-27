<script src="./Generator.ts" lang="ts"></script>
<template>
	<div class="w-full">
		<form class="flex mb-md" @submit.prevent="generateImage">
			<input
				v-model="prompt"
				type="text"
				class="rounded-l-sm w-full p-3xs text-base"
				placeholder="Example: Death Valley art"
			/>
			<button
				class="bg-yellow-energy-yellow text-base text-white rounded-r-sm px-lg py-2xs min-w-[30rem] hover:bg-yellow-brick-road"
			>
				Generate
			</button>
		</form>
		<ClientOnly>
			<p
				v-if="
					!isAuthenticated && !authIsLoading && (generatedImages.length || isGenerating)
				"
				class="mb-md text-white text-base text-center"
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
				v-if="generatedImages.length || isGenerating"
				class="bg-blue-whale py-sm px-lg flex justify-center"
			>
				<div v-if="isGenerating">
					<p class="text-white text-md text-center">Generating cover</p>
					<p class="text-white text-sm text-center">Wait a couple of minutes</p>
					<SvgLoader />
				</div>
				<div v-else class="aspect-1 w-full bg-blue-thoughts max-w-[90rem]">
					<div v-if="generatedImages.length" class="flex flex-wrap">
						<div v-for="image in generatedImages" :key="image" class="w-1/2 relative">
							<button
								v-if="isAuthenticated"
								class="bg-white border border-blue-cornflower rounded-sm px-4xs text-base absolute top-4xs right-4xs z-10 hover:border-white hover:bg-blue-light-house hover:text-white"
							>
								Save Image
							</button>
							<AtomCoverThumb
								provider=""
								:src="image"
								alt="AI generated album cover"
							/>
						</div>
					</div>
				</div>
			</div>
			<div v-else>
				<slot />
			</div>
		</ClientOnly>
	</div>
</template>
