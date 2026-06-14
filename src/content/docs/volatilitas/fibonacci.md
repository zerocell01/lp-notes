---
title: Fibonacci — Level Support & Resistance
description: Memahami level Fibonacci di agent LP DLMM — apa arti level 0.5, 0.618, 0.786, kenapa disebut support/resistance, dan kenapa ini level psikologis bukan hukum pasti.
---

Baris terakhir yang sering muncul di laporan posisi adalah **Fib** — level Fibonacci terdekat dari harga sekarang. Indikator ini menandai **harga-harga penting** tempat pergerakan sering berhenti, mantul, atau berbalik. Halaman ini menjelaskan cara membacanya tanpa mistik.

## Konsep dasar — retracement

Saat harga naik lalu mulai turun (atau sebaliknya), turunnya jarang langsung ke nol. Biasanya dia turun **sebagian**, lalu lanjut lagi. "Sebagian" inilah yang Fibonacci coba tebak.

Level Fibonacci retracement adalah persentase dari sebuah pergerakan harga. Yang paling sering dipakai:

- **0.500 (50%)** — harga balik setengah jalan dari pergerakan terakhir.
- **0.618 (61.8%)** — disebut "golden ratio", level retracement paling terkenal.
- **0.786 (78.6%)** — retracement dalam; kalau ini jebol, sering tanda pergerakan awal sudah batal.

Agent biasanya menghitung ketiga level ini dari ayunan harga terbaru.

> Analogi: bola yang dilempar ke atas lalu jatuh sering memantul di ketinggian tertentu sebelum naik lagi. Level Fibonacci itu tebakan di ketinggian berapa bola kemungkinan memantul.

## Cara baca di laporan

Di laporan posisi, baris Fib tampil seperti ini:

```text
Fib : 0.618 (0.0004213) — support
```

Artinya:
- **`0.618`** — level Fibonacci terdekat dari harga saat ini.
- **`(0.0004213)`** — harga di level itu.
- **`support`** atau **`resistance`** — perannya relatif ke harga sekarang:
  - **support** = level ada **di bawah** harga sekarang → lantai yang mungkin menahan kalau harga turun.
  - **resistance** = level ada **di atas** harga sekarang → atap yang mungkin menahan kalau harga naik.

Jadi laporan itu memberitahu: "level penting terdekat ada di harga sekian, dan dia berperan sebagai lantai/atap."

## Support vs resistance — dan kenapa bisa bertukar

- **Support** = harga tempat tekanan beli cenderung muncul (lantai).
- **Resistance** = harga tempat tekanan jual cenderung muncul (atap).

Hal penting: **kalau sebuah level ditembus, perannya bertukar.** Resistance yang berhasil dilewati ke atas sering berubah jadi support baru (dan sebaliknya). Itu sebabnya peran `support`/`resistance` di laporan dihitung relatif ke posisi harga **sekarang**, bukan label permanen.

## Bagaimana Fibonacci dipakai sebagai sinyal

Beberapa agent punya preset berbasis Fibonacci. Logikanya berputar di sekitar dua kejadian:

- **Reclaim (rebut kembali ke atas):** harga yang tadinya di bawah sebuah level Fib naik menembusnya → tanda kekuatan, bisa jadi sinyal masuk.
- **Reject (ditolak):** harga naik menyentuh level Fib lalu turun lagi → tanda level itu menahan sebagai resistance, bisa jadi sinyal hati-hati/keluar.

Level yang dipantau biasanya yang utama (0.5 dan 0.618), kadang ditambah 0.786 untuk entry.

## Keterbatasan — ini level psikologis, bukan hukum

Fibonacci sering dibungkus aura mistik ("rasio alam semesta"). Realitanya lebih membumi:

- **Self-fulfilling, bukan ajaib.** Level ini "bekerja" sebagian besar karena **banyak trader memantaunya** dan menaruh order di sana. Bukan karena angka emas mengatur pasar.
- **Tidak presisi.** Harga jarang mantul pas di angka. Anggap level sebagai **zona**, bukan garis tipis.
- **Lemah di memecoin baru.** Fibonacci butuh ayunan harga yang jelas (high & low yang bermakna). Token yang baru meledak beberapa jam belum punya struktur harga yang cukup, jadi level-nya kurang bisa dipercaya.
- **Bukan pemicu tunggal.** Sama seperti indikator lain, Fib paling berguna sebagai **konfirmasi**, bukan alasan aksi sendirian.

## Fibonacci + indikator lain

Fib jadi pelengkap, bukan bintang utama:

- **[Supertrend](/volatilitas/supertrend/)** → arah tren (kapan masuk/keluar)
- **[RSI](/volatilitas/rsi/)** → tekanan beli/jual
- **[Bollinger](/volatilitas/bollinger/)** → harga relatif mahal/murah
- **Fibonacci** → di harga berapa kemungkinan ada lantai/atap
- **[ATR](/volatilitas/atr/)** → lebar goyangan untuk range

Contoh pembacaan gabungan: harga turun mendekati **Fib 0.618 sebagai support**, RSI rendah, dan Supertrend masih bullish → ada peluang level itu menahan. Tapi tetap: selama posisi in-range dan fee jalan, ini **konteks**, bukan perintah aksi.

## Intinya

Fibonacci menandai harga-harga penting (0.5, 0.618, 0.786) tempat pergerakan sering berhenti atau berbalik. Di laporan, baris Fib menunjukkan level terdekat dan apakah dia jadi support (lantai) atau resistance (atap) relatif ke harga sekarang. Yang harus diingat: level ini **psikologis dan berupa zona**, bukan hukum pasti — paling berguna sebagai konfirmasi bersama indikator lain, dan lemah di token yang baru meledak tanpa struktur harga.

:::caution[Bukan saran finansial]
Catatan belajar pribadi untuk edukasi. Bukan ajakan trading. Selalu riset sendiri.
:::
