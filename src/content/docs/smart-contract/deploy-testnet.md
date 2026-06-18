---
title: Deploy ke Testnet Pertama Kali
description: Panduan step-by-step deploy smart contract pertama lo ke Sepolia testnet pake Remix (no CLI).
---

## Prasyarat

Sebelum mulai:
1. **Install MetaMask** di browser
2. **Bikin wallet** (simpen seed phrase di kertas!)
3. **Tambahin Sepolia testnet** ke MetaMask:
   - Klik network dropdown → "Add network" → "Add manually"
   - Network Name: `Sepolia Testnet`
   - RPC URL: `https://sepolia.infura.io/v3/` (atau `https://rpc.sepolia.org`)
   - Chain ID: `11155111`
   - Currency Symbol: `ETH`
   - Block Explorer: `https://sepolia.etherscan.io`

## Step 1: Ambil Testnet ETH (Faucet)

Lo butuh ETH Sepolia buat bayar gas deploy. Dapetin gratis:

1. Buka [sepoliafaucet.com](https://sepoliafaucet.com) atau [faucet.quicknode.com/ethereum/sepolia](https://faucet.quicknode.com/ethereum/sepolia)
2. Masukin address wallet lo
3. Tunggu ~1 menit → 0.05 - 0.5 ETH masuk

## Step 2: Buka Remix IDE

Buka [remix.ethereum.org](https://remix.ethereum.org) — IDE browser, gak perlu install apa-apa.

## Step 3: Bikin File Kontrak

Di Remix, bikin file baru `MyFirstContract.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MyFirstContract {
    string public message;
    address public owner;

    constructor(string memory _message) {
        message = _message;
        owner = msg.sender;
    }

    function setMessage(string memory _newMessage) public {
        require(msg.sender == owner, "Only owner can change message");
        message = _newMessage;
    }
}
```

## Step 4: Compile

1. Klik tab "Solidity Compiler" (ikon S)
2. Pilih compiler version `0.8.20` (harus match sama `pragma`)
3. Klik **"Compile MyFirstContract.sol"**

Kalau sukses: ada centang hijau.

## Step 5: Deploy

1. Klik tab "Deploy & Run Transactions" (ikon Ethereum)
2. Environment: pilih **"Injected Provider - MetaMask"**
3. MetaMask akan popup → connect wallet lo
4. Pastikan network di MetaMask = **Sepolia**
5. Di bagian "Deploy", isi parameter constructor: `"Hello Web3!"`
6. Klik **"Deploy"**
7. MetaMask popup → konfirmasi transaksi

Tunggu ~15-30 detik. Kalau sukses, kontrak muncul di "Deployed Contracts".

## Step 6: Interaksi

Klik panah kecil di deployed contract → muncul semua function.

- Klik `message` → lihat isinya ("Hello Web3!")
- Klik `owner` → lihat address lo
- Isi `setMessage` dengan `"Halo dari Sepolia!"` → klik → konfirmasi di MetaMask

## Done!

Kontrak pertama lo udah jalan di blockchain. Cek di [Sepolia Etherscan](https://sepolia.etherscan.io) — masukin address kontraknya.

## Kalau gagal?

| Error | Fix |
|-------|-----|
| "insufficient funds" | Belum ambil faucet |
| "network mismatch" | MetaMask gak di Sepolia |
| "gas estimation failed" | Ada `require()` yang gagal |
| Transaction stuck | Klik "Speed up" di MetaMask |

> **Remix itu taman bermain. Di sini lo bisa eksperimen tanpa konsekuensi. Rusak? Deploy lagi. Semua gratis (di testnet).**

Lanjut: [DeFi Dasar →](/defi/apa-itu-defi/)