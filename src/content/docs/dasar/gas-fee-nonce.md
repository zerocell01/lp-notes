---
title: Gas, Fee, & Nonce
description: Mengapa transaksi di Ethereum butuh "bensin" (gas) dan bagaimana ngitung biayanya.
---

## Mengapa ada "Gas"?

Ethereum itu komputer dunia. Tiap operasi — kirim ETH, deploy kontrak, panggil fungsi — butuh **komputasi**. Komputasi tidak gratis. "Gas" adalah unit yang ngukur **seberapa berat komputasi transaksi Anda**.

Analogi: Anda nyetir mobil. Gas = bensin. Semakin jauh → semakin banyak bensin. Semakin kompleks transaksi → semakin banyak gas.

## Gas Limit vs Gas Price

### Gas Limit
Batas maksimum gas yang Anda siap bayar. Anda set ini. Contoh:
- Kirim ETH biasa: `21.000` gas
- Transfer token ERC-20: `65.000` gas
- Deploy smart contract: `1.000.000+` gas

Kalau transaksi butuh lebih dari limit → **gagal, gas tetap terpotong.**

### Gas Price (gwei)
Harga per unit gas, dalam **gwei** (1 gwei = 0.000000001 ETH = 1 nano-ETH). Semakin tinggi → semakin cepat diproses miner/validator.

## Rumus Biaya Transaksi

```
Total Fee = Gas Used × Gas Price

Contoh:
 21.000 gas × 20 gwei
 = 420.000 gwei
 = 0.00042 ETH
```

## Mengapa transaksi bisa mahal?

Gas price ditentukan supply & demand. Kalau banyak orang transaksi barengan (NFT mint, airdrop claim), gas price naik — seperti macet, ojol jadi mahal.

Sekarang (post-EIP-1559), fee dipecah 2:
- **Base fee** — dibakar (ETH jadi deflasi)
- **Priority fee (tip)** — untuk validator

## Cara hemat gas

1. **Transaksi pas sepi** — weekend atau tengah malam UTC
2. **Gunakan L2** — Arbitrum, Optimism, Base gas-nya jauh lebih murah
3. **Batch transaksi** — kirim beberapa sekaligus

## Nonce (sekali lagi)

Nonce dimulai dari 0 dan naik tiap transaksi sukses. Kalau Anda kirim transaksi nonce=5 tetapi belum diproses, semua transaksi nonce > 5 **tidak akan diproses** — nunggu yang 5 selesai dulu.

**Fix kalau stuck**: kirim transaksi baru dengan nonce yang sama + gas lebih tinggi → gantiin transaksi lama.

> **Gas = biaya komputasi. Gas price = Anda nawar berapa. Gas limit = pagu maksimum. Nonce = nomor antrian.**

Lanjut: [Smart Contract →](/smart-contract/apa-itu/)