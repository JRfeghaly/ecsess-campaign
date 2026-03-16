<script lang="ts">
	import Section from 'components/layout/Section.svelte';
	import SeoMetaTags from 'components/layout/SeoMetaTags.svelte';
	import { campaignSite } from '$lib/campaign-content';

	let { data } = $props();

	const { achievements } = campaignSite;
</script>

<SeoMetaTags
	title={campaignSite.seo.achievements.title}
	description={campaignSite.seo.achievements.description}
	canonical={data.canonical}
/>

<Section from="from-ecsess-black" to="to-ecsess-850" via="via-ecsess-900" contentStart={true}>
	<div class="mx-auto w-full max-w-6xl py-12 text-left">
		<p class="text-ecsess-300 text-xs font-bold tracking-[0.24em] uppercase">Proof of execution</p>
		<h1 class="page-title text-ecsess-50 mt-2 mb-4">{achievements.title}</h1>
		<p class="text-ecsess-200 max-w-4xl text-lg leading-8">{achievements.intro}</p>

		<div class="mt-10 grid gap-5 md:grid-cols-2">
			{#each achievements.items as item}
				<article
					class="border-ecsess-700 from-ecsess-850/95 to-ecsess-800/95 rounded-[1.75rem] border bg-gradient-to-br p-6 shadow-xl"
				>
					<p class="text-ecsess-300 text-xs font-bold tracking-[0.24em] uppercase">{item.tag}</p>
					<h2 class="text-ecsess-50 mt-3 text-2xl font-extrabold">{item.title}</h2>
					<p class="text-ecsess-200 mt-3 leading-7">{item.summary}</p>
					<div class="border-ecsess-700 mt-5 border-t pt-4">
						<p class="text-ecsess-100 text-sm leading-6">{item.impact}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</Section>
