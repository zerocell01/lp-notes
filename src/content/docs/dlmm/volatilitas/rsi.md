---
title: RSI - Cara Baca dan Konfigurasinya
description: Memahami indikator RSI di agent LP DLMM - cara membacanya, mengapa periode dan threshold-nya bisa berbeda dari standar, dan mengapa RSI ekstrem bukan sinyal jual otomatis.
---

RSI (Relative Strength Index) adalah angka **0–100** yang mengukur "tekanan beli vs jual" baru-baru ini. Indikator ini sering muncul di laporan posisi agent. Halaman ini menjelaskan cara membacanya dengan benar - dan mengapa setelan RSI untuk memecoin sering **berbeda dari standar** yang Anda baca di tutorial trading umum.

## Cara baca angkanya

Di laporan posisi, RSI biasanya tampil seperti ini:

```text
RSI : 24.3 oversold
```

- **Angka 0–100**: makin tinggi = harga baru banyak dibeli (naik); makin rendah = baru banyak dijual (turun).
- **Label zona** di belakangnya: `oversold` (jenuh jual), `overbought` (jenuh beli), atau kosong (netral).

Aturan dasar yang sering diajarkan:
- **RSI rendah (mis. di bawah 30)** = "oversold" - harga turun banyak, *mungkin* mau mantul naik.
- **RSI tinggi (mis. di atas 70)** = "overbought" - harga naik banyak, *mungkin* mau koreksi turun.

Kata kuncinya **"mungkin"**. RSI itu petunjuk kondisi, bukan ramalan pasti.

## Tiga hal yang sering membuat salah paham

### 1. Periode RSI menentukan seberapa "sensitif" dia

RSI standar pakai periode **14** (14 candle terakhir). Tetapi untuk memecoin yang gerak super cepat, periode panjang itu terasa **lambat** - sinyalnya telat terus.

Banyak setup memecoin memakai **periode pendek** (mis. 2 atau lebih kecil). Efeknya: RSI jadi **sangat sensitif** - mudah loncat ke ekstrem (di bawah 30 atau di atas 80) hanya karena satu-dua candle.

**Konsekuensi penting:** RSI periode pendek mencapai "oversold" **jauh lebih sering** daripada RSI-14. Jadi kalau setup-mu pakai periode pendek, jangan kaget (apalagi panik) tiap lihat angka rendah - itu memang sering terjadi by design.

> Analogi: RSI-14 itu seperti termometer ruangan yang tenang perubahannya. RSI periode pendek itu seperti termometer yang nempel di kulit - bereaksi ke tiap hembusan angin.

### 2. Threshold bisa asimetris (dan itu disengaja)

Setup umum pakai 30/70 (oversold/overbought) yang simetris. Tetapi untuk memecoin yang lagi pump, Anda **tidak** mau langsung anggap "overbought" di angka 70 - token yang sehat naik bisa bertahan overbought lama tanpa jatuh.

Makanya banyak setup menaikkan ambang overbought (mis. ke 80) sambil menjaga oversold tetap rendah. Tujuannya: **jangan terburu menutup posisi** hanya karena RSI tinggi saat token masih naik sehat. Ini selaras dengan prinsip [sabar](/psikologi/sabar/) - memberikan ruang ke winner.

### 3. Label visual ≠ pemicu aksi

Hati-hati: label `oversold`/`overbought` yang Anda lihat di layar sering memakai patokan baca-cepat standar (30/70), sementara **logika aksi** agent bisa pakai threshold yang berbeda (mis. 80 untuk overbought).

Artinya layar bisa menulis "overbought" di angka 72, padahal agent baru benar-benar menganggapnya pemicu di 80. **Label itu penanda baca, bukan tombol aksi.** Selalu cek setup aktual untuk tahu di angka berapa aksi benar-benar terjadi.

## RSI sebagai info, bukan auto-trigger

Ini bagian terpenting. RSI yang muncul di laporan **belum tentu** yang memicu deploy/close. Tergantung strategi yang dipilih:

- Kalau strategi entry/exit pakai indikator lain (mis. Supertrend), maka RSI hanya **informasi bantu** untuk Anda membaca kondisi - bukan yang mengeksekusi.
- Kalau strategi memang berbasis RSI (mis. "masuk saat RSI oversold, keluar saat overbought"), barulah RSI jadi pemicu.

Jadi sebelum bereaksi ke RSI, pahami dulu: **di setup-mu, RSI ini sekadar info atau benar-benar gate keputusan?**

## Mengapa RSI ekstrem BUKAN alasan jual otomatis

Ini pelajaran nyata yang mahal kalau dilanggar: **RSI oversold ekstrem saat posisi masih in-range dan fee masih lebih besar dari rugi sering berakhir mantul naik.** Menutup posisi hanya karena "RSI-nya merah sangat" sering jadi keputusan panik yang malah memotong winner.

Pemicu close yang lebih valid biasanya:
- Posisi benar-benar keluar range (OOR) cukup lama
- Volume pool mati
- Stop-loss terkena
- Tesis pool sudah jelas gagal

Selama masih in-range dan fee jalan, RSI ekstrem sendirian **bukan** trigger jual. (Lihat [Kapan Hold, Kapan Cut](/psikologi/hold-vs-cut/).)

## Apa yang bisa dikonfigurasi

Umumnya setup RSI memberi knob ini:

- **Periode/length** - pendek = sensitif (sering ekstrem), panjang = halus (lebih jarang ekstrem)
- **Oversold / overbought** - ambang label dan/atau pemicu
- **Interval candle** - mis. 5 menit, 15 menit (makin pendek makin berisik)
- **Jumlah candle** yang ditarik untuk perhitungan

:::tip[Aturan praktis]
Kalau RSI-mu terasa "kebanyakan teriak oversold", kemungkinan periode-nya pendek. Naikkan periode (mendekati 14) untuk sinyal yang lebih kalem, atau biarkan pendek tetapi **perlakukan RSI ekstrem sebagai konteks, bukan perintah.**
:::

## Intinya

RSI itu pengukur tekanan beli/jual, bukan ramalan. Periode pendek membuat dia sensitif dan sering ekstrem; threshold asimetris menjaga winner tetap jalan. Yang paling penting: **tahu apakah RSI di setup-mu hanya info atau pemicu aksi**, dan jangan jual hanya karena angkanya merah saat posisi masih sehat.

:::caution[Bukan saran finansial]
Catatan belajar pribadi untuk edukasi. Bukan ajakan trading. Selalu riset sendiri.
:::
