---
title: DEX vs CEX
description: Decentralized vs Centralized Exchange — beda, kelebihan, kekurangan, dan kapan pakai yang mana.
---

## CEX: Centralized Exchange

Contoh: Binance, Coinbase, Tokocrypto, Kraken.

Cara kerja:
1. Lo deposit aset ke wallet exchange
2. Exchange yang megang aset lo (custodial)
3. Trading terjadi di database internal exchange — **bukan di blockchain**
4. Lo tarik (withdraw) → baru transaksi on-chain

### Kelebihan CEX
- Cepat & murah (internal matching)
- Likuiditas besar
- Ada customer support
- Bisa deposit fiat (IDR, USD)
- UI friendly

### Kekurangan CEX
- **Not your keys, not your coins** — exchange megang aset lo
- Bisa di-hack (lihat Mt. Gox, FTX)
- Bisa freeze akun lo
- KYC wajib (gak anonim)

---

## DEX: Decentralized Exchange

Contoh: Uniswap, SushiSwap, PancakeSwap, Raydium.

Cara kerja:
1. Lo connect wallet (MetaMask) — **aset tetap di wallet lo**
2. Trading terjadi via smart contract on-chain
3. Lo swap, approve, add liquidity — semua on-chain

### Kelebihan DEX
- **Self-custody** — lo yang megang aset
- Permissionless — gak perlu KYC
- Transparan — semua kode & transaksi bisa diaudit
- Akses token baru lebih cepet

### Kekurangan DEX
- Gas fee (setiap transaksi on-chain)
- Slippage (harga berubah saat transaksi diproses)
- Lebih kompleks — harus ngerti wallet, approve, gas
- Rawan MEV & sandwich attack

---

## Perbandingan langsung

| Aspek | CEX | DEX |
|-------|:---:|:---:|
| **Kustodi** | Exchange | Lo sendiri |
| **KYC** | Wajib | Gak perlu |
| **Biaya** | 0.1% trading fee | 0.3% swap fee + gas |
| **Kecepatan** | Instan (off-chain) | ~15 detik (on-chain) |
| **Likuiditas** | Besar | Tergantung pool |
| **Token baru** | Listing lambat | Langsung available |

---

## Kapan pake CEX vs DEX?

**Pake CEX kalau:**
- On/off-ramp fiat (IDR ↔ crypto)
- Trading besar (likuiditas dalam)
- Limit order & fitur trading lanjutan
- Lo belom nyaman megang private key

**Pake DEX kalau:**
- Lo pengen akses token yang belom listing di CEX
- Lo mau LP / yield farming
- Lo peduli self-custody
- Transaksi kecil (gas fee % jadi signifikan kalau value kecil)

---

> **CEX = lo titip uang di loket. DEX = lo transaksi langsung di pasar. Dua-duanya punya tempat, tapi prinsipnya beda total.**

Lanjut: [Liquidity Pool & AMM →](/defi/liquidity-pool-amm/)