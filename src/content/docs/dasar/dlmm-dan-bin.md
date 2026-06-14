---
title: Apa itu DLMM & Bin
description: Memahami likuiditas terkonsentrasi dan konsep bin.
---

**DLMM** (Dynamic Liquidity Market Maker) adalah jenis pool likuiditas di mana likuiditas ditaruh di **rentang harga tertentu**, bukan disebar rata dari nol sampai tak hingga seperti AMM klasik.

## Analogi: rak harga

Bayangkan harga sebuah token seperti tangga. Tiap anak tangga punya satu harga. Di DLMM, tiap anak tangga ini disebut **bin**.

- Tiap **bin** = satu kantong harga sempit.
- Kamu memilih **bin mana saja** yang mau kamu isi likuiditas.
- Saat harga bergerak melewati bin tempat uangmu, kamu **dapat fee** dari transaksi di situ.

Berbeda dengan AMM lama yang menyebar uangmu ke semua kemungkinan harga (banyak yang nganggur), DLMM membiarkan kamu **memusatkan** modal di tempat harga benar-benar bergerak.

## Kenapa ini penting

Karena modal terkonsentrasi, **fee per dolar yang kamu setor jauh lebih besar** - selama harga tetap di dalam bin yang kamu isi. Ini kekuatan utama DLMM.

Tapi ada konsekuensinya: kalau harga **keluar** dari bin yang kamu isi, posisimu berhenti menghasilkan fee. Itu yang dibahas di halaman [Range & OOR](/dasar/range-dan-oor/).

## Istilah dasar

- **Bin** - kantong harga sempit, unit terkecil likuiditas DLMM.
- **Active bin** - bin tempat harga berada *sekarang*. Hanya bin aktif yang menghasilkan fee.
- **Bin step** - jarak harga antar bin. Makin kecil = makin presisi, tapi makin banyak bin untuk menutup range yang sama.

## Intinya

DLMM = taruh uang di rentang harga yang kamu pilih, dapat fee tebal saat harga ada di sana. Kekuatannya konsentrasi; tantangannya menjaga harga tetap "di rumah".
