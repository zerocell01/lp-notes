---
title: Install Hermes Agent di VPS (Operator)
description: Panduan pemula memasang Hermes Agent di VPS sebagai operator yang menjaga dan mengoperasikan agent LP DLMM (Meridian) - lengkap dengan model gratis dan setup bot Telegram.
---

Meridian (agent LP DLMM) menjalankan trading-nya sendiri. Tetapi siapa yang menjaga *Meridian*-nya? Di sinilah **Hermes Agent** masuk: dia jadi **operator** - lapisan AI di atas Meridian yang bisa diajak ngobrol lewat Telegram, baca log, cek posisi, perbaiki bug, restart service, dan jawab pertanyaan soal kondisi pool - semua dari chat HP-mu.

Panduan ini ditulis untuk **pemula**. Ikuti dari atas ke bawah, copy-paste tiap perintah. Nggak perlu jago Linux.

:::note[Konteks]
Hermes itu framework agent open-source dari Nous Research yang berjalan di terminal dan platform chat (Telegram, Discord, dll). Dia provider-agnostic - bisa pakai model apa pun, termasuk yang **gratis**. Di setup-ku, Hermes jadi operator; Meridian tetap program trading yang terpisah.
:::

## Mengapa pakai operator terpisah?

Meridian = **eksekutor** (screening, deploy, close - otomatis 24/7).
Hermes = **operator** (mengawasi, mendiagnosis, memperbaiki, menjawab).

Anda tidak mau model yang sama yang mengeksekusi trading juga yang Anda mintai tolong debug atau ngobrol. Operator terpisah bisa baca log Meridian, edit kodenya, restart prosesnya, dan lapor ke Anda di Telegram - tanpa ikut campur di jalur eksekusi trading yang harus cepat dan deterministik.

## Yang Anda butuhkan

- VPS Linux (Ubuntu/Debian paling mudah), RAM minimal ~2GB
- Bisa SSH ke VPS itu
- Aplikasi Telegram di HP
- **Git** sudah terpasang di VPS. Cek dengan:

```bash
git --version
```

Kalau muncul nomor versi (mis. `git version 2.40.1`), aman - lanjut.

**Kalau muncul `command not found`,** berarti git belum ada. Install dulu sesuai jenis VPS-mu:

```bash
# Ubuntu / Debian (paling umum)
sudo apt update && sudo apt install -y git

# CentOS / RHEL / Rocky / AlmaLinux
sudo dnf install -y git # atau: sudo yum install -y git

# Fedora
sudo dnf install -y git
```

Habis install, cek lagi `git --version` untuk memastikan sudah masuk.

Python, Node.js, dan tetek bengek lain **diurus otomatis** sama installer - Anda tidak perlu memasang apa-apa lagi.

---

## Langkah 1 - Install Hermes

SSH ke VPS, lalu tempel satu baris ini dan tekan Enter:

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

Tunggu ~1-2 menit. Installer otomatis memasang semua kebutuhan (Python, Node.js, ripgrep, ffmpeg) dan command `hermes`.

Setelah selesai, muat ulang shell biar command `hermes` dikenali:

```bash
source ~/.bashrc
```

(Kalau Anda pakai zsh, ganti jadi `source ~/.zshrc`.)

Cek instalasi sehat:

```bash
hermes doctor
```

Kalau hijau-hijau, lanjut.

---

## Langkah 2 - Pilih model GRATIS

Hermes butuh otak (LLM). Untuk mulai tanpa bayar, pakai model gratis dulu.

Jalankan picker:

```bash
hermes model
```

Pilih provider **OpenRouter** (gratis membuat akun), lalu pilih model yang ada label **`:free`**. Contoh model gratis yang enteng:

- `stepfun/step-3.5-flash:free`
- model lain berlabel `:free` (daftarnya muncul di picker)

OpenRouter butuh API key gratis:

1. Buka [openrouter.ai](https://openrouter.ai), daftar
2. Masuk ke menu **Keys**, membuat key baru, copy
3. Saat `hermes model` minta API key, tempel key itu

:::tip[Catatan jujur soal model gratis]
Model gratis cocok untuk belajar dan tugas ringan (baca log, jawab pertanyaan, cek posisi). Tetapi untuk kerja berat seperti **trace bug di kode Meridian atau patch yang presisi**, model gratis sering kurang pintar. Kalau nanti operator-mu terasa "kurang nyambung" saat debug, naikkan ke model berbayar yang lebih kuat. Mulai gratis dulu - upgrade kalau perlu.
:::

---

## Langkah 3 - Membuat bot Telegram (dari nol)

Biar operator bisa diajak ngobrol dari HP, Anda perlu bot Telegram. Ikuti pelan-pelan:

### 3a. Membuat bot lewat BotFather

1. Buka Telegram, cari **@BotFather** (yang ada centang biru)
2. Kirim perintah: `/newbot`
3. BotFather tanya **nama tampilan** bot - ketik bebas, mis. `Operator Meridianku`
4. Lalu tanya **username** bot - harus unik dan **diakhiri kata `bot`**, mis. `meridian_operator_bot`
5. BotFather memberikan **token** seperti ini:

```text
123456789:ABCdefGHIjklMNOpqrSTUvwxYZ
```

**Copy token itu dan simpan.** Jangan memberikan ke siapa pun - siapa pun yang memiliki token bisa kendalikan bot-mu.

### 3b. Cari ID Telegram-mu

Hermes pakai **ID angka**, bukan username. Cara dapat:

1. Di Telegram, cari **@userinfobot**
2. Kirim pesan apa saja (atau `/start`)
3. Dia balas dengan **ID angka** Anda (mis. `804389215`)

Simpan angka itu - ini untuk memastikan **hanya Anda** yang bisa nyuruh-nyuruh operator.

### 3c. Sambungkan ke Hermes

Jalankan wizard:

```bash
hermes gateway setup
```

Pilih **Telegram**, lalu:
- Tempel **token bot** dari langkah 3a
- Tempel **ID angka** dari langkah 3b (sebagai allowed user)

Sudah. Operator sekarang hanya mau dengar perintah dari ID-mu.

---

## Langkah 4 - Jalankan terus-menerus

Supaya operator tetap hidup walau Anda tutup SSH, memasang sebagai service background:

```bash
hermes gateway install
hermes gateway start
hermes gateway status
```

Satu langkah penting di VPS - biar service tidak mati pas SSH ditutup:

```bash
sudo loginctl enable-linger $USER
```

Sekarang buka Telegram, chat ke bot-mu - ketik `halo` atau `/help`. Kalau dia balas, **berhasil!** 🎉

---

## Langkah 5 - Kenalkan ke Meridian

Meridian dan Hermes adalah **dua proses terpisah**. Meridian tetap jalan di process manager-nya sendiri (mis. PM2); Hermes jalan lewat gateway service-nya. Tinggal memberikan tahu operator di mana folder Meridian dan file log-nya, lalu Anda bisa minta lewat chat:

- "cek log screening Meridian sejam terakhir"
- "ada posisi terbuka tidak? berapa PnL-nya?"
- "restart Meridian"
- "mengapa pool X di-skip?"

---

## Catatan keamanan (penting di VPS)

Operator punya akses penuh ke VPS, jadi perlakukan serius:

- **Token bot itu rahasia.** Kalau bocor, langsung cabut lewat `/revoke` di BotFather, membuat baru.
- **Secret masuk file `.env`** (`~/.hermes/.env`), bukan di config yang ke-share.
- **Redaksi secret aktif default.** Hermes menyensor string yang kelihatan seperti key dari output tool - biarkan menyala.
- **Hanya ID-mu yang diizinkan.** Pastikan allowed user hanya ID-mu, biar orang lain tidak bisa kendalikan operator.
- **Wallet trading bukan urusan operator.** Private key wallet tetap di domain Meridian.

---

## Ringkasan perintah (cheat sheet)

```bash
# Install
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
source ~/.bashrc
hermes doctor

# Model gratis
hermes model # pilih OpenRouter + model :free

# Bot Telegram
hermes gateway setup # tempel token + ID-mu

# Jalan terus
hermes gateway install
hermes gateway start
sudo loginctl enable-linger $USER
hermes gateway status
```

## Intinya

Pola dua-lapis ini - eksekutor cepat (Meridian) + operator yang bisa diajak ngobrol (Hermes) - membuat LP otomatis jauh lebih nyaman dikelola. Mulai dengan model gratis untuk belajar; upgrade kalau butuh otak lebih kuat. Dan karena dua-duanya proses terpisah, ngutak-atik operator tidak pernah ganggu jalur eksekusi trading.

:::caution[Bukan saran finansial]
Catatan ini soal infrastruktur, bukan strategi trading. Menjalankan agent dengan akses penuh ke VPS dan wallet itu berisiko - pahami dulu apa yang Anda jalankan sebelum memberinya kendali.
:::
