<template>
	<button>
		<div class="group">
			<AtomTextHeading tag="h2" type="SECTION"><slot /></AtomTextHeading>
			<div class="relative mt-4xs flex justify-center">
				<div
					class="group-hover:w-[80%] transition-[width] w-full h-[.5rem] absolute top-[0] bg-gradient-to-r from-blue-neon via-blue-green-neon to-green-neon blur-[.3rem]"
				></div>
				<div
					class="group-hover:w-[80%] transition-[width] w-full h-[.5rem] bg-gradient-to-r from-blue-neon via-blue-green-neon to-green-neon"
				></div>
			</div>
		</div>
	</button>
</template>
