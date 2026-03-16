<script lang="ts">
	import Section from 'components/layout/Section.svelte';
	import SeoMetaTags from 'components/layout/SeoMetaTags.svelte';
	import { campaignSite } from '$lib/campaign-content';

	let { data } = $props();

	const { home } = campaignSite;
</script>

<SeoMetaTags
	title={campaignSite.seo.home.title}
	description={campaignSite.seo.home.description}
	canonical={data.canonical}
/>

<Section from="from-ecsess-black" to="to-ecsess-900" via="via-ecsess-950">
	<div class="mx-auto grid w-full max-w-6xl gap-10 py-8 text-left lg:grid-cols-[1.15fr_0.85fr]">
		<div class="flex flex-col justify-center">
			<p
				class="border-ecsess-500/40 bg-ecsess-800/40 text-ecsess-150 mb-4 inline-flex w-fit rounded-full border px-4 py-1 text-xs font-bold tracking-[0.24em] uppercase"
			>
				{home.eyebrow}
			</p>
			<h1 class="page-title text-ecsess-50 mt-0 max-w-4xl leading-none">
				{campaignSite.candidateName} for {campaignSite.role}
			</h1>
			<p class="text-ecsess-200 max-w-2xl whitespace-pre-line text-lg leading-8">
				{home.intro}
			</p>

			<div class="mt-8 flex flex-wrap gap-4">
				<a
					href={home.primaryCta.href}
					class="bg-ecsess-500 text-ecsess-black hover:bg-ecsess-300 rounded-full px-6 py-3 text-sm font-extrabold tracking-[0.14em] uppercase transition-colors"
				>
					{home.primaryCta.label}
				</a>
				<a
					href={home.secondaryCta.href}
					class="border-ecsess-500/60 text-ecsess-50 hover:bg-ecsess-900/60 rounded-full border px-6 py-3 text-sm font-extrabold tracking-[0.14em] uppercase transition-colors"
				>
					{home.secondaryCta.label}
				</a>
			</div>
		</div>

		<div class="flex items-center">
			<div
				class="border-ecsess-800 from-ecsess-850 via-ecsess-800 to-ecsess-700 relative w-full overflow-hidden rounded-[2rem] border bg-gradient-to-br p-6 shadow-2xl"
			>
				<div class="bg-ecsess-300 absolute -top-12 right-6 h-36 w-36 rounded-full opacity-20 blur-3xl"></div>
				<div class="bg-ecsess-100 absolute bottom-0 left-0 h-24 w-24 rounded-full opacity-15 blur-2xl"></div>
				<img
					src="/linkedin picture.JPG"
					alt="Portrait of Joseph"
					class="relative z-10 h-full max-h-[42rem] w-full rounded-[1.5rem] object-cover object-center shadow-2xl"
				/>
			</div>
		</div>
	</div>
</Section>

<Section from="from-ecsess-900" to="to-ecsess-800" via="via-ecsess-750" contentStart={true}>
	<div class="mx-auto w-full max-w-6xl py-12 text-left">
		<div class="mb-8 max-w-3xl">
			<p class="text-ecsess-300 text-xs font-bold tracking-[0.24em] uppercase">Campaign roadmap</p>
			<h2 class="text-ecsess-50 mt-2 text-3xl font-black md:text-5xl">
				Checkout my campaign ! 🚀
			</h2>
		</div>

		<div class="grid gap-5 md:grid-cols-2">
			{#each home.previewCards as card}
				<a
					href={card.href}
					class="border-ecsess-700 from-ecsess-850/95 to-ecsess-800/95 hover:border-ecsess-500 group rounded-[1.75rem] border bg-gradient-to-br p-6 transition-all hover:-translate-y-1"
				>
					<p class="text-ecsess-300 text-xs font-bold tracking-[0.24em] uppercase">
						{card.eyebrow}
					</p>
					<h3 class="text-ecsess-50 mt-3 text-2xl font-extrabold">{card.title}</h3>
					<p class="text-ecsess-200 mt-3 leading-7">{card.description}</p>
					<p class="text-ecsess-100 mt-6 text-sm font-bold tracking-[0.16em] uppercase">
						{card.cta}
					</p>
				</a>
			{/each}
		</div>
	</div>
</Section>
