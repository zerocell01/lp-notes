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
			customCss: ['./src/styles/custom.css'],
			description:
				'Catatan publik belajar likuiditas DLMM Meteora di Solana, memecoin, dan psikologi trading. Konsep, tips, dan pelajaran — bukan saran finansial.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Bahasa Indonesia', lang: 'id' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/zerocell01/lp-notes' },
			],
			head: [
				// Preconnect Google Fonts
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
				// Reading progress bar script
				{
					tag: 'script',
					content: `
						document.addEventListener('DOMContentLoaded', () => {
							const bar = document.createElement('div');
							bar.id = 'reading-progress';
							document.body.prepend(bar);
							window.addEventListener('scroll', () => {
								const scrollTop = document.documentElement.scrollTop;
								const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
								const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
								bar.style.width = progress + '%';
							});
						});
					`,
				},
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{
					label: '🚀 Mulai di Sini',
					items: [
						{ label: 'Tentang Catatan Ini', slug: 'mulai/tentang' },
						{ label: 'LP Manual vs LP dengan Agent', slug: 'mulai/lp-manual-vs-agent' },
						{ label: 'Disclaimer', slug: 'mulai/disclaimer' },
					],
				},
				{
					label: '📘 Dasar DLMM',
					items: [
						{ label: 'Apa itu DLMM & Bin', slug: 'dasar/dlmm-dan-bin' },
						{ label: 'Range, In-Range vs OOR', slug: 'dasar/range-dan-oor' },
						{ label: 'Fitur Khas DLMM Meteora', slug: 'dasar/fitur-meteora' },
						{ label: 'Impermanent Loss di DLMM', slug: 'dasar/impermanent-loss' },
					],
				},
				{
					label: '📊 Volatilitas & Range',
					items: [
						{ label: 'ATR: Mengukur Goyangan Harga', slug: 'volatilitas/atr' },
						{ label: 'Lebar Range Mengikuti Volatilitas', slug: 'volatilitas/lebar-range' },
						{ label: 'RSI: Cara Baca & Konfigurasi', slug: 'volatilitas/rsi' },
						{ label: 'Supertrend: Pengukur Arah Tren', slug: 'volatilitas/supertrend' },
						{ label: 'Bollinger Bands: Pita Volatilitas', slug: 'volatilitas/bollinger' },
						{ label: 'Fibonacci: Support & Resistance', slug: 'volatilitas/fibonacci' },
						{ label: 'Cheat Sheet: Membaca Laporan Posisi', slug: 'volatilitas/cheat-sheet' },
					],
				},
				{
					label: '💰 Fee & Pemilihan Pool',
					items: [
						{ label: 'Fee = Volume ÷ TVL, Bukan Mcap', slug: 'fee/volume-tvl' },
					],
				},
				{
					label: '🧠 Psikologi & Strategi',
					items: [
						{ label: 'Sabar: Edge yang Sering Dilupakan', slug: 'psikologi/sabar' },
						{ label: 'Kapan Hold, Kapan Cut', slug: 'psikologi/hold-vs-cut' },
						{ label: 'Kapan LP Menang vs Kalah', slug: 'psikologi/kapan-lp-menang' },
					],
				},
				{
					label: '⚙️ Operator & Otomasi',
					items: [
						{ label: 'Install Hermes Agent di VPS', slug: 'operator/install-hermes-vps' },
						{ label: 'Install Meridian (Agent LP) di VPS', slug: 'operator/install-meridian-vps' },
						{ label: 'Troubleshooting Operator', slug: 'operator/troubleshooting' },
					],
				},
				{
					label: '💡 Tips Singkat',
					items: [{ autogenerate: { directory: 'tips' } }],
				},
				{ label: '📖 Glossary Istilah', slug: 'glossary' },
			],
		}),
	],
});
