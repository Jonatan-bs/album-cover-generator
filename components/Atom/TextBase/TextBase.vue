<script lang="ts" src="./TextBase.ts" />
<template>
	<component
		:is="tag"
		v-if="type === 'DEFAULT'"
		class="text-blue-light-house font-normal text-sm md:text-base"
	>
		<slot />
	</component>
</template>
