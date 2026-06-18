// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Domain final situs (untuk sitemap & SEO)
	site: 'https://meridiannotes.vercel.app',
	integrations: [
		starlight({
			title: 'Catatan Belajar Web3',
			customCss: ['./src/styles/custom.css'],
			description:
				'Catatan publik belajar Web3 dari nol: blockchain, smart contract, DeFi, NFT, dan tools developer. Konsep, tutorial praktis, dan pelajaran — ditulis dari pemula untuk pemula.',
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
						{ label: 'Disclaimer', slug: 'mulai/disclaimer' },
					],
				},
				{
					label: '🌐 Dasar Web3',
					items: [
						{ label: 'Apa itu Web3?', slug: 'dasar/apa-itu-web3' },
						{ label: 'Blockchain 101', slug: 'dasar/blockchain-101' },
						{ label: 'Wallet, Address, & Transaksi', slug: 'dasar/wallet-transaksi' },
						{ label: 'Gas, Fee, & Nonce', slug: 'dasar/gas-fee-nonce' },
					],
				},
				{
					label: '📜 Smart Contract',
					items: [
						{ label: 'Apa itu Smart Contract?', slug: 'smart-contract/apa-itu' },
						{ label: 'Solidity Dasar (Variables & Functions)', slug: 'smart-contract/solidity-dasar' },
						{ label: 'Mapping, Struct, Array', slug: 'smart-contract/mapping-struct-array' },
						{ label: 'Deploy ke Testnet Pertama Kali', slug: 'smart-contract/deploy-testnet' },
					],
				},
				{
					label: '🔗 DeFi Dasar',
					items: [
						{ label: 'Apa itu DeFi?', slug: 'defi/apa-itu-defi' },
						{ label: 'DEX vs CEX', slug: 'defi/dex-vs-cex' },
						{ label: 'Liquidity Pool & AMM', slug: 'defi/liquidity-pool-amm' },
						{ label: 'Yield Farming & Staking', slug: 'defi/yield-farming-staking' },
					],
				},
				{
					label: '🪙 Token & NFT',
					items: [
						{ label: 'Token Standard (ERC-20, ERC-721, ERC-1155)', slug: 'token/token-standard' },
						{ label: 'Bikin Token Sendiri (ERC-20)', slug: 'token/bikin-token' },
						{ label: 'NFT dari Nol', slug: 'token/nft-dari-nol' },
					],
				},
				{
					label: '⚙️ Tools Developer',
					items: [
						{ label: 'Environment: Node, Hardhat, Foundry', slug: 'tools/environment' },
						{ label: 'RPC, Provider, & Endpoint', slug: 'tools/rpc-provider' },
						{ label: 'Baca Blockchain dengan Ethers.js', slug: 'tools/ethers-baca' },
						{ label: 'Kirim TX dengan Ethers.js', slug: 'tools/ethers-kirim-tx' },
						{ label: 'Explorer & Verifikasi Kontrak', slug: 'tools/explorer-verifikasi' },
					],
				},
				{
					label: '💡 Tips & Pelajaran',
					items: [{ autogenerate: { directory: 'tips' } }],
				},
				{ label: '📖 Glossary Istilah', slug: 'glossary' },
			],
		}),
	],
});
