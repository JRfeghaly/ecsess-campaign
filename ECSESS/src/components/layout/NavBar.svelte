<script lang="ts">
	import { page } from '$app/state';
	import { Menu } from '@lucide/svelte';
	import { slide } from 'svelte/transition';
	import { campaignSite } from '$lib/campaign-content';

	let menuHidden = $state(true);

	const closeMenu = () => {
		menuHidden = true;
	};

	const linkClass = (href: string) =>
		page.url.pathname === href
			? 'border-ecsess-200 text-ecsess-50 bg-ecsess-800/70'
			: 'border-transparent text-ecsess-200 hover:border-ecsess-400 hover:text-ecsess-50 hover:bg-ecsess-900/60';
</script>

<div class="sticky top-0 z-40 w-full border-b border-ecsess-800/90 bg-ecsess-black/95 backdrop-blur-md">
	<nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
		<a
			href="/"
			class="text-ecsess-50 max-w-[16rem] text-sm leading-tight font-extrabold tracking-[0.08em] uppercase md:max-w-none md:text-base"
		>
			{campaignSite.brandText}
		</a>

		<button
			type="button"
			class="bg-ecsess-black-hover hover:bg-ecsess-800 active:bg-ecsess-900 grid size-10 place-items-center rounded-md transition-colors md:hidden"
			onclick={() => {
				menuHidden = !menuHidden;
			}}
			aria-label="Toggle navigation"
		>
			<Menu class="size-6" />
		</button>

		<div class="hidden items-center gap-2 md:flex">
			{#each campaignSite.navItems as item}
				<a
					href={item.href}
					class={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${linkClass(item.href)}`}
				>
					{item.label}
				</a>
			{/each}
		</div>
	</nav>

	{#if !menuHidden}
		<div
			class="border-ecsess-800 bg-ecsess-950 mx-3 mb-3 flex flex-col gap-2 rounded-2xl border p-3 shadow-xl md:hidden"
			transition:slide
		>
			{#each campaignSite.navItems as item}
				<a
					href={item.href}
					class={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${linkClass(item.href)}`}
					onclick={closeMenu}
				>
					{item.label}
				</a>
			{/each}
		</div>
	{/if}
</div>
