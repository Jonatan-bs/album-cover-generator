<script lang="ts" src="./TextSubheading.ts" />
<template>
	<component
		:is="tag"
		class="italic font-light text-base tracking-wide"
		:class="[
			size === 'DEFAULT' && 'text-base md:text-lg',
			size === 'SMALL' && 'text-sm md:text-base',
			color === 'DEFAULT' && 'text-blue-cornflower',
			color === 'LIGHT' && 'text-blue-light-house',
		]"
	>
		<slot />
	</component>
</template>
