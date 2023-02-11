<script src="./StyleSelect.ts" lang="ts"></script>
<template>
	<div class="grid grid-cols-10 gap-xs">
		<button
			v-for="(style, n) in styles"
			:key="n"
			type="button"
			:class="activeIndex === n ? 'outline outline-4 outline-yellow-energy-yellow' : ''"
			class="aspect-1 w-full bg-blue-galaxy rounded-sm hover:outline hover:outline-4 hover:outline-yellow-energy-yellow"
			@click="$emit('select', n)"
		>
			<nuxt-img
				provider="cloudinary"
				:src="style.img"
				:alt="'style type: ' + style.name"
				class="bg-blue-galaxy rounded-sm"
			>
			</nuxt-img>
		</button>
	</div>
</template>
