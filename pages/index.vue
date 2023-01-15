<script src="./index.page.ts" lang="ts" />
<template>
	<div class="container">
		<OrganismTheHeader />
		<section class="pt-2xl mb-4xl">
			<div class="flex justify-center mb-2xl">
				<NuxtLink to="/generate">
					<AtomButtonBase>Create cover</AtomButtonBase>
				</NuxtLink>
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
		<section class="mb-4xl">
			<AtomTextHeading tag="h2" class="mb-xs">Examples</AtomTextHeading>
			<div class="main-grid">
				<AtomCoverThumb
					class="col-span-4"
					src="cover-example-1.png"
					alt="Example of AI generated album cover"
				/>
				<AtomCoverThumb
					class="col-span-4"
					src="cover-example-2.png"
					alt="Example of AI generated album cover"
				/>
				<AtomCoverThumb
					class="col-span-4"
					src="cover-example-3.png"
					alt="Example of AI generated album cover"
				/>
			</div>
		</section>
		<section class="main-grid">
			<div
				v-for="(text, index) in [
					'Login or create user',
					'Write what you want on your album cover',
					'Click generate and wait a couple minutes while ai generates your cover',
				]"
				:key="index"
				class="col-span-4 border border-white rounded-sm aspect-5/3 p-xs"
			>
				<div class="flex gap-xs">
					<p class="text-white font-bold text-xl leading-none">{{ index }}</p>
					<p class="text-white text-base">{{ text }}</p>
				</div>
			</div>
		</section>
	</div>
</template>
