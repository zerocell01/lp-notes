---
title: RPC, Provider, & Endpoint
description: Apa itu RPC, gimana aplikasi ngomong sama blockchain, dan provider mana yang dipakai.
---

## Gimana aplikasi ngomong sama blockchain?

Blockchain Ethereum jalan di ribuan node. Lo butuh **jembatan** buat ngomong sama mereka. Jembatan itu = **RPC (Remote Procedure Call)**.

```
Aplikasi lo  →  RPC Endpoint  →  Node Ethereum  →  Blockchain
(Ethers.js)     (Infura)          (Geth/Nethermind)
```

## Apa itu RPC?

RPC = cara program manggil function yang jalan di komputer lain. Di Web3, lo manggil fungsi blockchain (cek saldo, kirim transaksi, panggil kontrak) lewat HTTP/WebSocket.

### Request contoh (JSON-RPC)
```json
{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": ["0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7", "latest"],
  "id": 1
}
```

### Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0234c8a3397aab58"  // balance dalam wei (hex)
}
```

Lo gak perlu nulis JSON-RPC manual — Ethers.js (dan library lain) handle ini.

## Provider

Provider = objek yang konek ke RPC endpoint. Dia jembatan antara kode lo dan Ethereum.

```javascript
const { ethers } = require("ethers");

// Provider baca-only (gratis)
const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/YOUR_KEY");

// Provider + wallet (bisa kirim TX)
const wallet = new ethers.Wallet("PRIVATE_KEY", provider);
```

## RPC Provider gratis

| Provider | Limit gratis | Notes |
|----------|:-----------:|-------|
| **Infura** | 100k req/hari | Paling populer, reliable |
| **Alchemy** | 300M CU/bulan | Tooling lengkap, webhook |
| **QuickNode** | 25M req/bulan | Cepat, analytics bagus |
| **Chainstack** | 3M req/bulan | Enterprise-friendly |
| **Public RPC** | Rate-limited | `rpc.sepolia.org`, gak reliable |

## RPC Method yang sering dipakai

| Method | Fungsi |
|--------|--------|
| `eth_getBalance` | Cek saldo ETH address |
| `eth_sendRawTransaction` | Kirim transaksi signed |
| `eth_call` | Panggil fungsi kontrak (read-only) |
| `eth_getTransactionReceipt` | Cek status transaksi |
| `eth_getLogs` | Baca event log kontrak |

## WebSocket vs HTTP

| | HTTP | WebSocket |
|---|:---:|:---:|
| **Cara kerja** | Request → Response | Persistent connection |
| **Use case** | Transaksi, query | Subscribe event real-time |
| **Contoh** | `provider.getBalance()` | `contract.on("Transfer", ...)` |

WebSocket bagus buat dengerin event kontrak (misal: notifikasi tiap ada transfer).

## Bikin RPC endpoint sendiri?

Bisa. Lo bisa jalanin node Ethereum sendiri (Geth, Nethermind). Tapi:
- Storage: 1TB+ (archive node lebih besar)
- Bandwidth: besar
- Maintenance: 24/7

Untuk development: pake provider gratis. Untuk production dengan SLA: pake provider berbayar.

## Rate Limiting

Provider gratis ada limit. Kalau kena limit:
- Request lo ditolak (HTTP 429)
- Transaksi tetap kepending (gagal broadcast)

Solusi:
- Gunakan lebih dari 1 provider (fallback)
- Gunakan `StaticJsonRpcProvider` (Ethers.js) — batch request
- Upgrade ke plan berbayar kalau udah production

> **Provider = kartu tol lo ke blockchain. Tanpa provider, kode lo cuma teks biasa — gak bisa ngapa-ngapain on-chain.**

Lanjut: [Baca Blockchain dengan Ethers.js →](/tools/ethers-baca/)