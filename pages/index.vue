<script src="./index.page.ts" lang="ts" />
<template>
	<div class="container">
		<OrganismTheHeader />
		<section class="pt-2xl mb-4xl">
			<div class="flex justify-center">
				<div class="max-w-[120rem] w-full">
					<OrganismGenerator> </OrganismGenerator>
				</div>
			</div>
		</section>
		<section class="mb-4xl" v-if="isAuthenticated">
			<AtomTextHeading tag="h2" class="mb-xs">My Covers</AtomTextHeading>
			<div class="main-grid">
				<div v-for="i in 3" :key="i" class="col-span-4 aspect-1 w-full bg-blue-galaxy" />
			</div>
		</section>
		<section class="mb-4xl">
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
