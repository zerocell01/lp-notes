---
title: Range, In-Range vs OOR
description: Apa artinya posisi in-range dan out-of-range, dan mengapa itu penting.
---

Saat Anda jadi LP di DLMM, Anda memilih **range** - kumpulan bin dari harga bawah sampai harga atas. Posisimu hanya menghasilkan fee selama harga ada **di dalam** range itu.

## In-Range vs Out-of-Range (OOR)

- **In-range** - harga (active bin) ada di dalam range posisi Anda. ✅ Fee jalan.
- **Out-of-range (OOR)** - harga keluar dari range. ❌ Fee berhenti.

Saat OOR, modal Anda "diam". Tidak hilang, tetapi tidak bekerja. Ini masalah utama LP token volatil: harga bisa lari keluar range dengan cepat.

## Mengapa range itu trade-off

- **Range sempit** → fee per bin lebih padat (modal terkonsentrasi), tetapi **mudah OOR**.
- **Range lebar** → lebih tahan terhadap goyangan harga, tetapi fee lebih encer (modal tersebar).

Tidak ada jawaban tunggal. Lebar ideal tergantung **seberapa liar token bergerak** - itu sebabnya volatilitas jadi kunci penentu lebar range. Dibahas di [bagian Volatilitas](/volatilitas/atr/).

## Saat OOR terjadi

Beberapa pilihan umum:

1. **Tunggu** - kalau yakin harga balik ke range, biarkan. Tetapi modal menganggur selama itu.
2. **Tutup posisi** - ambil yang ada, redeploy di range baru sesuai harga sekarang.
3. **Ikut tren** - kalau harga jelas pindah arah, posisi lama mungkin sudah tidak relevan.

## Mental model

Range itu seperti jaring ikan yang Anda memasang di sungai. Kalau ikan (harga) lewat jaring, Anda dapat. Jaring terlalu sempit: sering meleset. Terlalu lebar: jaringnya tipis, tangkapan per titik kecil. Lebar jaring harus disesuaikan dengan seberapa liar arus sungainya.
