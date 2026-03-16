<script lang="ts">
	import { page } from '$app/state';
	import Section from 'components/layout/Section.svelte';
	import Link from 'components/Link.svelte';
	import Button from 'components/Button.svelte';
</script>

<svelte:head>
	<title>{page.status} | Joseph for ECSESS President</title>
</svelte:head>

<Section from="from-ecsess-black" to="to-ecsess-black" via="via-ecsess-800" direction="to-b">
	<p class="text-ecsess-300 text-sm font-bold tracking-[0.22em] uppercase">Campaign route missing</p>
	<h1 class="text-ecsess-100 text-6xl font-black tracking-tighter md:text-8xl">Page not found</h1>
	<Link href="/">
		<Button class="text-ecsess-50 mb-2 cursor-pointer text-lg">Back to homepage</Button>
	</Link>

	<p class="text-ecsess-200 text-lg leading-relaxed md:text-xl">
		This route is not part of the current campaign site build. <br />
		Use the homepage to navigate to the active pages for About, Achievements, My Plan, and Poster.
	</p>

	<p
		class="text-ecsess-200 border-ecsess-300 border-t border-b border-dashed py-2 text-lg leading-relaxed md:text-xl"
	>
		Debug information
	</p>
	<p class="text-ecsess-200 text-base leading-relaxed">
		Status: {page.status ?? 'Unknown'} <br />
		Error: {page.error?.message ?? 'Unknown route'}<br />
	</p>
</Section>
