---
title: Baca Blockchain dengan Ethers.js
description: Tutorial baca data on-chain — cek saldo, panggil fungsi kontrak, subscribe event — pake Ethers.js.
---

## Ethers.js: Library Standar Web3

Ethers.js adalah library JavaScript/TypeScript buat interaksi sama Ethereum. Versi terbaru: **v6**.

```bash
npm install ethers
```

## Setup Provider

```javascript
const { ethers } = require("ethers");

// Bikin provider (baca saja, gak bisa kirim TX)
const provider = new ethers.JsonRpcProvider(
  "https://sepolia.infura.io/v3/YOUR_KEY"
);
```

## 1. Cek saldo ETH

```javascript
async function cekSaldo(address) {
  const balance = await provider.getBalance(address);
  console.log("Saldo (wei):", balance.toString());
  console.log("Saldo (ETH):", ethers.formatEther(balance));
}

cekSaldo("0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7");
// Output: Saldo (ETH): 0.5
```

## 2. Baca data kontrak

Lo butuh **ABI** (Application Binary Interface) — deskripsi fungsi kontrak. Copy ABI dari Etherscan (tab "Contract" → "Code" → scroll ke "Contract ABI").

```javascript
const ABI = [
  // ABI kontrak ERC-20 (ringkas)
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
];

// Address token (misal USDC di Sepolia)
const tokenAddress = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";
const contract = new ethers.Contract(tokenAddress, ABI, provider);

async function bacaToken() {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const decimals = await contract.decimals();
  const totalSupply = await contract.totalSupply();
  const myBalance = await contract.balanceOf("0x742d...");

  console.log(`${name} ($${symbol})`);
  console.log("Decimals:", decimals);
  console.log("Total supply:", ethers.formatUnits(totalSupply, decimals));
  console.log("My balance:", ethers.formatUnits(myBalance, decimals));
}

bacaToken();
```

## 3. Cek receipt transaksi

```javascript
async function cekTx(txHash) {
  const tx = await provider.getTransaction(txHash);
  const receipt = await provider.getTransactionReceipt(txHash);

  console.log("From:", tx.from);
  console.log("To:", tx.to);
  console.log("Value:", ethers.formatEther(tx.value), "ETH");
  console.log("Status:", receipt.status === 1 ? "Sukses" : "Gagal");
  console.log("Block:", receipt.blockNumber);
  console.log("Gas used:", receipt.gasUsed.toString());
}
```

## 4. Subscribe event real-time (WebSocket)

Perlu WebSocket provider:

```javascript
const wsProvider = new ethers.WebSocketProvider(
  "wss://sepolia.infura.io/ws/v3/YOUR_KEY"
);
const contract = new ethers.Contract(tokenAddress, ABI, wsProvider);

// Dengerin tiap ada transfer token
contract.on("Transfer", (from, to, value, event) => {
  console.log(`Transfer ${ethers.formatUnits(value, 6)} USDC`);
  console.log(`  From: ${from}`);
  console.log(`  To: ${to}`);
});
```

## 5. Panggil fungsi view / pure

Semua fungsi `view` dan `pure` di kontrak **gak perlu gas** dan **gak perlu wallet** (asal dipanggil external). Tinggal panggil:

```javascript
const price = await oracleContract.latestAnswer();
const owner = await nftContract.ownerOf(42);
const isPaused = await defiContract.paused();
```

## Error umum

| Error | Penyebab |
|-------|----------|
| `could not detect network` | Provider URL salah / rate-limited |
| `call revert exception` | Fungsi kontrak revert (cek require) |
| `BAD_DATA` | ABI gak cocok sama kontrak |
| `INVALID_ARGUMENT` | Parameter salah (address/amount format) |

> **Provider read-only = mata lo ke blockchain. Semua fungsi view/pure gratis — jangan ragu eksplorasi.**

Lanjut: [Kirim TX dengan Ethers.js →](/tools/ethers-kirim-tx/)