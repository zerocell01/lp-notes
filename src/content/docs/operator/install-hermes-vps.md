---
title: Install Hermes Agent di VPS (Operator)
description: Cara memasang Hermes Agent di VPS sebagai operator yang menjaga dan mengoperasikan agent LP DLMM (Meridian).
---

Meridian (agent LP DLMM) menjalankan trading-nya sendiri. Tapi siapa yang menjaga *Meridian*-nya? Di sinilah **Hermes Agent** masuk: dia jadi **operator** — lapisan AI di atas Meridian yang bisa diajak ngobrol lewat Telegram, baca log, cek posisi, perbaiki bug, restart service, dan jawab pertanyaan soal kondisi pool — semua dari chat.

Catatan ini cara memasangnya di VPS. Aku tulis sesederhana mungkin biar gampang diikuti.

:::note[Konteks]
Hermes itu framework agent open-source dari Nous Research yang jalan di terminal dan platform chat (Telegram, Discord, dll). Dia provider-agnostic — bisa pakai model apa pun. Di setup-ku, Hermes jadi operator; Meridian tetap program trading yang terpisah.
:::

## Kenapa pakai operator terpisah?

Meridian = **eksekutor** (screening, deploy, close — otomatis 24/7).
Hermes = **operator** (mengawasi, mendiagnosis, memperbaiki, menjawab).

Bedanya penting: kamu nggak mau model yang sama yang mengeksekusi trading juga yang kamu mintai tolong debug atau ngobrol. Operator yang terpisah bisa baca log Meridian, edit kodenya, restart prosesnya, dan lapor ke kamu di Telegram — tanpa ikut campur di jalur eksekusi trading yang harus cepat dan deterministik.

## Prasyarat VPS

- VPS Linux (Ubuntu/Debian paling gampang), RAM minimal ~2GB
- Akses SSH ke VPS
- **Git** sudah terpasang (satu-satunya prasyarat wajib di Linux):

```bash
git --version
```

Sisanya (Python, Node.js, ripgrep, ffmpeg) **diurus otomatis** oleh installer — kamu nggak perlu pasang manual.

## Langkah 1 — Install

SSH ke VPS, lalu jalankan satu baris ini:

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

Installer otomatis mengurus: Python 3.11 (via uv), Node.js, ripgrep, ffmpeg, clone repo, virtual environment, dan command `hermes` global. Selesai dalam ~1-2 menit.

Setelah itu, muat ulang shell:

```bash
source ~/.bashrc   # atau ~/.zshrc kalau pakai zsh
```

Cek instalasi sehat:

```bash
hermes doctor
```

## Langkah 2 — Pilih model & provider

Hermes butuh otak (LLM). Jalankan picker interaktif:

```bash
hermes model
```

Pilih provider yang kamu punya API key-nya (OpenRouter, Anthropic, DeepSeek, dan 15+ lainnya), lalu pilih model. Untuk kerja operator yang butuh trace kode dan diagnosis bug, pilih model yang kuat — kualitas model lebih menentukan daripada setelan lain.

:::tip[Jalan tercepat]
Kalau mau setup paling ringkas tanpa juggling banyak API key, ada jalur Nous Portal: `hermes setup --portal`. Satu langganan mencakup banyak model plus tool gateway (web search, dll).
:::

## Langkah 3 — Sambungkan ke Telegram (operator chat)

Biar bisa diajak ngobrol dari HP, sambungkan ke Telegram:

```bash
hermes gateway setup
```

Ikuti wizard-nya — kamu butuh bot token dari [@BotFather](https://t.me/BotFather). Setelah tersambung, kamu bisa chat ke bot-mu dan dia punya akses penuh ke tool (baca file, jalankan command, dll) di VPS.

## Langkah 4 — Jalankan agent terus-menerus

Supaya operator tetap hidup walau kamu logout SSH, pasang gateway sebagai service background:

```bash
hermes gateway install
hermes gateway start
hermes gateway status
```

Satu langkah penting di VPS — biar service nggak mati saat sesi SSH ditutup:

```bash
sudo loginctl enable-linger $USER
```

Cek log kalau ada masalah:

```bash
hermes gateway status
# log ada di ~/.hermes/logs/gateway.log
```

## Langkah 5 — Pisahkan dari Meridian

Meridian dan Hermes adalah **dua proses terpisah**. Meridian sebaiknya tetap dijalankan oleh process manager-nya sendiri (mis. PM2), dan Hermes lewat gateway service-nya sendiri. Operator (Hermes) tinggal diberi tahu di mana folder Meridian dan file log-nya — lalu dia bisa:

- Baca log: "cek log screening Meridian sejam terakhir"
- Cek posisi & PnL
- Diagnosis & perbaiki bug di kode Meridian
- Restart Meridian setelah patch
- Lapor kondisi pool ke kamu

## Catatan keamanan (penting di VPS)

Operator punya akses penuh ke VPS, jadi perlakukan dengan serius:

- **Jangan taruh secret di config biasa.** API key dan private key masuk file `.env` (`~/.hermes/.env`), bukan di config yang ke-share.
- **Redaksi secret aktif default.** Hermes menyensor string yang kelihatan seperti key dari output tool sebelum masuk konteks — biarkan menyala.
- **Batasi siapa yang bisa chat.** Pastikan hanya chat ID kamu yang diizinkan mengakses bot (fail-closed), biar orang lain nggak bisa nyuruh-nyuruh operator-mu.
- **Wallet trading bukan urusan operator.** Private key wallet tetap di domain Meridian. Operator nggak perlu memegangnya untuk menjalankan tugas pengawasan.

## Intinya

Pola dua-lapis ini — eksekutor cepat (Meridian) + operator yang bisa diajak ngobrol (Hermes) — bikin LP otomatis jadi jauh lebih nyaman dikelola. Kamu nggak perlu SSH dan baca log mentah tiap kali penasaran; cukup tanya operator-mu di Telegram. Dan karena dua-duanya proses terpisah, mengutak-atik operator nggak pernah mengganggu jalur eksekusi trading.

:::caution[Bukan saran finansial]
Catatan ini soal infrastruktur, bukan strategi trading. Menjalankan agent dengan akses penuh ke VPS dan wallet itu berisiko — pahami dulu apa yang kamu jalankan sebelum memberinya kendali.
:::
