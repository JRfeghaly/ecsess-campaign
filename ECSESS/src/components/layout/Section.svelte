<script>
	/**
	 * Props:
	 * - from/to: pass full Tailwind gradient color classes (e.g., 'from-ecsess-950', 'to-ecsess-800')
	 * - direction: Tailwind gradient direction suffix (e.g., 'to-b', 'to-r'), defaults to vertical
	 * - black: legacy toggle for solid background (kept for backward compatibility)
	 */
	let {
		children = () => 'Section placeholder',
		from = '',
		to = '',
		via = '',
		direction = 'to-b', // to bottom
		black = false,
		contentStart = false,
		fullHeight = true
	} = $props();

	const base = 'mx-auto flex flex-col items-center gap-4 p-4 text-center text-ecsess-100';

	let tailwindClasses = $state(base);

	$effect(() => {
		const justifyClass = contentStart ? 'justify-start' : 'justify-center';
		const heightClass = fullHeight ? 'min-h-[90vh]' : '';
		const layoutClasses = `${base} ${heightClass} ${justifyClass}`.trim();
		if (from && to) {
			tailwindClasses = `${layoutClasses} bg-gradient-${direction} ${from} ${to} ${via}`;
		} else {
			tailwindClasses = layoutClasses + (black ? ' bg-ecsess-black' : ' bg-ecsess-800');
		}
	});
</script>

<div class={tailwindClasses}>
	{@render children()}
</div>
