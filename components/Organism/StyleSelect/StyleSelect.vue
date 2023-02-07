<script src="./StyleSelect.ts" lang="ts"></script>
<template>
	<div class="grid grid-cols-10 gap-xs px-lg">
		<button
			v-for="(style, n) in styles"
			:key="n"
			:class="activeIndex === n ? 'outline outline-4 outline-yellow-energy-yellow' : ''"
			class="aspect-1 w-full bg-blue-galaxy rounded-sm hover:outline hover:outline-4 hover:outline-yellow-energy-yellow"
			@click="$emit('select', n)"
		>
			<nuxt-img
				provider="cloudinary"
				:src="style.src"
				:alt="'style type: ' + style.type"
				class="bg-blue-galaxy rounded-sm"
			>
			</nuxt-img>
		</button>
	</div>
</template>
