---
title: Yield Farming & Staking
description: Bagaimana caranya "uang bekerja" di DeFi — staking, farming, compounding, dan risikonya.
---

## Yield = Hasil / Imbal Balik

Yield dalam DeFi = imbal hasil yang Anda mendapatkan karena **nyediain likuiditas** atau **ngunci token**.

Bedakan:
- **Staking** = kunci token di protokol untuk mendapatkan reward
- **Yield Farming** = nyetor LP token atau aset ke protokol untuk mendapatkan yield + insentif token
- **Liquidity Mining** = farming yang reward-nya token asli protokol

## Staking

### Proof of Stake (PoS)
Anda stake ETH untuk bantu amankan jaringan Ethereum → mendapatkan reward (mirip deposito, tetapi Anda bantu validasi transaksi). Contoh: Lido, Rocket Pool.

### Protocol Staking
Anda kunci token suatu protokol untuk mendapatkan:
- Voting power (governance)
- Bagi hasil (revenue share)
- veToken model (lock lebih lama = boost lebih besar)

Contoh: Curve (veCRV), Convex (cvxCRV).

## Yield Farming

### Cara kerja LP + Farming
1. Anda setor ETH-USDC ke Uniswap → mendapatkan LP token
2. Anda setor LP token ke farming pool (misal SushiSwap) → mendapatkan SUSHI token
3. SUSHI bisa Anda jual atau compound (tambah LP lagi)

### APR vs APY
- **APR** (Annual Percentage Rate) — bunga sederhana, tidak termasuk compounding
- **APY** (Annual Percentage Yield) — bunga berbunga, termasuk compounding

APY selalu lebih tinggi dari APR. Contoh: APR 100% dengan compounding harian = APY ~171%.

> Kalau ada yang nawarin APY 1,000,000% — itu murni karena token inflasi. Harga token turun secepat reward masuk. APY tinggi ≠ untung.

## Strategi umum

| Strategi | Risiko | Kompleksitas | Contoh |
|----------|:------:|:------------:|--------|
| Stablecoin LP | Rendah | Rendah | USDC-DAI di Uniswap |
| Staking ETH | Rendah | Rendah | Lido (stETH) |
| LP Blue Chip | Sedang | Sedang | ETH-wBTC di Curve |
| Farming token baru | Tinggi | Sedang | Token governance DeFi baru |
| Leveraged yield | Sangat tinggi | Tinggi | Looping di lending protocol |

## Risiko Yield Farming

1. **Impermanent Loss** — LP dengan token volatil
2. **Token dump** — reward token harganya turun terus
3. **Smart contract risk** — protokol di-hack
4. **Rug pull** — dev kabur
5. **Liquidations** — kalau menggunakan leverage
6. **Depeg** — stablecoin LP bisa jeblok kalau salah satu stablecoin depeg

## Compounding: Bunga Berbunga

Auto-compound = hasil farming otomatis ditambahkan ke posisi → hasil berikutnya lebih besar.

Tools: Yearn, Beefy, Autofarm. Mereka otomatis claim reward → swap → tambah LP, bolak-balik.

## Rule of thumb

> **Kalau yield-nya di atas 20% APY, tanya: "dari mana duitnya?" Kalau tidak ada jawaban jelas → kemungkinan besar Anda yang jadi yield.** Token baru inflasi tinggi menggunakan yield tinggi untuk narik likuiditas — 99% tidak sustainable.

Lanjut: [Token & NFT →](/token/token-standard/)