---
title: Kapan Hold, Kapan Cut
description: Kerangka mengambil keputusan menahan atau menutup posisi LP.
---

Keputusan tersulit dalam LP: **menahan atau menutup?** Kuncinya adalah punya kerangka objektif yang sudah disiapkan **sebelum** panik datang.

## Aturan dasar: default ke HOLD bila sehat

Selama dua syarat ini terpenuhi, kecenderungan default sebaiknya **menahan**:

1. Posisi masih **in-range** (fee jalan).
2. **Fee yang belum diklaim lebih besar dari kerugian** harga sementara.

Kalau fee > rugi dan masih in-range, posisi itu pada dasarnya masih bekerja untukmu. Menutupnya karena cemas sesaat biasanya keputusan yang buruk.

## Jebakan umum: RSI oversold ekstrem

Sering muncul godaan menutup posisi cuma karena indikator seperti **RSI menunjukkan oversold ekstrem**. Tapi RSI ekstrem **sering memantul** — justru kebalikan dari sinyal jual.

Selama posisi masih in-range dan fee > rugi, RSI oversold **sendirian bukan alasan valid** untuk menutup. Jangan biarkan satu indikator memicu panik.

## Trigger keluar yang valid

Tutup posisi ketika ada alasan **struktural**, bukan emosional:

- **OOR berkepanjangan** — harga benar-benar keluar range dan tidak balik; modal nganggur terus.
- **Volume mati** — turnover pool ambruk; tidak ada lagi fee yang berarti dihasilkan.
- **Stop-loss tercapai** — kerugian menembus batas yang sudah kamu tetapkan sebelumnya.
- **Tesis rusak** — alasan kamu masuk sudah tidak berlaku (misal token ternyata bermasalah).

## Tentang token yang "tiba-tiba pump"

Hati-hati dengan token lama yang sudah lama sepi lalu tiba-tiba melonjak. Lonjakan seperti itu sering jadi **risiko dump** — naik cepat, lalu jatuh lebih cepat. Momentum yang sudah lewat puncaknya bukan tempat yang aman untuk masuk.

## Kerangka ringkas

```
Masih in-range DAN fee > rugi?
├── Ya  → default HOLD (jangan panik karena noise / RSI ekstrem)
└── Tidak → cek trigger keluar:
            OOR lama? volume mati? stop-loss kena? tesis rusak?
            ├── Ada salah satu → CUT
            └── Tidak ada      → HOLD, beri waktu
```

## Intinya

Putuskan aturan keluar saat kepala dingin, lalu ikuti saat panas. Hold kalau sehat (in-range + fee > rugi). Cut kalau ada alasan struktural nyata — bukan cuma karena satu indikator atau perasaan tidak enak.
