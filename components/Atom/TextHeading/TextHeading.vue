<script lang="ts" src="./TextHeading.ts" />
<template>
	<div>
		<component :is="tag" class="text-white text-sm md:text-md">
			<slot />
		</component>
	</div>
</template>
