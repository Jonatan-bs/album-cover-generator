<script lang="ts" src="./TextHeading.ts" />
<template>
	<div>
		<component :is="tag" class="text-white text-md">
			<slot />
		</component>
	</div>
</template>
