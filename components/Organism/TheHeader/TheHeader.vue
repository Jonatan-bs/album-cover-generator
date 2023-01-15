<script src="./TheHeader.ts" lang="ts"></script>
<template>
	<header class="pt-md container">
		<div ref="refMenu" class="relative">
			<MoleculeBurgerMenu
				class="absolute right-[0] top-[0] z-10"
				:is-active="menuIsActive"
				@click="toggleMenu"
			/>
			<nav
				class="w-screen h-screen bg-blue-light-house fixed top-[0] transition-[left,opacity] duration-300"
				:class="
					menuIsActive
						? 'left-[0] opacity-100'
						: 'left-[6rem] opacity-0 pointer-events-none'
				"
			>
				<ul class="container pt-lg">
					<NuxtLink to="/" @click="toggleMenu" :tabindex="menuIsActive ? '0' : '-1'"
						><li class="text-white text-lg mb-3xs">Frontpage</li></NuxtLink
					>
					<NuxtLink
						to="/generate"
						@click="toggleMenu"
						:tabindex="menuIsActive ? '0' : '-1'"
						><li class="text-yellow-energy-yellow text-lg mb-3xs">
							Create Cover
						</li></NuxtLink
					>
					<NuxtLink @click="toggleMenu" :tabindex="menuIsActive ? '0' : '-1'" to="#"
						><li class="text-white text-lg mb-3xs">Buy more credit</li></NuxtLink
					>
					<NuxtLink @click="toggleMenu" :tabindex="menuIsActive ? '0' : '-1'" to="#"
						><li class="text-white text-lg mb-3xs">Profile</li></NuxtLink
					>
					<NuxtLink @click="toggleMenu" :tabindex="menuIsActive ? '0' : '-1'" to="#"
						><li class="text-white text-lg mb-3xs">Privacy policy</li></NuxtLink
					>
					<NuxtLink @click="toggleMenu" :tabindex="menuIsActive ? '0' : '-1'" to="#"
						><li class="text-white text-lg mb-3xs">Contact</li></NuxtLink
					>
					<NuxtLink @click="toggleMenu" :tabindex="menuIsActive ? '0' : '-1'" to="#"
						><li class="text-white text-lg mb-3xs">Log Out</li></NuxtLink
					>
				</ul>
			</nav>
		</div>
		<NuxtLink to="/">
			<h1 class="text-center text-white text-xl font-bold leading-none">
				Album Cover Generator
			</h1>
			<p class="text-center text-white text-md italic font-light">
				Use AI to generate your next album or single cover
			</p>
		</NuxtLink>
	</header>
</template>
