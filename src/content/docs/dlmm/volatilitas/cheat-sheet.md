---
title: Cheat Sheet - Membaca Laporan Posisi
description: Ringkasan baca-cepat semua indikator agent LP DLMM dalam satu halaman - RSI, Supertrend, Bollinger, Fibonacci, ATR, dan fee/TVL.
---

Halaman ini menyatukan semua indikator yang muncul di laporan posisi agent jadi satu tempat baca-cepat. Setiap baris punya catatan lengkapnya sendiri - di sini hanya intisarinya, biar Anda bisa membaca laporan dalam hitungan detik.

## Contoh laporan posisi

Laporan posisi biasanya tampil seperti ini:

```text
🟢 SOCCER-SOL
 Deposited $270 │ PnL +1.41% │ Fee $4.30
 Signal (5m):
 RSI : 72.3 overbought
 ST : bullish │ above line
 BB : above upper │ %B 0.96
 Fib : 0.618 (0.0004213) - support
 Px : +2.1% vs prev
```

Tiap baris menjawab pertanyaan yang berbeda. Berikut cara membacanya.

## Tabel baca-cepat

**RSI - tekanan beli/jual** ([detail](/volatilitas/rsi/))
- Angka 0–100. Rendah = baru banyak dijual; tinggi = baru banyak dibeli.
- `oversold` (rendah) sering mantul; `overbought` (tinggi) belum tentu jatuh.
- Periode pendek = sering ekstrem. Jangan jual hanya karena RSI merah saat masih in-range.

**ST (Supertrend) - arah tren** ([detail](/volatilitas/supertrend/))
- `bullish` = tren naik (garis jadi support); `bearish` = tren turun (garis jadi resistance).
- `flip` = momen ganti arah. Ini sering jadi pemicu entry/exit utama.
- Lemah di pasar sideways (whipsaw); selalu telat sedikit.

**BB (Bollinger) - harga relatif mahal/murah** ([detail](/volatilitas/bollinger/))
- `above upper` / `below lower` = ekstrem dibanding pergerakan sendiri.
- `%B`: 0.00 = garis bawah, 0.50 = tengah, 1.00 = garis atas.
- Nembus band ≠ sinyal otomatis. Saat tren kuat, harga bisa "band walking".

**Fib (Fibonacci) - lantai/atap** ([detail](/volatilitas/fibonacci/))
- Level penting: 0.5, 0.618, 0.786.
- `support` = level di bawah harga (lantai); `resistance` = di atas harga (atap).
- Level psikologis berupa zona, bukan garis pasti. Lemah di token baru.

**ATR - volatilitas / lebar goyangan** ([detail](/volatilitas/atr/))
- Mengukur seberapa jauh harga biasa goyang (bukan arah).
- ATR tinggi → range deploy dibuat lebih lebar biar tahan banting.

**Fee = Volume ÷ TVL - kelayakan pool** ([detail](/fee/volume-tvl/))
- Yield LP ditentukan turnover (volume ÷ TVL), bukan market cap.
- Turnover tinggi = fee besar. Volume besar + TVL besar = fee bisa tetap tipis.

## Cara baca cepat baris emoji & angka

- **🟢 / status** - penanda kondisi posisi (in-range/sehat).
- **Deposited** - modal awal, dihitung dari jumlah SOL × harga SOL live.
- **PnL** - untung/rugi posisi saat ini.
- **Fee** - fee yang sudah terkumpul. Selama fee > rugi & posisi in-range, sabar dulu.
- **Px** - perubahan harga vs candle sebelumnya.

## Pola membaca yang sehat

Jangan baca indikator satu-satu lalu panik. Baca sebagai **gabungan**:

1. **Posisi masih in-range?** Kalau ya, indikator merah sendirian bukan alasan jual.
2. **Fee > rugi?** Kalau ya, Anda masih untung secara bersih - beri waktu.
3. **Apa kata arah (Supertrend)?** Bullish + ekstrem (RSI tinggi / BB above upper) sering = tren kuat lagi jalan, bukan saat jual.
4. **Trigger close yang valid:** OOR aktual cukup lama, volume mati, stop-loss terkena, atau tesis pool jelas gagal - bukan sekadar satu indikator ekstrem.

## Filosofi di balik semua angka

Indikator itu **alat baca kondisi, bukan tombol aksi**. Edge terbesar bukan dari membaca indikator paling jago, tetapi dari [kesabaran](/psikologi/sabar/) dan [tahu kapan hold vs cut](/psikologi/hold-vs-cut/). Angka membantu Anda memahami situasi; disiplin yang menentukan hasil.

> Kalau dipantau terus, jadi tidak sabar. Tetapi bagusnya, mainnya jadi aman dan minim risiko.

:::tip[Aturan emas]
Selama posisi **in-range** dan **fee lebih besar dari rugi**, indikator ekstrem (RSI oversold, BB below lower, dll) adalah **konteks, bukan perintah**. Pemicu close yang sah datang dari struktur (OOR, volume mati, stop-loss), bukan dari satu angka yang merah.
:::

:::caution[Bukan saran finansial]
Catatan belajar pribadi untuk edukasi. Bukan ajakan trading. Selalu riset sendiri.
:::
