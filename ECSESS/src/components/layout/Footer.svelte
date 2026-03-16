<script lang="ts">
	import { Instagram, Mail } from '@lucide/svelte';
	import { campaignSite } from '$lib/campaign-content';

	const year = new Date().getFullYear();
</script>

<footer class="border-ecsess-900 bg-ecsess-black text-ecsess-100 border-t px-4 py-8">
	<div class="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
		<div class="max-w-2xl text-center md:text-left">
			<p class="text-ecsess-50 text-lg font-extrabold tracking-[0.06em] uppercase">
				{campaignSite.footer.title}
			</p>
			{#if campaignSite.footer.description}
				<p class="text-ecsess-200 mt-2 leading-relaxed">
					{campaignSite.footer.description}
				</p>
			{/if}
		</div>

		<div class="text-center md:text-right">
			<p class="text-ecsess-300 text-sm font-semibold uppercase">
				{campaignSite.footer.contactLabel}
			</p>
			<div class="mt-2 flex flex-col items-center gap-3 md:items-end">
				<a
					href={campaignSite.footer.contactHref}
					class="text-ecsess-100 hover:text-ecsess-300 inline-flex items-center gap-2 text-base transition-colors"
				>
					<Instagram size={18} aria-hidden="true" />
					<span>{campaignSite.footer.contactValue}</span>
				</a>
				<a
					href={campaignSite.footer.emailHref}
					class="text-ecsess-100 hover:text-ecsess-300 inline-flex items-center gap-2 text-base transition-colors"
				>
					<Mail size={18} aria-hidden="true" />
					<span>{campaignSite.footer.emailValue}</span>
				</a>
			</div>
			{#if campaignSite.footer.status}
				<p class="text-ecsess-300 mt-3 text-sm">{campaignSite.footer.status}</p>
			{/if}
		</div>
	</div>

	<div class="border-ecsess-900 mt-6 border-t pt-4 text-center">
		<p class="text-ecsess-300 text-sm">&copy; {year} Joseph campaign website.</p>
	</div>
</footer>
