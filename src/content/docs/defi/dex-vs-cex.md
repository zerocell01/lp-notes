---
title: DEX vs CEX
description: Decentralized vs Centralized Exchange — berbeda, kelebihan, kekurangan, dan kapan pakai yang mana.
---

## CEX: Centralized Exchange

Contoh: Binance, Coinbase, Tokocrypto, Kraken.

Cara kerja:
1. Anda deposit aset ke wallet exchange
2. Exchange yang memegang aset Anda (custodial)
3. Trading terjadi di database internal exchange — **bukan di blockchain**
4. Anda tarik (withdraw) → baru transaksi on-chain

### Kelebihan CEX
- Cepat & murah (internal matching)
- Likuiditas besar
- Ada customer support
- Bisa deposit fiat (IDR, USD)
- UI friendly

### Kekurangan CEX
- **Not your keys, not your coins** — exchange memegang aset Anda
- Bisa di-hack (lihat Mt. Gox, FTX)
- Bisa freeze akun Anda
- KYC wajib (tidak anonim)

---

## DEX: Decentralized Exchange

Contoh: Uniswap, SushiSwap, PancakeSwap, Raydium.

Cara kerja:
1. Anda connect wallet (MetaMask) — **aset tetap di wallet Anda**
2. Trading terjadi via smart contract on-chain
3. Anda swap, approve, add liquidity — semua on-chain

### Kelebihan DEX
- **Self-custody** — Anda yang memegang aset
- Permissionless — tidak perlu KYC
- Transparan — semua kode & transaksi bisa diaudit
- Akses token baru lebih cepat

### Kekurangan DEX
- Gas fee (setiap transaksi on-chain)
- Slippage (harga berubah saat transaksi diproses)
- Lebih kompleks — harus memahami wallet, approve, gas
- Rawan MEV & sandwich attack

---

## Perbandingan langsung

| Aspek | CEX | DEX |
|-------|:---:|:---:|
| **Kustodi** | Exchange | Anda sendiri |
| **KYC** | Wajib | Tidak perlu |
| **Biaya** | 0.1% trading fee | 0.3% swap fee + gas |
| **Kecepatan** | Instan (off-chain) | ~15 detik (on-chain) |
| **Likuiditas** | Besar | Tergantung pool |
| **Token baru** | Listing lambat | Langsung available |

---

## Kapan menggunakan CEX vs DEX?

**Menggunakan CEX kalau:**
- On/off-ramp fiat (IDR ↔ crypto)
- Trading besar (likuiditas dalam)
- Limit order & fitur trading lanjutan
- Anda belom nyaman memegang private key

**Menggunakan DEX kalau:**
- Anda pengen akses token yang belom listing di CEX
- Anda mau LP / yield farming
- Anda peduli self-custody
- Transaksi kecil (gas fee % jadi signifikan kalau value kecil)

---

> **CEX = Anda titip uang di loket. DEX = Anda transaksi langsung di pasar. Dua-duanya punya tempat, tetapi prinsipnya berbeda total.**

Lanjut: [Liquidity Pool & AMM →](/defi/liquidity-pool-amm/)