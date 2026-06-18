---
title: Bollinger Bands - Pita Volatilitas
description: Memahami Bollinger Bands di agent LP DLMM - cara membaca zona BB, apa arti %B, dan mengapa "harga nembus band" bukan sinyal beli/jual otomatis.
---

Bollinger Bands (BB) sering muncul di laporan posisi sebagai baris `BB`. Indikator ini menggambar **tiga garis** yang membungkus harga seperti pita, dan dipakai untuk menjawab: **harga ini sekarang relatif mahal atau murah dibanding pergerakannya sendiri belakangan?**

## Konsep dasar - tiga garis

Bollinger Bands terdiri dari:

- **Garis tengah (middle)** - rata-rata harga (moving average) beberapa candle terakhir.
- **Garis atas (upper)** - middle + sekian kali standar deviasi.
- **Garis bawah (lower)** - middle − sekian kali standar deviasi.

Karena atas dan bawah dihitung dari **standar deviasi** (ukuran sebaran), pita ini **melebar saat harga liar** dan **menyempit saat harga tenang**. Itu inti Bollinger: pita itu sendiri sudah mencerminkan volatilitas.

> Analogi: bayangkan jalur lari dengan dua garis tepi. Saat angin kencang (volatil), petugas melebarkan jalur biar wajar pelari melebar. Saat tenang, jalur dipersempit. Pelari yang keluar garis = bergerak ekstrem dibanding kondisi normalnya saat itu.

## Cara baca zona BB di laporan

Di laporan posisi, baris BB tampil seperti ini:

```text
BB : below lower │ %B 0.04
```

Zona menunjukkan posisi harga relatif ke pita:

- **`below lower`** - harga di bawah garis bawah. Bergerak turun ekstrem dibanding biasanya.
- **`above upper`** - harga di atas garis atas. Bergerak naik ekstrem dibanding biasanya.
- **`upper half`** - di atas garis tengah tetapi masih dalam pita (condong kuat).
- **`lower half`** - di bawah garis tengah tetapi masih dalam pita (condong lemah).
- **`mid`** - pas di sekitar tengah.

## Apa itu %B?

**%B** adalah angka yang memberitahu **persis di mana** harga berada di dalam pita, sebagai skala:

- **%B = 0.00** → harga pas di garis **bawah**
- **%B = 0.50** → harga pas di **tengah**
- **%B = 1.00** → harga pas di garis **atas**
- **%B < 0** → harga **di bawah** garis bawah (lebih ekstrem dari sekadar menyentuh)
- **%B > 1** → harga **di atas** garis atas

Jadi `%B 0.04` artinya harga nyaris menempel garis bawah - sangat rendah dalam pita. `%B 0.96` berarti nyaris menyentuh garis atas. %B itu cara baca paling presisi dibanding sekadar label zona.

## Jebakan terbesar: "nembus band" ≠ sinyal otomatis

Ini kesalahan paling umum soal Bollinger. Banyak pemula mengira:
- harga sentuh garis atas = "overbought, harus jual"
- harga sentuh garis bawah = "oversold, harus beli"

**Itu sering salah.** Ada dua tafsir yang berlawanan, dan keduanya bisa benar tergantung kondisi:

1. **Mean reversion (mantul balik):** harga nembus band → ekstrem → kemungkinan balik ke tengah. Cocok di pasar **sideways/tenang**.
2. **Breakout (lanjut jalan):** harga nembus band justru tanda **tren kuat** yang baru mulai - saat token lagi pump keras, harga bisa "berjalan di sepanjang garis atas" (band walking) lama sekali tanpa balik.

Untuk memecoin yang lagi tren kencang, tafsir kedua sering lebih tepat. Makanya **`BB : above upper` saat token pump BUKAN otomatis berarti harus jual** - bisa jadi tren baru mulai. Sebaliknya `below lower` saat dump bukan otomatis "beli murah".

## Preset `bollinger_reversion`

Beberapa agent punya preset bernama `bollinger_reversion` yang memakai tafsir mean-reversion:

- **Entry** dipertimbangkan saat harga menyentuh/menembus **garis bawah** (taruhan akan mantul naik).
- **Exit** dipertimbangkan saat harga menyentuh/menembus **garis atas** (taruhan akan koreksi turun).

Ini kebalikan filosofi dari [Supertrend](/volatilitas/supertrend/) yang ikut tren. Bollinger reversion **melawan** gerakan ekstrem. Makanya pemilihan preset penting: jangan campur logika yang saling bertentangan tanpa sadar.

## Bollinger + indikator lain

Bollinger paling berguna sebagai **konteks**, bukan pemicu tunggal:

- **[Supertrend](/volatilitas/supertrend/)** → arah tren (kapan masuk/keluar)
- **[RSI](/volatilitas/rsi/)** → tekanan beli/jual
- **Bollinger** → harga relatif mahal/murah dibanding pergerakannya sendiri
- **[ATR](/volatilitas/atr/)** → lebar goyangan untuk menentukan range

Contoh pembacaan gabungan: `BB above upper` + `RSI tinggi` + Supertrend masih bullish → token lagi pump kuat, kemungkinan band walking, **bukan** saat panik jual selama posisi masih in-range dan fee jalan.

## Apa yang bisa dikonfigurasi

Bollinger umumnya punya dua knob:

- **Periode** - berapa candle dipakai menghitung garis tengah. Pendek = pita reaktif; panjang = pita halus.
- **Multiplier standar deviasi** - biasanya 2. Lebih besar = pita lebar (harga jarang nembus); lebih kecil = pita sempit (sering nembus).

Plus interval candle (5m, 15m, dst).

:::tip[Aturan praktis]
Jangan jadikan sentuhan band sebagai perintah. Tanya dulu: pasarnya **sideways** (band sebagai pantulan) atau **trending** (band sebagai jalur breakout)? Konteks tren menentukan apakah "nembus band" itu sinyal balik atau sinyal lanjut.
:::

## Intinya

Bollinger Bands itu pita yang melebar/menyempit mengikuti volatilitas. Zona (`below lower` … `above upper`) dan **%B** memberi tahu seberapa ekstrem posisi harga dalam pita. Tetapi jebakan terbesarnya: **nembus band bukan sinyal beli/jual otomatis** - di tren kuat harga bisa berjalan di sepanjang band. Pakai Bollinger sebagai konteks bersama Supertrend dan RSI, bukan sebagai tombol aksi sendiri.

:::caution[Bukan saran finansial]
Catatan belajar pribadi untuk edukasi. Bukan ajakan trading. Selalu riset sendiri.
:::
