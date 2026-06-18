---
title: Blockchain 101
description: Cara kerja blockchain tanpa istilah teknis — dijelasin pake analogi.
---

## Bayangin begini...

Lo dan 9 temen lo main monopoli. Gak ada bank. Kalian sepakat: **tiap transaksi ditulis di buku besar yang semua orang megang salinannya.**

- Andi bayar Budi Rp50.000 → semua orang catat
- Citra bayar Andi Rp30.000 → semua orang catat
- Satu halaman buku = **satu blok**
- Satu buku utuh = **blockchain**

## Kenapa curang susah?

Misal lo mau nipu: "Gue gak pernah bayar Budi." → lo harus hapus transaksi itu.

Masalahnya: **9 orang lain masih punya catatan aslinya.** 9 lawan 1 — lo kalah. Ini yang bikin blockchain **immutable** (gak bisa diubah).

## Gimana di dunia nyata?

Di Web3, "temen" lo itu ribuan komputer (disebut **node**) yang tersebar di seluruh dunia. Mereka semua megang salinan blockchain yang identik.

Begitu lo kirim transaksi:
1. Lo broadcast ke jaringan
2. Node verifikasi: "Saldo cukup? Tanda tangan valid?"
3. Kalo iya → transaksi masuk ke blok baru
4. Blok baru di-rantai (chain) ke blok sebelumnya
5. Semua node update salinan mereka

## Blok isinya apa?

Satu blok isinya:
- **Transaksi** — "A kirim 1 ETH ke B", "C deploy smart contract", dll.
- **Timestamp** — kapan blok dibuat
- **Hash blok sebelumnya** — ini yang bikin "rantai" (chain)
- **Nonce** — angka ajaib buat mining/validasi

## Kenapa disebut "rantai"?

Blok #100 → Blok #101 → Blok #102

Kalau lo ubah isi blok #100, hash-nya berubah → putus dari blok #101 → blok #101 invalid → semua blok setelahnya juga invalid. Harus ngulang dari awal. Ini yang bikin manipulasi mustahil secara ekonomis.

## Mainnet vs Testnet

- **Mainnet** = blockchain beneran. ETH di sini punya nilai uang. Jangan buat belajar.
- **Testnet** = blockchain latihan. ETH-nya gratis dari faucet. Tempat lo nyoba-nyoba.

Semua contoh di catatan ini pake **Sepolia testnet** (Ethereum). Aman, gratis, bebas error.

> **Blockchain = database publik yang gak bisa dihapus, disimpen di ribuan komputer, dan semua orang bisa verifikasi.**

Lanjut: [Wallet, Address, & Transaksi →](/dasar/wallet-transaksi/)