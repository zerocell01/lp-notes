---
title: Troubleshooting Operator
description: Solusi cepat untuk error umum saat memasang dan menjalankan agent LP DLMM dan operator-nya - connection refused, 401, RPC, PM2, gateway mati.
---

Halaman ini kumpulan masalah yang paling sering muncul saat setup dan menjalankan agent di VPS, beserta cara cek dan solusinya. Cari gejala-mu di bawah.

## "connection refused" ke localhost:20128

**Gejala:** agent error `ECONNREFUSED` atau `connect failed` ke `localhost:20128`.

**Artinya:** agent mencari gateway model lokal (9Router) tapi prosesnya belum jalan.

**Cek:**

```bash
curl -s http://localhost:20128/api/health
```

Kalau tidak balas `{"ok":true}`, 9Router memang mati.

**Solusi:**
- Nyalakan lagi: `tmux new-session -d -s ninerouter '9router'`
- ATAU pindah ke provider cloud: set `LLM_BASE_URL=https://openrouter.ai/api/v1` + `OPENROUTER_API_KEY` di `.env`, lalu restart agent.

Lihat [Install Meridian](/operator/install-meridian-vps/) bagian provider.

## Error 401 / "Invalid API Key"

**Gejala:** request model ditolak instan dengan `401 Unauthorized` atau `Invalid API Key`, biasanya tanpa memakan token sama sekali.

**Artinya:** kredensial provider kosong atau salah, sehingga jatuh ke provider default yang menolak.

**Cek:**
- Pastikan field API key di config benar-benar terisi (bukan string kosong).
- Pastikan `base_url` mengarah ke provider yang benar - kalau key untuk gateway lokal, base URL juga harus ke gateway lokal, bukan ke provider cloud.

**Solusi:**
- Isi API key yang valid, atau arahkan base URL ke gateway lokal yang memang menerima key dummy.
- Setelah ubah config, **mulai sesi/proses baru** - sebagian setting hanya dibaca saat start.

:::tip
Kalau 401-nya instan dan 0 token terpakai, hampir pasti masalah routing/kredensial, bukan kuota habis. Kuota habis biasanya balas 429, bukan 401.
:::

## Gateway mati saat keluar SSH

**Gejala:** operator (Hermes) berhenti merespons begitu kamu menutup koneksi SSH.

**Artinya:** proses ikut mati saat sesi login berakhir.

**Solusi:** aktifkan linger supaya service tetap hidup tanpa sesi login:

```bash
sudo loginctl enable-linger $USER
```

Lalu pastikan gateway dipasang sebagai service:

```bash
hermes gateway install
hermes gateway start
hermes gateway status
```

## Agent jalan tapi diam di Telegram

**Gejala:** proses agent online di PM2, tapi command di Telegram tidak dibalas.

**Cek berurutan:**
1. **Token & chat ID benar?** Salah satu salah = bot diam.
2. **Kamu user yang diizinkan?** Agent yang aman membatasi siapa yang boleh memerintah. Pastikan chat ID-mu masuk allow-list.
3. **Log error:**

```bash
pm2 logs --err --lines 50
```

**Solusi:** perbaiki token/chat ID di config, restart proses, lalu kirim `/start` lagi.

## RPC error / transaksi gagal di Solana

**Gejala:** error `429`, `Too Many Requests`, timeout, atau transaksi gagal terus saat deploy/close.

**Artinya:** RPC publik biasanya rate-limited dan tidak cukup untuk agent yang aktif.

**Solusi:**
- Pakai **RPC berbayar/dedicated** (Helius, QuickNode, Triton, dll) dan set di `.env`.
- Kalau transaksi sering gagal saat ramai, pertimbangkan menaikkan priority fee.

:::caution
RPC publik gratis cocok untuk tes, tapi tidak untuk operasi nyata. Sebagian besar masalah "transaksi gagal acak" hilang setelah pindah RPC dedicated.
:::

## PM2: proses restart terus-menerus

**Gejala:** di `pm2 list`, kolom restart naik cepat - proses crash-loop.

**Cek:**

```bash
pm2 logs --err --lines 80
```

Cari error paling atas dari tiap crash (biasanya config hilang, `.env` salah, atau dependency belum di-install).

**Solusi umum:**
- `npm install` ulang kalau ada modul hilang.
- Cek `.env` lengkap dan formatnya benar.
- Setelah perbaikan: `pm2 restart <nama>` lalu pantau `pm2 logs`.

## Dua instance jalan bersamaan (bentrok)

**Gejala:** perilaku aneh - pesan dobel, atau proses tiba-tiba dapat `SIGTERM`.

**Artinya:** kamu menjalankan agent manual (`node index.js ...`) padahal versi PM2-nya juga jalan. Dua instance berebut.

**Solusi:** jangan jalankan manual saat versi PM2 aktif. Untuk query satu kali, pakai jalur yang aman (mis. command read-only), atau hentikan dulu yang PM2.

## Perubahan config tidak terasa

**Gejala:** sudah ubah setting tapi perilaku agent tidak berubah.

**Artinya:** banyak setting hanya dibaca **saat start**. Mengubah file saja tidak cukup.

**Solusi:** restart prosesnya.

```bash
pm2 restart <nama-agent>
# untuk operator:
hermes gateway restart
```

## Cek cepat kesehatan sistem

Satu blok untuk memastikan semua hidup:

```bash
pm2 list                                   # agent jalan?
curl -s http://localhost:20128/api/health  # gateway model hidup? (kalau pakai lokal)
hermes gateway status                      # operator hidup?
pm2 logs --lines 30                        # ada error terbaru?
```

:::tip[Prinsip debugging]
Selalu mulai dari **log**, bukan tebakan. `pm2 logs --err` dan `hermes gateway status` hampir selalu menunjukkan akar masalah dalam beberapa baris. Perbaiki satu hal, restart, cek lagi - jangan ubah banyak hal sekaligus.
:::

:::caution[Bukan saran finansial]
Catatan teknis untuk edukasi. Bukan ajakan trading. Selalu riset sendiri.
:::
