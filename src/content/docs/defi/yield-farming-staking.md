---
title: Yield Farming & Staking
description: Gimana caranya "uang bekerja" di DeFi — staking, farming, compounding, dan risikonya.
---

## Yield = Hasil / Imbal Balik

Yield dalam DeFi = imbal hasil yang lo dapet karena **nyediain likuiditas** atau **ngunci token**.

Bedakan:
- **Staking** = kunci token di protokol buat dapet reward
- **Yield Farming** = nyetor LP token atau aset ke protokol buat dapet yield + insentif token
- **Liquidity Mining** = farming yang reward-nya token asli protokol

## Staking

### Proof of Stake (PoS)
Lo stake ETH buat bantu amankan jaringan Ethereum → dapet reward (mirip deposito, tapi lo bantu validasi transaksi). Contoh: Lido, Rocket Pool.

### Protocol Staking
Lo kunci token suatu protokol buat dapet:
- Voting power (governance)
- Bagi hasil (revenue share)
- veToken model (lock lebih lama = boost lebih besar)

Contoh: Curve (veCRV), Convex (cvxCRV).

## Yield Farming

### Cara kerja LP + Farming
1. Lo setor ETH-USDC ke Uniswap → dapet LP token
2. Lo setor LP token ke farming pool (misal SushiSwap) → dapet SUSHI token
3. SUSHI bisa lo jual atau compound (tambah LP lagi)

### APR vs APY
- **APR** (Annual Percentage Rate) — bunga sederhana, gak termasuk compounding
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
5. **Liquidations** — kalau pake leverage
6. **Depeg** — stablecoin LP bisa jeblok kalau salah satu stablecoin depeg

## Compounding: Bunga Berbunga

Auto-compound = hasil farming otomatis ditambahin ke posisi → hasil berikutnya lebih besar.

Tools: Yearn, Beefy, Autofarm. Mereka otomatis claim reward → swap → tambah LP, bolak-balik.

## Rule of thumb

> **Kalau yield-nya di atas 20% APY, tanya: "dari mana duitnya?" Kalau gak ada jawaban jelas → kemungkinan besar lo yang jadi yield.** Token baru inflasi tinggi pake yield tinggi buat narik likuiditas — 99% gak sustainable.

Lanjut: [Token & NFT →](/token/token-standard/)