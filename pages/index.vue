<script src="./index.page.ts" lang="ts" />
<template>
	<div class="container">
		<OrganismTheHeader />
		<section class="pt-2xl mb-4xl" v-if="isAuthenticated">
			<div class="flex justify-center">
				<div class="max-w-[120rem] w-full">
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
					<h2 class="text-white italic text-md font-light">
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
						class="text-blue-cornflower italic text-sm"
					>
						* {{ text }}
					</p>
				</div>
			</div>
		</section>
		<section class="mb-4xl" v-if="isAuthenticated">
			<AtomTextHeading tag="h2" class="mb-xs">Saved Covers</AtomTextHeading>
			<div class="main-grid">
				<div v-for="i in 3" :key="i" class="col-span-4 aspect-1 w-full bg-blue-galaxy" />
			</div>
		</section>
		<section class="mb-4xl" v-else>
			<AtomTextHeading tag="h2" class="mb-xs">Examples</AtomTextHeading>
			<div class="main-grid">
				<AtomCoverThumb
					class="col-span-4"
					src="cover-example-1.png"
					alt="Example of AI generated album cover"
					prompt="valley painting"
				/>
				<AtomCoverThumb
					class="col-span-4"
					src="cover-example-2.png"
					alt="Example of AI generated album cover"
					prompt="robot skull retro"
				/>
				<AtomCoverThumb
					class="col-span-4"
					src="cover-example-3.png"
					alt="Example of AI generated album cover"
					prompt="cyber neon spaceship planets colors"
				/>
			</div>
		</section>
	</div>
</template>
