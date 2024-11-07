// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import react from '@astrojs/react';

import remarkToc from 'remark-toc';
import rehypeToc from 'rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutoLinkHeading from 'rehype-autolink-headings';

import { rehypeHeadingIds } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
	site: 'https://patradanai.com',
	output: 'server',
	adapter: vercel(),
	vite: {
		ssr: {
			noExternal: ['react-icons'],
		},
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		icon(),
		react({
			experimentalReactChildren: true,
		}),
	],
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			rehypeHeadingIds,
			rehypeAutoLinkHeading,
		],
		remarkPlugins: [
			[
				remarkToc,
				{
					tight: true,
					maxDepth: 3,
				},
			],
		],
		syntaxHighlight: 'prism',
		gfm: true,
		smartypants: true,
	},
});
