// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Domain final situs (untuk sitemap & SEO)
	site: 'https://meridiannotes.vercel.app',
	integrations: [
		starlight({
			title: 'Catatan LP DLMM Meteora',
			description:
				'Catatan publik belajar likuiditas DLMM Meteora di Solana, memecoin, dan psikologi trading. Konsep, tips, dan pelajaran — bukan saran finansial.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Bahasa Indonesia', lang: 'id' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/zerocell01/lp-notes' },
			],
			sidebar: [
				{
					label: 'Mulai di Sini',
					items: [
						{ label: 'Tentang Catatan Ini', slug: 'mulai/tentang' },
						{ label: 'Disclaimer', slug: 'mulai/disclaimer' },
					],
				},
				{
					label: 'Dasar DLMM',
					items: [
						{ label: 'Apa itu DLMM & Bin', slug: 'dasar/dlmm-dan-bin' },
						{ label: 'Range, In-Range vs OOR', slug: 'dasar/range-dan-oor' },
						{ label: 'Fitur Khas DLMM Meteora', slug: 'dasar/fitur-meteora' },
						{ label: 'Impermanent Loss di DLMM', slug: 'dasar/impermanent-loss' },
					],
				},
				{
					label: 'Volatilitas & Range',
					items: [
						{ label: 'ATR: Mengukur Goyangan Harga', slug: 'volatilitas/atr' },
						{ label: 'Lebar Range Mengikuti Volatilitas', slug: 'volatilitas/lebar-range' },
					],
				},
				{
					label: 'Fee & Pemilihan Pool',
					items: [
						{ label: 'Fee = Volume ÷ TVL, Bukan Mcap', slug: 'fee/volume-tvl' },
					],
				},
				{
					label: 'Psikologi & Strategi',
					items: [
						{ label: 'Sabar: Edge yang Sering Dilupakan', slug: 'psikologi/sabar' },
						{ label: 'Kapan Hold, Kapan Cut', slug: 'psikologi/hold-vs-cut' },
					],
				},
				{
					label: 'Tips Singkat',
					items: [{ autogenerate: { directory: 'tips' } }],
				},
				{ label: 'Glossary Istilah', slug: 'glossary' },
			],
		}),
	],
});
