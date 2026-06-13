---
title: Range, In-Range vs OOR
description: Apa artinya posisi in-range dan out-of-range, dan kenapa itu penting.
---

Saat kamu jadi LP di DLMM, kamu memilih **range** — kumpulan bin dari harga bawah sampai harga atas. Posisimu cuma menghasilkan fee selama harga ada **di dalam** range itu.

## In-Range vs Out-of-Range (OOR)

- **In-range** — harga (active bin) ada di dalam range posisimu. ✅ Fee jalan.
- **Out-of-range (OOR)** — harga keluar dari range. ❌ Fee berhenti.

Saat OOR, modalmu "diam". Tidak hilang, tapi tidak bekerja. Ini masalah utama LP token volatil: harga bisa lari keluar range dengan cepat.

## Kenapa range itu trade-off

- **Range sempit** → fee per bin lebih padat (modal terkonsentrasi), tapi **gampang OOR**.
- **Range lebar** → lebih tahan terhadap goyangan harga, tapi fee lebih encer (modal tersebar).

Tidak ada jawaban tunggal. Lebar ideal tergantung **seberapa liar token bergerak** — itu sebabnya volatilitas jadi kunci penentu lebar range. Dibahas di [bagian Volatilitas](/volatilitas/atr/).

## Saat OOR terjadi

Beberapa pilihan umum:

1. **Tunggu** — kalau yakin harga balik ke range, biarkan. Tapi modal nganggur selama itu.
2. **Tutup posisi** — ambil yang ada, redeploy di range baru sesuai harga sekarang.
3. **Ikut tren** — kalau harga jelas pindah arah, posisi lama mungkin sudah tidak relevan.

## Mental model

Range itu seperti jaring ikan yang kamu pasang di sungai. Kalau ikan (harga) lewat jaring, kamu dapat. Jaring terlalu sempit: sering meleset. Terlalu lebar: jaringnya tipis, tangkapan per titik kecil. Lebar jaring harus disesuaikan dengan seberapa liar arus sungainya.
