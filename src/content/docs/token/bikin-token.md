---
title: Membuat Token Sendiri (ERC-20)
description: Tutorial membuat token ERC-20 menggunakan OpenZeppelin — dari nol sampai deploy ke Sepolia.
---

## Pilih: Manual atau OpenZeppelin?

Membuat token dari nol rumit, rawan bug, dan perlu audit. **Selalu menggunakan OpenZeppelin** — library kontrak yang sudah diaudit, battle-tested, dan digunakan mayoritas protokol DeFi.

## Step 1: Buka Remix

Buka [remix.ethereum.org](https://remix.ethereum.org) — pastikan MetaMask terhubung ke Sepolia.

## Step 2: Tulis kontrak

Membuat file `MyToken.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
 // Constructor: nama token, simbol, dan mint supply awal ke yang deploy
 constructor(uint256 initialSupply)
 ERC20("MyToken", "MTK")
 Ownable(msg.sender)
 {
 // Mint initialSupply token ke address yang deploy
 // 1 token = 10^18 wei (18 decimals = standard)
 _mint(msg.sender, initialSupply * 10 ** decimals());
 }

 // Fungsi mint tambahan (hanya owner)
 function mint(address to, uint256 amount) public onlyOwner {
 _mint(to, amount * 10 ** decimals());
 }

 // Fungsi burn (hanya owner)
 function burn(uint256 amount) public onlyOwner {
 _burn(msg.sender, amount * 10 ** decimals());
 }
}
```

## Parameter yang Anda atur

| Parameter | Penjelasan |
|-----------|-----------|
| **Nama token** | `"MyToken"` — nama panjang |
| **Simbol** | `"MTK"` — ticker (seperti BTC, ETH) |
| **Decimals** | Default 18 (1 token = 10^18 wei). Hampir semua token menggunakan 18. |
| **Initial supply** | Berapa token langsung di-mint ke deployer |

## Step 3: Compile & Deploy

1. Tab "Solidity Compiler" → compile
2. Tab "Deploy" → environment: Injected Provider (MetaMask)
3. Isi `initialSupply`: **1000000** (ini 1 juta token)
4. Deploy → konfirmasi di MetaMask

## Step 4: Verifikasi di Etherscan

1. Copy address kontrak
2. Buka [Sepolia Etherscan](https://sepolia.etherscan.io)
3. Cari address kontrak → tab "Contract" → "Verify and Publish"
4. Pilih: Compiler Type `Solidity (Single file)`, Version `0.8.20`, License `MIT`
5. Submit

Kalau sukses: kontrak Anda terverifikasi. Orang bisa baca kode Anda di Etherscan.

## Step 5: Import token ke MetaMask

1. MetaMask → "Import tokens"
2. Paste address kontrak
3. Symbol & decimals auto-fill
4. Import → Token muncul di wallet Anda

## Done! Anda punya token sendiri.

Token ini bisa Anda:
- Transfer ke wallet lain
- Listing di DEX (tambah liquidity pool)
- Menggunakan untuk belajar (airdrop, testing, dll)

## Tambahan opsional

### Capped supply (max supply tetap)
```solidity
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract MyCappedToken is ERC20Capped, Ownable {
 constructor(uint256 cap) ERC20("MyToken", "MTK") ERC20Capped(cap * 10 ** decimals()) Ownable(msg.sender) {
 _mint(msg.sender, cap * 10 ** decimals());
 }
}
```

### Burnable (bisa dibakar)
```solidity
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable {
 // ...
}
```

> **OpenZeppelin itu cheat code. Jangan membuat kontrak dari nol kecuali Anda benar-benar tahu apa yang Anda lakukan. Standard library ini sudah diaudit bernilai miliaran dolar.**

Lanjut: [NFT dari Nol →](/token/nft-dari-nol/)