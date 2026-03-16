export type CampaignNavItem = {
	label: string;
	href: string;
};

export type CampaignPreviewCard = {
	eyebrow: string;
	title: string;
	description: string;
	href: string;
	cta: string;
};

export type CampaignInvolvementItem = {
	role: string;
	description: string;
	imageLabel: string;
	imagePath?: string;
};

export type CampaignYearGroup = {
	year: string;
	items: CampaignInvolvementItem[];
};

export type CampaignAchievement = {
	tag: string;
	title: string;
	summary: string;
	impact: string;
};

export type CampaignPlanPillar = {
	title: string;
	accent: string;
	summary: string;
	bullets: string[];
};

export type CampaignPosterConfig = {
	title: string;
	description: string;
	assetPath: string | null;
	alt: string;
	callout: string;
};

type CampaignSeoEntry = {
	title: string;
	description: string;
};

type CampaignSiteContent = {
	candidateName: string;
	role: string;
	brandText: string;
	navItems: CampaignNavItem[];
	home: {
		eyebrow: string;
		title: string;
		intro: string;
		focusPoints: string[];
		primaryCta: CampaignNavItem;
		secondaryCta: CampaignNavItem;
		previewCards: CampaignPreviewCard[];
	};
	about: {
		title: string;
		bio: string;
		years: CampaignYearGroup[];
		valuesTitle: string;
		values: string[];
	};
	achievements: {
		title: string;
		intro: string;
		items: CampaignAchievement[];
	};
	plan: {
		title: string;
		intro: string;
		pillars: CampaignPlanPillar[];
	};
	poster: CampaignPosterConfig;
	footer: {
		title: string;
		description: string;
		contactLabel: string;
		contactValue: string;
		contactHref: string;
		emailValue: string;
		emailHref: string;
		status: string;
	};
	seo: {
		home: CampaignSeoEntry;
		about: CampaignSeoEntry;
		achievements: CampaignSeoEntry;
		plan: CampaignSeoEntry;
		poster: CampaignSeoEntry;
	};
};

export const campaignSite: CampaignSiteContent = {
	candidateName: 'Joseph',
	role: 'ECSESS President',
	brandText: 'Vote Joseph for ECSESS President',
	navItems: [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Achievements', href: '/achievements' },
		{ label: 'My Plan', href: '/plan' },
		{ label: 'Poster', href: '/poster' }
	],
	home: {
		eyebrow: 'McGill ECSESS Elections 2026',
		title: 'A greener, sharper ECSESS starts here.',
		intro:
			"Hello everyone! My name is Joseph, I’m originally from Lebanon 🇱🇧, and I’m a U3 Software Engineering student. I use he/him pronouns and I’m excited to be running for next year’s ECSESS President 😁!!!\n\nOver the past three years, I've had the opportunity to be involved with every single ECSESS portfolio, working closely with different teams, and understanding how ECSESS operates from all perspectives. I've been part of the ECSE community for the past 3 years, starting as a General Manager at The Factory, then serving as U2 Software Representative, and now as VP Internal.\n\nOver my past two mandates, I accomplished what I set out to do, and I have proof of those results. Most importantly, over these last three years, I've developed a real passion for the ECSE community💚.\n\nCheck out my campaign platform below 👇",
		focusPoints: [
			'Cut the noise and make updates easier to follow.',
			'Back student ideas with visible follow-through.',
			'Bring greener choices into the way ECSESS plans and runs.'
		],
		primaryCta: { label: 'Read My Plan', href: '/plan' },
		secondaryCta: { label: 'About Me', href: '/about' },
		previewCards: [
			{
				eyebrow: 'Background',
				title: 'About Me',
				description:
					'Get to know my past involvements at McGill and how they shaped my approach to serving as ECSESS President 📚💚.',
				href: '/about',
				cta: 'Open the About page'
			},
			{
				eyebrow: 'Execution',
				title: 'Achievements',
				description:
					'Over my time on ECSESS, I have worked across many portfolios and delivered changes that made a real difference for students 🏆.',
				href: '/achievements',
				cta: 'View the achievements'
			},
			{
				eyebrow: 'Platform',
				title: 'My Plan',
				description:
					'Have a look at the practical plan I want to bring forward next year and how I would lead ECSESS with clearer priorities 📋.',
				href: '/plan',
				cta: 'See the full platform'
			},
			{
				eyebrow: 'Visuals',
				title: 'Poster',
				description:
					'Check out my campaign flyer and the visual message behind my run for ECSESS President 📣.',
				href: '/poster',
				cta: 'Preview the poster page'
			}
		]
	},
	about: {
		title: 'About Me',
		bio:
			"Have a look at my involvement in the ECSE community over the past four years at McGill University 🚀. Each role reflects a step in my journey, showing how I’ve contributed, learned, and grown while working with students across different parts of ECSESS 💚⚡️🎓",
		years: [
			{
				year: 'U3',
				items: [
					{
						role: 'ECSESS VP Internal',
						description: 'Description and accomplishments for this role will go here.',
						imageLabel: 'Upload VP Internal photo here',
					imagePath: '/council_u3.JPG'
					},
					{
						role: 'MPMA Outreach Director',
						description: 'Description and accomplishments for this role will go here.',
						imageLabel: 'Upload MPMA Outreach Director photo here',
					imagePath: '/mpma_team.jpg'
					},
					{
						role: 'MERT Manager',
						description: 'Description and accomplishments for this role will go here.',
						imageLabel: 'Upload MERT Manager photo here',
					imagePath: '/raclette.jpg'
					}
				]
			},
			{
				year: 'U2',
				items: [
					{
						role: 'U2 Software Representative',
						description: 'Description and accomplishments for this role will go here.',
						imageLabel: 'Upload U2 Software Representative photo here',
					imagePath: '/council_photogrp.jpg'
					},
					{
						role: 'McGill Engineering Competition (MEC) VP Logistics',
						description: 'Description and accomplishments for this role will go here.',
						imageLabel: 'Upload MEC VP Logistics photo here',
					imagePath: '/MEC.jpg'
					},
					{
						role: 'MERTW Coord',
						description: 'Description and accomplishments for this role will go here.',
						imageLabel: 'Upload MERTW Coord photo here',
					imagePath: '/mertw_fall.jpg'
					},
					{
						role: 'Frosh Leader',
						description: 'Description and accomplishments for this role will go here.',
						imageLabel: 'Upload Frosh Leader photo here',
					imagePath: '/frosh_leader.jpg'
					},
					{
						role: 'Exchange semester in Hong Kong',
						description: 'Description, highlights, and exchange photos will go here.',
						imageLabel: 'Upload Hong Kong exchange photo here',
					imagePath: '/Hong_Kong.jpg'
					}
				]
			},
			{
				year: 'U1',
				items: [
					{
						role: 'The Factory General Manager',
						description: 'Description and accomplishments for this role will go here.',
						imageLabel: 'Upload The Factory photo here',
					imagePath: '/factory.png'
					}
				]
			},
			{
				year: 'U0',
				items: [
					{
						role: 'EngGames Delegate',
						description: 'Description and accomplishments for this role will go here.',
						imageLabel: 'Upload EngGames photo here',
					imagePath: '/enggames.jpg'
					}
				]
			}
		],
		valuesTitle: 'What This Timeline Shows',
		values: [
			'Most recent roles first, oldest roles at the bottom.',
			'Every involvement card keeps room for a short description and an image.',
			'The goal is to show the full arc of involvement across the ECSE community.'
		]
	},
	achievements: {
		title: 'Achievements 🏆',
		intro:
			'These achievements reflect the work I have done to create concrete change in ECSESS and improve the student experience across the ECSE community.',
		items: [
			{
				tag: 'Leadership 🚀',
				title: 'Made the 4th co-op optional for new Software Engineering students',
				summary:
					'During my mandate as U2 Software Representative, I made the 4th co-op optional for new Software Engineering students. Now students can choose between a 4th co-op or an extra Technical Complementary.',
				impact:
					'This gave students more flexibility in how they plan internships and their degree path. 🎓'
			},
			{
				tag: 'Community 💚',
				title: 'Opened a Social Committee',
				summary:
					'I opened a new Social Committee under ECSE to increase outreach to the ECSE community and better connect with different types of students from a wider range of backgrounds.',
				impact:
					'The goal was to help more students feel included and represented in the ECSE community. 🤝'
			},
			{
				tag: 'Governance 🗳️',
				title: 'Moved most VP positions to voting-based selection',
				summary:
					'I moved most VP positions from interview-based selection to voting-based selection because I believe the ECSE community should help decide who gets the chance to make a difference.',
				impact:
					'This made the process more democratic, more transparent, and more accountable to the students those roles are meant to serve. ⚖️'
			},
			{
				tag: 'Outreach 📣',
				title: 'Rebuilt engagement across the ECSE community',
				summary:
					'We had a major outreach problem, and a lot of our events were struggling with low attendance. I worked to rebuild engagement across the ECSE community so that more students felt connected to what ECSESS was organizing.',
				impact:
					'The change was visible in turnout. For example, E-Week participation increased from around 80 students to 120 students this year. 📊'
			}
		]
	},
	plan: {
		title: 'My Plan 🚀',
		intro:
			'Have a look at my goals for next year ! ✨',
		pillars: [
			{
				title: 'Alumni Advisory Board 🤝',
				accent: 'Clarity',
				summary:
					'ECSE has an incredible network of alumni working across industry, startups, and research. By creating an ECSE Alumni Advisory Board, we can reconnect our alumni community, strengthen the lineage of ECSE over the years, and create meaningful opportunities for students to learn from and collaborate with graduates who want to give back.',
				bullets: [
					'Establish an ECSE Alumni Advisory Board that meets a few times per year to maintain continuity and long-term vision for the community.',
					'Organize alumni events such as networking evenings or annual dinners to reconnect graduates with each other and the community.',
					'Strengthen alumni connections to create more industry connections and opportunities for ECSE students.',
					'Encourage alumni engagement in initiatives such as McGill24 and other opportunities to support the ECSE community.'
				]
			},
			{
				title: 'A More Relevant Software Curriculum 💻',
				accent: 'Reform',
				summary:
					'There have been ongoing calls to redefine the Software Engineering program so it better reflects students’ needs and modern industry expectations. That process has already begun, with changes such as making the fourth co-op optional and allowing students to replace it with a technical complementary course, but there is still more work to do to ensure the program feels relevant, practical, and well-structured.',
				bullets: [
					'Advocate for a review of the Software Engineering curriculum so that redundant classes such as ECSE 428, 429 are removed.',
					'Push for more practical content such as DevOps, Docker, testing, and software delivery (ECSE 437 for example).',
					'Promote more data-focused and industry-relevant course options.'
				]
			},
			{
				title: 'Stronger Graduate Connections 🔬',
				accent: 'Access',
				summary:
					'Recreate relations with the Electrical and Computer Engineering Graduate Student Society (EEGSS) to build stronger ties between undergraduate students, graduate students, and faculty. This can open up more opportunities for students to connect with professors, access labs, and better understand the different master’s programs available to them.',
				bullets: [
					'Build strong relationship between ECSESS and EEGSS.',
					'Create more opportunities for undergraduate students to meet professors and graduate students.',
					'Improve student access to labs, research spaces, and academic environments within the department.',
					'Help students learn more about master’s programs and research paths through direct contact with faculty and graduate students.'
				]
			},
			{
				title: 'More Sustainable ECSESS Events 🌱',
				accent: 'Momentum',
				summary:
					'I want to get our events sustainability-certified, which is something ECSESS has not done yet. By doing so, we would encourage ourselves to plan events more sustainably and make environmental responsibility a more intentional part of how we operate as a society.',
				bullets: [
					'Work toward getting ECSESS events sustainability-certified.',
					'Encourage organizers to make more sustainable choices when planning events.',
					'Make sustainability a more visible and intentional part of ECSESS event culture.'
				]
			},
			{
				title: 'Broader Student Representation 🤝',
				accent: 'Access',
				summary:
					'ECSESS should do more to represent the many different groups that make up our department. I want to make sure more students feel included, heard, and reflected in the decisions, events, and initiatives of the society. 💚',
				bullets: [
					'Take more initiative to represent students from all groups within the department by highlighting student initiatives and important events through ECSESS communication channels and social media. 🌍',
					'Encourage broader outreach to students with different backgrounds, interests, and experiences by promoting events and milestones that matter to members of our community, such as recognizing women in ECSE during International Women\'s Day. 📣',
					'Build a society that feels more inclusive and connected to the full ECSE community by sharing information about resources and initiatives that support students, such as prayer spaces and community events during Ramadan in Building around campus. ⚡'
				]
			},
			{
				title: 'Stronger Community Connections 🔗',
				accent: 'Momentum',
				summary:
					'I want to better connect ECSESS with the wider ECSE community and its subcommittees. By creating stronger links with groups such as To Bits, IEEE, CodeJam, and The Factory, we can better share events, improve outreach, and make the department feel more connected as a whole. 💚',
				bullets: [
					'Create a shared Slack space connecting ECSESS with groups such as Bits, IEEE, CodeJam, and The Factory to better propagate events and initiatives. 💬',
					'Strengthen communication between ECSESS and its subcommittees so that opportunities are shared more widely across the department. 📣',
					'Increase outreach to first-year students as much as possible, building on the efforts made this year 🎓',
				]
			},
		]
	},
	poster: {
		title: 'Poster',
		description:
			'Take a look at my campaign poster and keep it handy for election season 📣',
		assetPath: '/poster.png',
		alt: 'Joseph campaign poster placeholder',
		callout: 'Final Canva poster coming soon.'
	},
	footer: {
		title: 'Joseph for ECSESS President',
		description: '',
		contactLabel: 'Contact',
		contactValue: '@Joseph_for_ecsess_president',
		contactHref: 'https://www.instagram.com/joseph_for_ecsess_president?igsh=MTkzM3FuNXFvNWhlcw%3D%3D&utm_source=qr',
		emailValue: 'joseph.rouhanafeghaly@mail.mcgill.ca',
		emailHref: 'mailto:joseph.rouhanafeghaly@mail.mcgill.ca',
		status: ''
	},
	seo: {
		home: {
			title: 'Joseph for ECSESS President',
			description:
				"Explore Joseph's ECSESS presidential campaign, priorities, background, and platform in a focused multi-page campaign site."
		},
		about: {
			title: 'About Joseph | ECSESS President Campaign',
			description:
				"Read Joseph's campaign biography, past involvements, and leadership approach for the ECSESS presidency run."
		},
		achievements: {
			title: 'Achievements | Joseph for ECSESS President',
			description:
				"See the achievements page structure for Joseph's ECSESS presidential campaign and the results it is designed to showcase."
		},
		plan: {
			title: 'My Plan | Joseph for ECSESS President',
			description:
				"Review Joseph's campaign plan for ECSESS, including transparency, better student experience, greener operations, and project support."
		},
		poster: {
			title: 'Poster | Joseph for ECSESS President',
			description:
				"Preview the campaign poster page for Joseph's ECSESS presidential run. The final Canva export will be added here."
		}
	}
};
