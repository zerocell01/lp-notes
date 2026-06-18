---
title: Apa itu DLMM & Bin
description: Memahami likuiditas terkonsentrasi dan konsep bin.
---

**DLMM** (Dynamic Liquidity Market Maker) adalah jenis pool likuiditas di mana likuiditas ditempatkan di **rentang harga tertentu**, bukan disebarkan rata dari nol sampai tak hingga seperti AMM klasik.

## Analogi: rak harga

Bayangkan harga sebuah token seperti tangga. Tiap anak tangga punya satu harga. Di DLMM, tiap anak tangga ini disebut **bin**.

- Tiap **bin** = satu kantong harga sempit.
- Anda memilih **bin mana saja** yang mau Anda isi likuiditas.
- Saat harga bergerak melewati bin tempat dana Anda, Anda **dapat fee** dari transaksi di situ.

Berbeda dengan AMM lama yang menyebar dana Anda ke semua kemungkinan harga (banyak yang menganggur), DLMM membiarkan Anda **memusatkan** modal di tempat harga benar-benar bergerak.

## Mengapa ini penting

Karena modal terkonsentrasi, **fee per dolar yang Anda setor jauh lebih besar** - selama harga tetap di dalam bin yang Anda isi. Ini kekuatan utama DLMM.

Tetapi ada konsekuensinya: kalau harga **keluar** dari bin yang Anda isi, posisi Anda berhenti menghasilkan fee. Itu yang dibahas di halaman [Range & OOR](/dasar/range-dan-oor/).

## Istilah dasar

- **Bin** - kantong harga sempit, unit terkecil likuiditas DLMM.
- **Active bin** - bin tempat harga berada *sekarang*. Hanya bin aktif yang menghasilkan fee.
- **Bin step** - jarak harga antar bin. Makin kecil = makin presisi, tetapi makin banyak bin untuk menutup range yang sama.

## Intinya

DLMM = tempatkan uang di rentang harga yang Anda pilih, dapat fee besar saat harga ada di sana. Kekuatannya konsentrasi; tantangannya menjaga harga tetap "di rumah".
