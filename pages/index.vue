<script src="./index.page.ts" lang="ts" />
<template>
	<div class="container">
		<OrganismTheHeader />
		<div class="flex justify-center">
			<NuxtLink to="/">
				<div class="inline-block mt-lg">
					<h1 class="text-center text-white text-lg md:text-xl font-bold leading-none">
						Album Cover Generator
					</h1>
					<p class="text-center text-white text-sm md:text-md italic font-light">
						Use AI to generate your next album or single cover
					</p>
				</div>
			</NuxtLink>
		</div>
		<section class="pt-2xl mb-4xl" v-if="isAuthenticated">
			<p class="text-white text-md text-center mb-lg font-light">
				Album covers left: {{ user?.credits }}
			</p>

			<div>
				<div class="w-full">
					<OrganismGenerator> </OrganismGenerator>
				</div>
			</div>
		</section>
		<section class="pt-2xl mb-4xl" v-else>
			<div class="flex justify-center mb-2xl">
				<AtomButtonBase @click="login">Login to create cover</AtomButtonBase>
			</div>
			<div class="flex items-center flex-col">
				<div>
					<h2 class="text-white italic text-sm md:text-md font-light">
						First 10 album covers are free
					</h2>
					<p
						v-for="text in [
							`There’s no hidden fees or bamboozles.`,
							`We won’t sent you any annoying emails.`,
							`if something doesn’t work, contact us and we’ll figure it out.`,
							`You get 10 free covers and can pay 8$ for 50 more`,
						]"
						:key="text"
						class="text-blue-cornflower italic text-xs md:text-sm"
					>
						* {{ text }}
					</p>
				</div>
			</div>
		</section>
		<section class="mb-4xl" v-if="isAuthenticated">
			<AtomTextHeading tag="h2">Saved Covers</AtomTextHeading>
			<p class="text-white text-xs md:text-sm italic" v-if="!savedImages.length">
				You have no saved covers
			</p>
			<div class="main-grid mt-xs" v-if="savedImages.length">
				<AtomCoverThumb
					v-for="image in savedImages"
					:key="image.id"
					:src="image.image"
					alt="Saved cover"
					provider=""
					class="col-span-12 md:col-span-4 aspect-1 w-full bg-blue-galaxy"
				/>
			</div>
		</section>
		<section class="mb-4xl" v-else>
			<AtomTextHeading tag="h2" class="mb-xs">Examples</AtomTextHeading>
			<div class="main-grid">
				<AtomCoverThumb
					class="col-span-12 md:col-span-4"
					src="cover-example-1.png"
					alt="Example of AI generated album cover"
					prompt="valley painting"
				/>
				<AtomCoverThumb
					class="col-span-12 md:col-span-4"
					src="cover-example-2.png"
					alt="Example of AI generated album cover"
					prompt="robot skull retro"
				/>
				<AtomCoverThumb
					class="col-span-12 md:col-span-4"
					src="cover-example-3.png"
					alt="Example of AI generated album cover"
					prompt="cyber neon spaceship planets colors"
				/>
			</div>
		</section>
	</div>
</template>
