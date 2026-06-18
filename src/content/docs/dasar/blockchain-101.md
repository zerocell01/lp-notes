---
title: Blockchain 101
description: Cara kerja blockchain tanpa istilah teknis — dijelasin menggunakan analogi.
---

## Bayangkan begini...

Anda dan 9 temen Anda main monopoli. Tidak ada bank. Kalian sepakat: **tiap transaksi ditulis di buku besar yang semua orang memegang salinannya.**

- Andi bayar Budi Rp50.000 → semua orang catat
- Citra bayar Andi Rp30.000 → semua orang catat
- Satu halaman buku = **satu blok**
- Satu buku utuh = **blockchain**

## Mengapa curang sulit?

Misal Anda mau nipu: "Saya tidak pernah bayar Budi." → Anda harus hapus transaksi itu.

Masalahnya: **9 orang lain masih punya catatan aslinya.** 9 lawan 1 — Anda kalah. Ini yang membuat blockchain **immutable** (tidak bisa diubah).

## Bagaimana di dunia nyata?

Di Web3, "temen" Anda itu ribuan komputer (disebut **node**) yang tersebar di seluruh dunia. Mereka semua memegang salinan blockchain yang identik.

Begitu Anda kirim transaksi:
1. Anda broadcast ke jaringan
2. Node verifikasi: "Saldo cukup? Tanda tangan valid?"
3. Jika iya → transaksi masuk ke blok baru
4. Blok baru di-rantai (chain) ke blok sebelumnya
5. Semua node update salinan mereka

## Blok isinya apa?

Satu blok isinya:
- **Transaksi** — "A kirim 1 ETH ke B", "C deploy smart contract", dll.
- **Timestamp** — kapan blok dibuat
- **Hash blok sebelumnya** — ini yang membuat "rantai" (chain)
- **Nonce** — angka ajaib untuk mining/validasi

## Mengapa disebut "rantai"?

Blok #100 → Blok #101 → Blok #102

Kalau Anda ubah isi blok #100, hash-nya berubah → putus dari blok #101 → blok #101 invalid → semua blok setelahnya juga invalid. Harus ngulang dari awal. Ini yang membuat manipulasi mustahil secara ekonomis.

## Mainnet vs Testnet

- **Mainnet** = blockchain benar-benar. ETH di sini punya nilai uang. Jangan untuk belajar.
- **Testnet** = blockchain latihan. ETH-nya gratis dari faucet. Tempat Anda mencoba-mencoba.

Semua contoh di catatan ini menggunakan **Sepolia testnet** (Ethereum). Aman, gratis, bebas error.

> **Blockchain = database publik yang tidak bisa dihapus, disimpan di ribuan komputer, dan semua orang bisa verifikasi.**

Lanjut: [Wallet, Address, & Transaksi →](/dasar/wallet-transaksi/)