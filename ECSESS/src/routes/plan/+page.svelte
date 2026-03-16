<script lang="ts">
	import Section from 'components/layout/Section.svelte';
	import SeoMetaTags from 'components/layout/SeoMetaTags.svelte';
	import { campaignSite } from '$lib/campaign-content';

	let { data } = $props();

	const { plan } = campaignSite;
</script>

<SeoMetaTags
	title={campaignSite.seo.plan.title}
	description={campaignSite.seo.plan.description}
	canonical={data.canonical}
/>

<Section from="from-ecsess-black" to="to-ecsess-900" via="via-ecsess-950" contentStart={true}>
	<div class="mx-auto w-full max-w-6xl py-12 text-left">
		<p class="text-ecsess-300 text-xs font-bold tracking-[0.24em] uppercase">Campaign platform</p>
		<h1 class="page-title text-ecsess-50 mt-2 mb-4">{plan.title}</h1>
		<p class="text-ecsess-200 max-w-4xl text-lg leading-8">{plan.intro}</p>

		<div class="mt-10 grid gap-5 lg:grid-cols-2">
			{#each plan.pillars as pillar}
				<article
					class="border-ecsess-700 from-ecsess-850 to-ecsess-800 rounded-[1.75rem] border bg-gradient-to-br p-6 shadow-xl"
				>
					<p class="text-ecsess-300 text-xs font-bold tracking-[0.24em] uppercase">{pillar.accent}</p>
					<h2 class="text-ecsess-50 mt-3 text-2xl font-extrabold">{pillar.title}</h2>
					<p class="text-ecsess-200 mt-3 leading-7">{pillar.summary}</p>
					<ul class="mt-5 space-y-3">
						{#each pillar.bullets as bullet}
							<li class="border-ecsess-700 bg-ecsess-900/50 rounded-2xl border px-4 py-3 text-ecsess-100">
								{bullet}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</Section>
