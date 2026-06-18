---
title: Fitur Khas DLMM Meteora
description: Hal-hal yang membedakan DLMM Meteora dari AMM biasa - strategi likuiditas, dynamic fee, dan bin step.
---

DLMM (Dynamic Liquidity Market Maker) adalah produk likuiditas terkonsentrasi dari **Meteora** di Solana. Selain konsep [bin dan range](/dasar/dlmm-dan-bin/) yang umum, Meteora punya beberapa ciri khas yang penting dipahami sebelum jadi LP.

## Tiga strategi sebaran likuiditas

Saat membuka posisi, Meteora memberi pilihan **bagaimana modal disebarkan** ke dalam bin:

- **Spot** - likuiditas dibagi rata ke semua bin dalam range. Serbaguna, cocok untuk kebanyakan kondisi. Pilihan default yang aman untuk pemula.
- **Curve** - likuiditas dipadatkan di tengah range. Cocok saat Anda yakin harga akan banyak bergerak di sekitar harga sekarang - fee lebih padat selama harga "betah" di tengah.
- **Bid-Ask** - kebalikan dari Curve: likuiditas dipadatkan di ujung-ujung range. Cocok untuk strategi DCA atau menangkap volatilitas, karena modal menunggu di harga jauh dari titik sekarang.

Pemilihan strategi mengubah di mana fee paling banyak dipanen dan bagaimana posisi bereaksi terhadap pergerakan harga.

## Bin step menentukan presisi

**Bin step** adalah jarak harga antar bin, dinyatakan dalam basis point. Tiap pool punya bin step-nya sendiri:

- **Bin step kecil** → bin rapat → presisi harga tinggi, fee per transaksi lebih kecil. Cocok untuk pasangan stabil.
- **Bin step besar** → bin renggang → menutup range lebar dengan sedikit bin, fee per transaksi lebih besar. Cocok untuk token volatil.

Memilih pool dengan bin step yang pas itu bagian dari strategi: token liar biasanya lebih cocok di pool bin step besar.

## Dynamic fee

Salah satu keunggulan DLMM Meteora: **fee bisa naik otomatis saat pasar bergejolak.** Saat volatilitas tinggi (banyak transaksi dalam waktu singkat), protokol menambahkan fee variabel di atas base fee. Artinya:

- LP dapat kompensasi lebih besar justru saat risiko (volatilitas) sedang tinggi.
- Saat pasar tenang, fee kembali ke base.

Ini berbeda dari AMM klasik yang fee-nya flat. Untuk LP memecoin, dynamic fee bisa jadi penyumbang yield yang signifikan saat token lagi liar.

## Fee diklaim terpisah

Di DLMM Meteora, fee yang Anda hasilkan **tidak otomatis di-reinvest** - dia menumpuk sebagai fee yang bisa diklaim (unclaimed). Ini relevan untuk keputusan [hold vs cut](/psikologi/hold-vs-cut/): fee yang belum diklaim adalah nilai nyata yang sudah Anda kantongi, walau posisinya sendiri lagi merah sementara.

## Likuiditas satu sisi (single-sided)

Anda bisa menyetor likuiditas **hanya dengan satu token** (misal hanya SOL), bukan harus pasangan seimbang. Ini memungkinkan strategi seperti menaruh modal di bawah harga sekarang untuk "menangkap" token saat harga turun - pendekatan yang umum dipakai untuk entry bertahap.

## Intinya

DLMM Meteora bukan sekadar AMM dengan range. Strategi sebaran (Spot/Curve/Bid-Ask), bin step, dynamic fee, dan likuiditas satu sisi memberi LP banyak kendali - tetapi juga banyak keputusan. Paham alat-alat ini dulu sebelum mempertaruhkan modal.

:::note
Halaman ini menjelaskan fitur publik DLMM Meteora secara umum. Cara persis memanfaatkannya (parameter, threshold, timing) tergantung strategi dan toleransi risiko masing-masing.
:::
