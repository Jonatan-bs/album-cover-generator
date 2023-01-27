<script src="./TheHeader.ts" lang="ts"></script>
<template>
	<header class="pt-md">
		<div ref="refMenu" class="relative">
			<MoleculeBurgerMenu
				class="absolute right-[0] top-[0] z-50"
				:is-active="menuIsActive"
				@click="toggleMenu"
			/>
			<nav
				class="w-screen h-screen bg-blue-light-house fixed top-[0] transition-[left,opacity] duration-300 z-40"
				:class="
					menuIsActive
						? 'left-[0] opacity-100'
						: 'left-[6rem] opacity-0 pointer-events-none'
				"
			>
				<ul class="container pt-lg">
					<li class="text-white text-lg mb-3xs">
						<NuxtLink to="/" @click="toggleMenu" :tabindex="menuIsActive ? '0' : '-1'"
							>Home</NuxtLink
						>
					</li>
					<li class="text-white text-lg mb-3xs">
						<NuxtLink
							v-if="isAuthenticated"
							@click="toggleMenu"
							:tabindex="menuIsActive ? '0' : '-1'"
							to="#"
							>Profile</NuxtLink
						>
					</li>

					<li class="text-white text-lg mb-3xs">
						<button
							v-if="!isAuthenticated"
							@click="login"
							:tabindex="menuIsActive ? '0' : '-1'"
							to="#"
						>
							Log In
						</button>
					</li>
					<li class="text-white text-lg mb-3xs">
						<NuxtLink
							v-if="isAuthenticated"
							@click="logout"
							:tabindex="menuIsActive ? '0' : '-1'"
							to="#"
							>Log Out</NuxtLink
						>
					</li>
					<hr class="text-blue-galaxy my-md" />
					<li class="text-white text-lg mb-3xs">
						<NuxtLink @click="toggleMenu" :tabindex="menuIsActive ? '0' : '-1'" to="#"
							>Privacy policy</NuxtLink
						>
					</li>
					<li class="text-white text-lg mb-3xs">
						<NuxtLink @click="toggleMenu" :tabindex="menuIsActive ? '0' : '-1'" to="#"
							>Contact</NuxtLink
						>
					</li>
				</ul>
			</nav>
		</div>
		<div class="flex justify-center">
			<NuxtLink to="/">
				<div class="inline-block">
					<h1 class="text-center text-white text-xl font-bold leading-none">
						Album Cover Generator
					</h1>
					<p class="text-center text-white text-md italic font-light">
						Use AI to generate your next album or single cover
					</p>
				</div>
			</NuxtLink>
		</div>
	</header>
</template>
