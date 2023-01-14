<script lang="ts" src="./TextHeading.ts" />
<template>
	<div>
		<component
			:is="tag"
			v-if="type === 'SECTION'"
			class="uppercase font-light text-base tracking-wide"
			:class="[color ?? 'text-blue-cornflower', size ?? 'text-base']"
		>
			<slot />
		</component>
		<component
			:is="tag"
			v-if="type === 'H1'"
			class="text-blue-cornflower font-black text-lg md:text-xl"
			:class="[color ?? 'text-blue-cornflower', size ?? 'text-lg md:text-xl']"
		>
			<slot />
		</component>

		<component
			:is="tag"
			v-if="type === 'H2'"
			class="font-bold text-md md:text-lg"
			:class="[color ?? 'text-blue-cornflower', size ?? 'text-md md:text-lg']"
		>
			<slot />
		</component>
	</div>
</template>
