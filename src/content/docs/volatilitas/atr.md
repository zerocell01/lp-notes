---
title: 'ATR: Mengukur Goyangan Harga'
description: Memahami Average True Range sebagai ukuran volatilitas yang lebih jujur.
---

**ATR (Average True Range)** adalah ukuran seberapa jauh harga biasanya bergerak dalam satu periode. Bukan arah — cuma **besar goyangannya**.

## Analogi: tinggi ombak

ATR itu seperti mengukur **tinggi ombak**, bukan arah angin.

- ATR besar = ombak tinggi = harga goyang liar.
- ATR kecil = air tenang = harga adem.

ATR **tidak** memberitahu harga mau naik atau turun. Dia cuma bilang: "siap-siap, goyangannya segini besar." Itu informasi yang sangat berguna untuk menentukan seberapa lebar range harus dipasang.

## Kenapa pakai ATR%

ATR mentah dalam satuan harga susah dibandingkan antar token (harga $0.0001 vs $5 beda skala). Maka dipakai **ATR%** — ATR dibagi harga, jadi persentase. Ini bisa dibandingkan adil:

- Token tenang (misal aset besar): ATR% mungkin di bawah 1%.
- Memecoin liar: ATR% bisa 10% atau lebih.

## Kenapa ATR lebih jujur dari "metrik volatilitas" instan

Banyak sumber data kasih satu angka "volatility" yang sering **menyepelekan** token tipis. Token yang sebenarnya liar bisa terbaca "tenang" hanya karena periode pengukurannya kebetulan sepi.

ATR dihitung dari **rentang candle nyata** sepanjang beberapa periode, jadi dia menangkap goyangan sesungguhnya — termasuk lonjakan dan sumbu (wick) yang panjang. Buat memecoin, ini jauh lebih representatif.

## Intinya

ATR = ukuran besar goyangan harga, bukan arah. ATR% bikin bisa dibandingkan antar token. Untuk LP, ATR adalah masukan utama buat memutuskan **seberapa lebar** range dipasang — bahas lanjut di [Lebar Range](/volatilitas/lebar-range/).
