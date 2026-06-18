---
title: RPC, Provider, & Endpoint
description: Apa itu RPC, bagaimana aplikasi berbicara sama blockchain, dan provider mana yang dipakai.
---

## Bagaimana aplikasi berbicara sama blockchain?

Blockchain Ethereum jalan di ribuan node. Anda butuh **jembatan** untuk berbicara sama mereka. Jembatan itu = **RPC (Remote Procedure Call)**.

```
Aplikasi Anda → RPC Endpoint → Node Ethereum → Blockchain
(Ethers.js) (Infura) (Geth/Nethermind)
```

## Apa itu RPC?

RPC = cara program manggil function yang berjalan di komputer lain. Di Web3, Anda manggil fungsi blockchain (cek saldo, kirim transaksi, panggil kontrak) lewat HTTP/WebSocket.

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
 "result": "0x0234c8a3397aab58" // balance dalam wei (hex)
}
```

Anda tidak perlu menulis JSON-RPC manual — Ethers.js (dan library lain) handle ini.

## Provider

Provider = objek yang konek ke RPC endpoint. Dia jembatan antara kode Anda dan Ethereum.

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
| **Public RPC** | Rate-limited | `rpc.sepolia.org`, tidak reliable |

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

WebSocket bagus untuk dengerin event kontrak (misal: notifikasi tiap ada transfer).

## Membuat RPC endpoint sendiri?

Bisa. Anda bisa menjalankan node Ethereum sendiri (Geth, Nethermind). Tetapi:
- Storage: 1TB+ (archive node lebih besar)
- Bandwidth: besar
- Maintenance: 24/7

Untuk development: menggunakan provider gratis. Untuk production dengan SLA: menggunakan provider berbayar.

## Rate Limiting

Provider gratis ada limit. Kalau terkena limit:
- Request Anda ditolak (HTTP 429)
- Transaksi tetap kepending (gagal broadcast)

Solusi:
- Gunakan lebih dari 1 provider (fallback)
- Gunakan `StaticJsonRpcProvider` (Ethers.js) — batch request
- Upgrade ke plan berbayar kalau sudah production

> **Provider = kartu tol Anda ke blockchain. Tanpa provider, kode Anda hanya teks biasa — tidak bisa ngapa-ngapain on-chain.**

Lanjut: [Baca Blockchain dengan Ethers.js →](/tools/ethers-baca/)