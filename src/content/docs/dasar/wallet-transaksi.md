---
title: Wallet, Address, & Transaksi
description: Memahami wallet, address, private key, dan cara kirim transaksi di Web3.
---

## Wallet = Kunci + Alamat

Wallet di Web3 **bukan tempat menyimpan uang**. Dia alat buat:

1. **Membuat key pair** (private key + public key)
2. **Tanda tangan transaksi**
3. **Interaksi sama smart contract**

Analogi: wallet itu seperti **dompet fisik Anda** — isinya bukan uang, tetapi kartu ATM. Kartunya Anda menggunakan untuk akses rekening.

## 3 Komponen Wallet

### 1. Private Key (Kunci Rahasia)
```
0x7c852118294e51e653712a81e05800f419141751be5f0e21a6c7d24a1e7e5d4e
```
- **ABSOLUTELY SECRET.** Siapa pun yang memegang ini = Anda.
- Jangan pernah share, screenshot, atau simpen di cloud.
- Di testnet tidak masalah, tetapi biasakan aman dari awal.

### 2. Public Key → Address
Address adalah hash dari public key, bentuknya:
```
0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7
```
- Ini yang Anda share ke orang ("alamat Anda")
- Aman dipublikasikan
- Seperti nomor rekening

### 3. Seed Phrase (12/24 kata)
```
witch collapse practice feed shame open despair creek road again willow least
```
- Representasi human-readable dari private key
- **Simpen di kertas, bukan di komputer**
- Bisa restore wallet Anda di device lain

## Jenis Wallet

| Jenis | Contoh | Aman? | Buat? |
|-------|--------|-------|-------|
| **Software (hot)** | MetaMask, Rabby | ⭐⭐ | Transaksi sehari-hari, development |
| **Hardware (cold)** | Ledger, Trezor | ⭐⭐⭐⭐⭐ | Simpen aset besar |
| **Paper** | Kertas | ⭐⭐⭐ | Backup, long-term storage |

Untuk belajar: install **MetaMask** extension di browser.

## Transaksi: Bagaimana Kirim ETH?

Tiap transaksi isinya:
- **from**: address pengirim (Anda)
- **to**: address penerima
- **value**: jumlah ETH yang dikirim
- **gasLimit**: maksimum gas yang Anda bayar
- **gasPrice**: harga per unit gas (dalam gwei)

Anda tanda tangan transaksi menggunakan private key → broadcast ke jaringan → node validasi → masuk blok.

## Nonce: Nomor Urut Transaksi

Tiap address punya counter yang disebut **nonce**. Transaksi pertama Anda = nonce 0, kedua = nonce 1, dst.

Gunanya:
1. **Mencegah double-spend** — transaksi yang sama tidak bisa diproses 2x
2. **Urutan** — nonce lebih kecil harus diproses duluan

Ini mengapa kalau transaksi Anda stuck, transaksi berikutnya juga tidak bisa jalan — nunggu nonce yang sebelumnya selesai.

> **Private key = password hidup Anda. Address = username publik Anda. Seed phrase = backup.**

Lanjut: [Gas, Fee, & Nonce →](/dasar/gas-fee-nonce/)