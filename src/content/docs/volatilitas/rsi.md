---
title: RSI — Cara Baca dan Konfigurasinya
description: Memahami indikator RSI di agent LP DLMM — cara membacanya, kenapa periode dan threshold-nya bisa beda dari standar, dan kenapa RSI ekstrem bukan sinyal jual otomatis.
---

RSI (Relative Strength Index) adalah angka **0–100** yang mengukur "tekanan beli vs jual" baru-baru ini. Indikator ini sering muncul di laporan posisi agent. Halaman ini menjelaskan cara membacanya dengan benar — dan kenapa setelan RSI untuk memecoin sering **beda dari standar** yang kamu baca di tutorial trading umum.

## Cara baca angkanya

Di laporan posisi, RSI biasanya tampil seperti ini:

```text
RSI : 24.3 oversold
```

- **Angka 0–100**: makin tinggi = harga baru banyak dibeli (naik); makin rendah = baru banyak dijual (turun).
- **Label zona** di belakangnya: `oversold` (jenuh jual), `overbought` (jenuh beli), atau kosong (netral).

Aturan dasar yang sering diajarkan:
- **RSI rendah (mis. di bawah 30)** = "oversold" — harga turun banyak, *mungkin* mau mantul naik.
- **RSI tinggi (mis. di atas 70)** = "overbought" — harga naik banyak, *mungkin* mau koreksi turun.

Kata kuncinya **"mungkin"**. RSI itu petunjuk kondisi, bukan ramalan pasti.

## Tiga hal yang sering bikin salah paham

### 1. Periode RSI menentukan seberapa "sensitif" dia

RSI standar pakai periode **14** (14 candle terakhir). Tapi untuk memecoin yang gerak super cepat, periode panjang itu terasa **lambat** — sinyalnya telat terus.

Banyak setup memecoin memakai **periode pendek** (mis. 2 atau lebih kecil). Efeknya: RSI jadi **sangat sensitif** — gampang loncat ke ekstrem (di bawah 30 atau di atas 80) hanya karena satu-dua candle.

**Konsekuensi penting:** RSI periode pendek mencapai "oversold" **jauh lebih sering** daripada RSI-14. Jadi kalau setup-mu pakai periode pendek, jangan kaget (apalagi panik) tiap lihat angka rendah — itu memang sering terjadi by design.

> Analogi: RSI-14 itu seperti termometer ruangan yang adem perubahannya. RSI periode pendek itu seperti termometer yang nempel di kulit — bereaksi ke tiap hembusan angin.

### 2. Threshold bisa asimetris (dan itu disengaja)

Setup umum pakai 30/70 (oversold/overbought) yang simetris. Tapi untuk memecoin yang lagi pump, kamu **tidak** mau langsung anggap "overbought" di angka 70 — token yang sehat naik bisa bertahan overbought lama tanpa jatuh.

Makanya banyak setup menaikkan ambang overbought (mis. ke 80) sambil menjaga oversold tetap rendah. Tujuannya: **jangan terburu menutup posisi** cuma karena RSI tinggi saat token masih naik sehat. Ini selaras dengan prinsip [sabar](/psikologi/sabar/) — kasih ruang ke winner.

### 3. Label visual ≠ pemicu aksi

Hati-hati: label `oversold`/`overbought` yang kamu lihat di layar sering memakai patokan baca-cepat standar (30/70), sementara **logika aksi** agent bisa pakai threshold yang beda (mis. 80 untuk overbought).

Artinya layar bisa menulis "overbought" di angka 72, padahal agent baru benar-benar menganggapnya pemicu di 80. **Label itu penanda baca, bukan tombol aksi.** Selalu cek setup aktual untuk tahu di angka berapa aksi benar-benar terjadi.

## RSI sebagai info, bukan auto-trigger

Ini bagian terpenting. RSI yang muncul di laporan **belum tentu** yang memicu deploy/close. Tergantung strategi yang dipilih:

- Kalau strategi entry/exit pakai indikator lain (mis. Supertrend), maka RSI cuma **informasi bantu** buat kamu membaca kondisi — bukan yang mengeksekusi.
- Kalau strategi memang berbasis RSI (mis. "masuk saat RSI oversold, keluar saat overbought"), barulah RSI jadi pemicu.

Jadi sebelum bereaksi ke RSI, pahami dulu: **di setup-mu, RSI ini sekadar info atau benar-benar gate keputusan?**

## Kenapa RSI ekstrem BUKAN alasan jual otomatis

Ini pelajaran nyata yang mahal kalau dilanggar: **RSI oversold ekstrem saat posisi masih in-range dan fee masih lebih besar dari rugi sering berakhir mantul naik.** Menutup posisi cuma karena "RSI-nya merah banget" sering jadi keputusan panik yang malah memotong winner.

Pemicu close yang lebih valid biasanya:
- Posisi benar-benar keluar range (OOR) cukup lama
- Volume pool mati
- Stop-loss kena
- Tesis pool sudah jelas gagal

Selama masih in-range dan fee jalan, RSI ekstrem sendirian **bukan** trigger jual. (Lihat [Kapan Hold, Kapan Cut](/psikologi/hold-vs-cut/).)

## Apa yang bisa dikonfigurasi

Umumnya setup RSI memberi knob ini:

- **Periode/length** — pendek = sensitif (sering ekstrem), panjang = halus (lebih jarang ekstrem)
- **Oversold / overbought** — ambang label dan/atau pemicu
- **Interval candle** — mis. 5 menit, 15 menit (makin pendek makin berisik)
- **Jumlah candle** yang ditarik untuk perhitungan

:::tip[Aturan praktis]
Kalau RSI-mu terasa "kebanyakan teriak oversold", kemungkinan periode-nya pendek. Naikkan periode (mendekati 14) untuk sinyal yang lebih kalem, atau biarkan pendek tapi **perlakukan RSI ekstrem sebagai konteks, bukan perintah.**
:::

## Intinya

RSI itu pengukur tekanan beli/jual, bukan ramalan. Periode pendek bikin dia sensitif dan sering ekstrem; threshold asimetris menjaga winner tetap jalan. Yang paling penting: **tahu apakah RSI di setup-mu cuma info atau pemicu aksi**, dan jangan jual cuma karena angkanya merah saat posisi masih sehat.

:::caution[Bukan saran finansial]
Catatan belajar pribadi untuk edukasi. Bukan ajakan trading. Selalu riset sendiri.
:::
