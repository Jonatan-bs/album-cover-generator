<script src="./BurgerMenu.ts" lang="ts"></script>
<template>
	<button>
		<div
			class="transition-opacity w-[4rem] h-[.5rem] bg-white mb-4xs rounded-sm"
			:class="isActive ? 'opacity-0' : 'opacity-100'"
		></div>
		<div class="mb-4xs relative h-[.5rem]">
			<div
				class="transition-transform w-[4rem] h-[.5rem] bg-white rounded-sm top-[0] left-[0] absolute"
				:class="isActive && 'rotate-45'"
			></div>
			<div
				class="transition-transform w-[4rem] h-[.5rem] bg-white rounded-sm top-[0] left-[0] absolute"
				:class="isActive && '-rotate-45'"
			></div>
		</div>
		<div
			class="transition-opacity w-[4rem] h-[.5rem] bg-white rounded-sm"
			:class="isActive ? 'opacity-0' : 'opacity-100'"
		></div>
	</button>
</template>
