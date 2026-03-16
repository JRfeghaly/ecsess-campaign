import { createClient } from '@sanity/client';
import { env } from '$env/dynamic/private';

const sanityProjectId = env.SANITY_ID ?? env.SANITY_PROJECT_ID;

if (!sanityProjectId) {
	throw new Error(
		'Missing Sanity project ID. Set SANITY_ID (or SANITY_PROJECT_ID) in your .env file.'
	);
}

const client = createClient({
	projectId: sanityProjectId,
	dataset: env.SANITY_DATASET ?? 'production',
	useCdn: true,
	apiVersion: '2025-02-06'
});

/**
 *
 * @param {String} query the GROQ query from Sanity CMS
 */
export async function getFromCMS(query: string) {
	return await client.fetch(query);
}
