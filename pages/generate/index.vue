<script src="./index.page.ts" lang="ts"></script>
<template>
	<div class="container">
		<OrganismTheHeader />
		<section class="pt-2xl mb-4xl">
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

			<div
				v-if="generatedImages.length || isGenerating"
				class="bg-blue-whale py-sm px-lg flex justify-center"
			>
				<div class="aspect-1 w-full bg-blue-thoughts max-w-[90rem]">
					<div v-if="generatedImages.length" class="flex flex-wrap">
						<AtomCoverThumb
							v-for="image in generatedImages"
							:key="image"
							provider=""
							class="w-1/2"
							:src="image"
							alt="AI generated album cover"
						/>
					</div>
				</div>
			</div>
		</section>
		<section class="mb-4xl">
			<div v-if="isAuthenticated">
				<AtomTextHeading tag="h2" class="mb-xs">My Covers</AtomTextHeading>
				<div class="main-grid">
					<AtomCoverThumb
						class="col-span-4"
						src="cover-example-1.png"
						alt="Example of AI generated album cover"
					/>
					<div class="aspect-1 w-full bg-blue-galaxy col-span-4"></div>
					<div class="aspect-1 w-full bg-blue-galaxy col-span-4"></div>
				</div>
			</div>
			<div v-else class="flex flex-col items-center">
				<p class="text-center text-md text-white mb-md">Login to save your images</p>
				<AtomButtonBase @click="login">Login</AtomButtonBase>
			</div>
		</section>
	</div>
</template>
