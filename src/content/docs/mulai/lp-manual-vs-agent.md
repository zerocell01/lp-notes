---
title: LP Manual vs LP dengan Agent
description: Bedanya menyediakan likuiditas DLMM secara manual versus lewat agent otonom yang dijalankan model LLM.
---

Kebanyakan orang LP secara **manual**: buka aplikasi Meteora, pilih pool, atur range, deploy, lalu pantau sendiri. Catatan ini ditulis dari sudut yang agak beda — LP-nya dijalankan oleh **agent otonom** (Meridian) yang dikendalikan **model LLM**. Halaman ini merangkum bedanya, biar kamu tahu konteks dari catatan-catatan lain di situs ini.

## Gambaran singkat

**LP manual** = kamu yang screening pool, hitung range, klik deploy, lalu mantau chart dan tutup posisi sendiri.

**LP dengan agent** = sebuah program berjalan terus-menerus (cron), screening pool otomatis, menghitung range, deploy, memantau tiap beberapa menit, dan menutup posisi pakai aturan. **LLM** dipakai untuk bagian yang butuh penilaian: menimbang kandidat, membaca risiko, memutuskan layak deploy atau skip.

## Apa yang BEDA

### 1. Pengambilan keputusan
- **Manual**: keputusan ada di kepalamu — bisa fleksibel, tapi gampang kena emosi.
- **Agent**: keputusan dibagi dua lapis. Aturan **deterministik** (kode) untuk hal yang nggak boleh ditawar (mis. buang pool yang turnover-nya terlalu tipis, blokir token rival, cooldown), dan **LLM** untuk pertimbangan yang lebih nuansa (kandidat mana yang paling layak di antara yang lolos filter).

### 2. Kecepatan & konsistensi
- **Manual**: reaksimu terbatas — nggak mungkin melototin chart 24 jam. Keputusan sering nggak konsisten karena mood.
- **Agent**: jalan 24/7, konsisten ikut aturan, dan aksi penting (tutup posisi, swap balik ke SOL) bisa dieksekusi **instan tanpa nunggu LLM** lewat jalur cepat. Ini penting karena round-trip ke model menambah delay.

### 3. Disiplin vs emosi
- **Manual**: musuh terbesarnya diri sendiri. Lihat merah dikit → panik → potong winner. (Lihat [Sabar](/psikologi/sabar/).)
- **Agent**: nggak punya emosi. Justru ini kekuatannya buat orang yang sadar dirinya gampang nggak sabar — agent menahan posisi sehat sesuai aturan, bukan sesuai rasa takut.

### 4. Sumber kesalahan
- **Manual**: salah klik, salah hitung range, telat nutup.
- **Agent**: salahnya beda jenis — **bug di kode** (mis. salah hitung deposited karena harga ke-freeze), **data feed meleset** (volatilitas dari satu sumber bisa underestimate token tipis), atau **LLM yang overconfident** pada kandidat jelek. Pekerjaannya bukan "klik lebih hati-hati", tapi **memperbaiki cara agent berpikir**.

## Peran LLM — dan batasnya

LLM itu otak yang fleksibel, tapi **bukan** sumber kebenaran tunggal. Pelajaran pentingnya:

- **Jangan serahkan hal yang bisa dipastikan ke LLM.** Kalau sebuah pool jelas harus dibuang (turnover terlalu tipis, token rival, fee terlalu rendah), itu harus jadi **aturan keras di kode**, bukan diserahkan ke penilaian model yang bisa berubah-ubah tiap cycle.
- **LLM untuk nuansa, kode untuk pagar.** Model menimbang "di antara kandidat yang sudah lolos, mana yang terbaik". Kode memastikan kandidat busuk nggak pernah sampai ke meja model.
- **Eksekusi kritis jangan lewat LLM.** Menutup posisi dan swap balik ke SOL harus deterministik dan instan. LLM boleh memberi rekomendasi, tapi pemicu close yang sudah jelas dieksekusi langsung.

## Yang tetap sama

Apa pun caranya — manual atau agent — fondasinya identik:

- Fee tetap soal **turnover (volume ÷ TVL)**, bukan mcap. (Lihat [Fee = Volume ÷ TVL](/fee/volume-tvl/).)
- Range tetap harus mengikuti **volatilitas**. (Lihat [Lebar Range](/volatilitas/lebar-range/).)
- **Sabar tetap edge.** Bedanya, agent menegakkan kesabaran lewat aturan; manual menuntutmu menegakkannya lewat disiplin diri.

## Intinya

Agent bukan jalan pintas buat "menang otomatis". Dia memindahkan kerjamu: dari mengklik dan menahan emosi, jadi **merancang aturan yang baik dan mengoreksi cara berpikir si agent**. Konsep LP-nya wajib kamu kuasai duluan — kalau kamu nggak paham kenapa sebuah pool jelek, kamu nggak akan bisa tahu kapan agent-mu salah.
