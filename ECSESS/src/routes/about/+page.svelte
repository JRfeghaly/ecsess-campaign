<script lang="ts">
	import Section from 'components/layout/Section.svelte';
	import SeoMetaTags from 'components/layout/SeoMetaTags.svelte';
	import { campaignSite } from '$lib/campaign-content';

	let { data } = $props();

	const { about } = campaignSite;
</script>

<SeoMetaTags
	title={campaignSite.seo.about.title}
	description={campaignSite.seo.about.description}
	canonical={data.canonical}
/>

<Section
	from="from-ecsess-black"
	to="to-ecsess-900"
	via="via-ecsess-950"
	contentStart={true}
	fullHeight={false}
>
	<div class="mx-auto w-full max-w-6xl pt-12 pb-4 text-left">
		<p class="text-ecsess-300 text-xs font-bold tracking-[0.24em] uppercase">About</p>
		<h1 class="page-title text-ecsess-50 mt-2 mb-4">{about.title}</h1>
		<p class="text-ecsess-200 max-w-4xl text-lg leading-8">{about.bio}</p>
	</div>
</Section>

<Section
	from="from-ecsess-900"
	to="to-ecsess-800"
	via="via-ecsess-750"
	contentStart={true}
	fullHeight={false}
>
	<div class="mx-auto w-full max-w-6xl pt-4 pb-12 text-left">
		<div class="mb-6 max-w-3xl">
			<h2 class="text-ecsess-50 text-3xl font-black md:text-5xl">My involvement, year by year.</h2>
		</div>

		<div class="relative">
			<div class="bg-ecsess-500/80 absolute left-10 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full md:block"></div>
			<div class="space-y-10">
				{#each about.years as yearGroup}
					<section class="relative grid gap-6 md:grid-cols-[5rem_1fr]">
						<div class="relative hidden md:flex md:justify-center">
							<div class="border-ecsess-500 bg-ecsess-950 text-ecsess-50 relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-black">
								{yearGroup.year}
							</div>
						</div>

						<div class="space-y-5">
							<div class="md:hidden">
								<span class="border-ecsess-500 bg-ecsess-950 text-ecsess-50 inline-flex rounded-full border px-4 py-2 text-sm font-black">
									{yearGroup.year}
								</span>
							</div>

							<div class="grid gap-5 xl:grid-cols-2">
								{#each yearGroup.items as item}
									<article class="border-ecsess-700 from-ecsess-850/95 to-ecsess-800/95 rounded-[1.75rem] border bg-gradient-to-br p-5 shadow-xl">
										<h3 class="text-ecsess-50 text-2xl font-extrabold">{item.role}</h3>
										{#if item.imagePath}
											<div class="border-ecsess-700 bg-ecsess-900/40 mt-5 overflow-hidden rounded-[1.25rem] border shadow-lg">
												<img
													src={item.imagePath}
													alt={`Photo for ${item.role}`}
													class="aspect-[4/3] h-full w-full object-cover"
													loading="lazy"
												/>
											</div>
										{:else}
											<div class="border-ecsess-700 bg-ecsess-900/50 mt-5 flex aspect-[4/3] items-center justify-center rounded-[1.25rem] border border-dashed px-6 text-center">
												<p class="text-ecsess-300 text-sm font-semibold uppercase tracking-[0.18em]">
													{item.imageLabel}
												</p>
											</div>
										{/if}
									</article>
								{/each}
							</div>
						</div>
					</section>
				{/each}
			</div>
		</div>
	</div>
</Section>
