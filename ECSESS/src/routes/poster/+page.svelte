<script lang="ts">
	import Section from 'components/layout/Section.svelte';
	import SeoMetaTags from 'components/layout/SeoMetaTags.svelte';
	import { campaignSite } from '$lib/campaign-content';

	let { data } = $props();

	const { poster } = campaignSite;
	const downloadName = 'joseph-ecsess-poster';
</script>

<SeoMetaTags
	title={campaignSite.seo.poster.title}
	description={campaignSite.seo.poster.description}
	canonical={data.canonical}
/>

<Section from="from-ecsess-black" to="to-ecsess-850" via="via-ecsess-900" contentStart={true}>
	<div class="mx-auto w-full max-w-5xl py-12 text-left">
		<p class="text-ecsess-300 text-xs font-bold tracking-[0.24em] uppercase">Campaign visual</p>
		<h1 class="page-title text-ecsess-50 mt-2 mb-4">{poster.title}</h1>
		<p class="text-ecsess-200 max-w-3xl text-lg leading-8">{poster.description}</p>

		<div class="mt-10 flex justify-center">
			<div
				class="border-ecsess-700 from-ecsess-850 to-ecsess-800 w-full max-w-md rounded-[2rem] border bg-gradient-to-br p-5 shadow-2xl"
			>
				<div
					class="border-ecsess-600 bg-ecsess-900/60 flex aspect-[3/4] items-center justify-center rounded-[1.5rem] border border-dashed p-6 text-center"
				>
					{#if poster.assetPath}
						<div class="w-full">
							<img src={poster.assetPath} alt={poster.alt} class="h-full w-full rounded-[1.25rem] object-cover" />
							<div class="mt-4 flex flex-wrap justify-center gap-3">
								<a
									href={poster.assetPath}
									target="_blank"
									rel="noopener noreferrer"
									class="text-ecsess-50 bg-ecsess-600 hover:bg-ecsess-500 inline-flex rounded-full px-5 py-3 text-sm font-bold tracking-[0.16em] uppercase transition-colors"
								>
									Open poster
								</a>
								<a
									href={poster.assetPath}
									download={downloadName}
									class="border-ecsess-500/70 text-ecsess-50 hover:bg-ecsess-900/70 inline-flex rounded-full border px-5 py-3 text-sm font-bold tracking-[0.16em] uppercase transition-colors"
								>
									Download poster
								</a>
							</div>
						</div>
					{:else}
						<div>
							<p class="text-ecsess-300 text-xs font-bold tracking-[0.24em] uppercase">Poster placeholder</p>
							<h2 class="text-ecsess-50 mt-3 text-3xl font-black">Canva export pending</h2>
							<p class="text-ecsess-200 mt-4 leading-7">{poster.callout}</p>
							<button
								type="button"
								disabled
								class="border-ecsess-700 text-ecsess-300 mt-6 inline-flex cursor-not-allowed rounded-full border px-5 py-3 text-sm font-bold tracking-[0.16em] uppercase opacity-70"
							>
								Download available soon
							</button>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</Section>
