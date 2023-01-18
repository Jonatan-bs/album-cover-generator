<script src="./StepsCards.ts" lang="ts"></script>
<template>
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
</template>
