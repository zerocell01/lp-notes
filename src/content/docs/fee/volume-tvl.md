---
title: Fee = Volume ÷ TVL, Bukan Mcap
description: Kenapa fee yield ditentukan turnover, bukan market cap.
---

Salah satu salah paham paling umum: "market cap gede = fee gede." **Salah.** Fee yield LP ditentukan oleh **turnover**, yaitu seberapa besar volume transaksi dibanding likuiditas yang ada di pool.

## Rumus mental

```
Fee yield ≈ Volume transaksi ÷ TVL pool
```

- **Volume** - total nilai transaksi yang lewat pool dalam satu periode.
- **TVL** (Total Value Locked) - total likuiditas yang nyangkut di pool.

Tiap transaksi bayar fee. Fee itu dibagi ke semua LP sesuai porsi. Jadi yang penting bukan "seberapa besar tokennya", tapi **seberapa sering diperdagangkan relatif terhadap kolam likuiditasnya.**

## Contoh sederhana

Bandingkan dua pool:

- **Pool A**: TVL $1.000.000, volume harian $200.000 → turnover 0,2x
- **Pool B**: TVL $40.000, volume harian $1.200.000 → turnover 30x

Pool B jauh lebih kecil, tapi **turnover-nya 150x lebih tinggi**. LP di Pool B memanen fee jauh lebih tebal per dolar yang disetor - walaupun "kelihatan" kecil dan mungkin market cap tokennya lebih rendah.

## Kenapa mcap menyesatkan

Market cap mengukur **nilai total token**, bukan aktivitas perdagangan. Token bisa:

- Mcap besar tapi sepi → fee tipis.
- Mcap kecil tapi rame diperdagangkan → fee tebal.

Mcap lebih relevan ke **volatilitas dan dampak harga**, bukan ke yield LP.

## Tapi hati-hati

Turnover tinggi sering datang bareng **volatilitas tinggi**. Pool kecil yang rame biasanya token liar - fee tebal, tapi risiko OOR dan IL juga besar. Fee bagus tidak otomatis berarti posisi bagus. Selalu timbang dengan risiko (lihat [Hold vs Cut](/psikologi/hold-vs-cut/)).

## Intinya

Saat menilai potensi fee sebuah pool, lihat **rasio volume ÷ TVL**, bukan market cap. Turnover tinggi = fee tebal. Tapi ingat: turnover tinggi sering berarti token liar, jadi imbangi dengan kesadaran risiko.
