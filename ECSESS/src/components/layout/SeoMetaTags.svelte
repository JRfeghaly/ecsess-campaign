<script>
	let {
		title = 'Joseph for ECSESS President',
		description = "Explore Joseph's campaign for ECSESS President, including his background, platform, achievements, and poster.",
		canonical = 'https://ecsess.mcgilleus.ca'
	} = $props();
</script>

<svelte:head>
	<!-- Meta Tags Generated with https://metatags.io -->
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<!-- X (Twitter) -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={canonical} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
</svelte:head>
