---
title: Explorer & Verifikasi Kontrak
description: Cara pakai Etherscan, verifikasi kontrak, baca transaksi, dan debug on-chain.
---

## Apa itu Block Explorer?

Block explorer = **Google untuk blockchain**. Anda bisa cari:

- Alamat wallet → lihat saldo, history transaksi, token holding
- Transaksi → lihat status, gas, value
- Kontrak → baca kode, panggil fungsi, lihat event
- Blok → lihat transaksi dalam 1 blok
- Token → lihat holder, supply, transfer history

Explorer populer:
- **Etherscan** — Ethereum
- **Polygonscan** — Polygon
- **BscScan** — BNB Chain
- **Arbiscan** — Arbitrum
- **Solscan** — Solana

## Cek Transaksi

Buka `https://sepolia.etherscan.io/tx/0xTX_HASH`

Informasi yang Anda mendapatkan:

| Field | Artinya |
|-------|---------|
| **Status** | Success / Failed |
| **Block** | Blok ke berapa |
| **Timestamp** | Kapan dikonfirmasi |
| **From / To** | Address pengirim & penerima |
| **Value** | Jumlah ETH yang dikirim |
| **Transaction Fee** | Total gas yang dibayar |
| **Gas Price** | Harga per gas (gwei) |
| **Gas Limit & Used** | Estimasi vs real |
| **Input Data** | Data yang dikirim ke kontrak (hex) |

### Decode Input Data

Kalau transaksi ke kontrak, "Input Data" bisa Anda decode:

1. Scroll ke input data
2. Klik "Decode Input Data"
3. Etherscan auto-decode kalau kontrak terverifikasi

Hasilnya: nama fungsi + parameter asli (bukan hex).

## Verifikasi Kontrak

Verifikasi = upload source code ke Etherscan supaya orang bisa baca + interaksi via UI.

### Cara 1: Via Hardhat (otomatis)

```bash
# Install plugin
npm install --save-dev @nomicfoundation/hardhat-verify

# hardhat.config.ts
import "@nomicfoundation/hardhat-verify";

const config = {
 etherscan: {
 apiKey: "YOUR_ETHERSCAN_API_KEY" // daftar di etherscan.io
 }
};

# Verify
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS "Constructor arg 1" "arg 2"
```

### Cara 2: Via Remix → Etherscan (manual)

1. Di Remix, deploy kontrak
2. Copy address kontrak
3. Buka Sepolia Etherscan → search address
4. Tab "Contract" → "Verify and Publish"
5. Isi:
 - Compiler Type: `Solidity (Single file)`
 - Compiler Version: `0.8.20`
 - Open Source License: `MIT`
6. Copy-paste kode kontrak
7. Kalau constructor ada parameter → isi ABI-encoded
8. Submit

### Cara 3: Via Foundry

```bash
forge verify-contract \
 --rpc-url $SEPOLIA_RPC \
 --etherscan-api-key $ETHERSCAN_API_KEY \
 DEPLOYED_ADDRESS \
 src/MyContract.sol:MyContract \
 --constructor-args $(cast abi-encode "constructor(uint256)" 1000000)
```

## Baca Kontrak di Etherscan

Kalau kontrak terverifikasi:
- **Tab Code** → baca source code
- **Tab Read Contract** → panggil fungsi view lewat UI
- **Tab Write Contract** → panggil fungsi write (connect wallet)
- **Tab Events** → lihat log event

Tidak perlu menulis kode untuk interaksi — Etherscan UI handle semuanya.

## Cek Wallet

Buka `https://sepolia.etherscan.io/address/0xADDRESS`

Informasi yang keluar:
- ETH Balance
- Token holdings (ERC-20, ERC-721, ERC-1155)
- Transaction history
- Internal transactions (kontrak → kontrak)
- Multichain portfolio

### Token Holdings vs Transaction History

Token yang Anda terima **tidak selalu** muncul di transaction list lo. Transfer token dicatat di **event log kontrak token**, bukan di transaksi lo. Etherscan auto-index ini.

## Event Log

Setiap emit `event` di kontrak menghasilkan log yang bisa dicari:

1. Buka kontrak → tab "Events"
2. Filter by event name, topic, date
3. Contoh: `Transfer(address indexed from, address indexed to, uint256 value)` → semua transfer token

## API Etherscan

Etherscan punya API untuk akses data programmatically:

```
https://api-sepolia.etherscan.io/api
 ?module=account
 &action=txlist
 &address=0x...
 &apikey=YOUR_API_KEY
```

Contoh use case: monitor transaksi masuk, cek status kontrak, download history.

## Tips

1. **Bookmark explorer testnet** — sering terpakai untuk debug
2. **Gunakan testnet explorer** — jangan cari testnet address di mainnet explorer
3. **Verifikasi kontrak selalu** — kontrak unverified = black box, sulit debug
4. **Simpan tx hash** — screenshot / copy paste pas deploy, jadi mudah dicari

> **Etherscan = mata publik blockchain. Semua transaksi on-chain bisa dilihat siapa pun — tidak ada privasi, tetapi ada transparansi total.**

Lanjut: [Glossary Istilah →](/glossary/)