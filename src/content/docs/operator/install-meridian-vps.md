---
title: Install Meridian (Agent LP) di VPS
description: Panduan pemula memasang agent LP DLMM Meridian — pilih branch main atau experimental, dan setting provider OpenRouter atau 9Router.
---

Halaman [sebelumnya](/operator/install-hermes-vps/) soal memasang **Hermes** (operator). Halaman ini soal memasang **Meridian** sendiri — agent LP DLMM yang melakukan trading otomatis. Repo aslinya: [github.com/yunus-0x/meridian](https://github.com/yunus-0x/meridian).

Ditulis untuk **pemula** — copy-paste dari atas ke bawah. Ada dua keputusan yang perlu kamu ambil di tengah jalan, dan aku jelasin dua-duanya pelan-pelan:

1. **Branch mana** — `main` atau `experimental`?
2. **Provider model mana** — OpenRouter atau 9Router?

:::caution[Pakai uang sungguhan]
Meridian mengeksekusi trading on-chain dengan wallet asli. **Selalu mulai dengan `DRY_RUN=true`** (mode simulasi, nggak ada transaksi) sampai kamu yakin semuanya jalan benar. Baru pindah ke live setelah paham.
:::

---

## Keputusan 1 — Branch `main` vs `experimental`

Repo Meridian punya beberapa branch. Dua yang relevan buat kamu:

### `main` (default — disarankan untuk mulai)
- Versi **stabil**. Sudah diuji, paling jarang error.
- Fitur yang masuk sini sudah matang.
- **Pilih ini kalau kamu baru mulai** atau mau yang aman.

### `experimental`
- Versi **uji coba**. Fitur baru masuk sini dulu sebelum naik ke `main`.
- Lebih banyak fitur terbaru, tapi **lebih berisiko** — bisa ada bug yang belum ketahuan.
- Pilih ini kalau kamu mau fitur terdepan dan **siap menghadapi bug** sesekali.

**Analogi sederhana:** `main` itu seperti mobil produksi yang sudah lolos uji. `experimental` itu mobil konsep — keren, fitur baru, tapi belum tentu mulus di jalan.

> Rekomendasiku buat pemula: **mulai dari `main`**. Pindah ke `experimental` nanti kalau sudah nyaman.

---

## Langkah 1 — Clone repo (pilih branch di sini)

Pastikan Node.js 18+ ada (kalau pasang Hermes duluan, Node sudah otomatis ada). Lalu clone.

### Opsi A — branch `main` (stabil)

```bash
git clone https://github.com/yunus-0x/meridian
cd meridian
```

`git clone` tanpa embel-embel otomatis ambil branch `main`.

### Opsi B — branch `experimental` (uji coba)

```bash
git clone -b experimental https://github.com/yunus-0x/meridian
cd meridian
```

Flag `-b experimental` artinya "clone langsung di branch experimental".

### Mau pindah branch setelah terlanjur clone?

Kalau sudah terlanjur clone `main` tapi mau coba `experimental` (atau sebaliknya):

```bash
# dari dalam folder meridian
git fetch origin
git checkout experimental   # pindah ke experimental
# atau:
git checkout main           # balik ke main
```

Cek kamu sekarang di branch mana:

```bash
git branch --show-current
```

---

## Langkah 2 — Install dependency

```bash
npm install
```

Tunggu sampai selesai (download paket-paket yang dibutuhkan).

---

## Keputusan 2 — Provider model: OpenRouter vs 9Router

Meridian butuh model LLM buat berpikir. Ada dua cara umum, dan **kamu bisa pilih salah satu** lewat setting `.env`. Ini bedanya:

### OpenRouter (cara bawaan README, paling gampang)
- Layanan **cloud** — kamu pakai API key, model jalan di server mereka.
- **Gampang**: daftar, dapat key, tempel. Selesai.
- **Bayar per pemakaian** (token), tapi ada juga model gratis.
- Cocok kalau kamu mau langsung jalan tanpa ribet.

### 9Router (yang aku pakai)
- **Gateway lokal** yang jalan di VPS-mu sendiri (`localhost:20128`), me-rute ke banyak provider upstream dengan fallback otomatis.
- Lebih fleksibel: bisa gonta-ganti provider/model upstream tanpa ubah Meridian.
- **Perlu setup tambahan** — kamu jalankan proses `9router` sendiri.
- Cocok kalau kamu mau kontrol lebih dan sudah nyaman.

:::note[Fakta teknis penting]
Secara default, kode Meridian **mengarah ke 9Router lokal** (`http://localhost:20128/v1`). Jadi kalau kamu mau pakai **OpenRouter**, kamu HARUS mengubah `LLM_BASE_URL` di `.env` — kalau tidak, Meridian akan nyari 9Router yang belum tentu jalan. Ini sumber kebingungan paling umum.
:::

---

## Langkah 3 — Setup `.env` (di sinilah pilih provider)

Jalankan wizard dulu (mengisi wallet, RPC, Telegram, dll):

```bash
npm run setup
```

Wizard nulis dua file di root repo:
- **`.env`** → semua rahasia: `WALLET_PRIVATE_KEY`, `RPC_URL`, `HELIUS_API_KEY`, API key, `TELEGRAM_BOT_TOKEN`, `DRY_RUN`
- **`user-config.json`** → setelan strategi (ukuran deploy, filter, dll) — **jangan pernah taruh key di sini**

Setelah wizard, buka `.env` dan atur bagian provider sesuai pilihanmu:

### Kalau pilih OpenRouter

Tambahkan / pastikan baris ini ada di `.env`:

```ini
LLM_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_API_KEY=sk-or-...your-key...
LLM_MODEL=openrouter/auto
```

- Dapat `OPENROUTER_API_KEY` di [openrouter.ai](https://openrouter.ai) → menu **Keys**.
- `LLM_MODEL` boleh diganti ke model spesifik yang kamu mau (mis. model `:free` buat hemat saat belajar).

### Kalau pilih 9Router

9Router jalan lokal dan **tidak butuh** `LLM_BASE_URL` di-set (default kode sudah ke `localhost:20128`). Tapi kamu harus **menjalankan proses 9Router** dulu. Cara umum (di tmux biar tetap hidup):

```bash
tmux new-session -d -s ninerouter '9router start'
```

Lalu di `.env` cukup set model-nya (9Router nggak wajib API key lokal):

```ini
# LLM_BASE_URL dibiarkan kosong → default ke 9Router lokal
LLM_MODEL=kr/claude-sonnet-4.5
```

:::tip[Cara gampang ingat bedanya]
- **OpenRouter** = ubah `LLM_BASE_URL` ke URL openrouter + isi `OPENROUTER_API_KEY`.
- **9Router** = biarkan `LLM_BASE_URL` kosong, tapi jalankan proses `9router start` dulu.

Kalau Meridian error "connection refused" ke `localhost:20128`, itu artinya dia nyari 9Router tapi 9Router-nya belum jalan — entah jalankan 9Router, atau pindah ke OpenRouter dengan set `LLM_BASE_URL`.
:::

### Model per-peran (opsional)

Meridian bisa pakai model beda untuk tiap peran. Di `user-config.json`:

```json
{
  "screeningModel": "...",
  "managementModel": "...",
  "generalModel": "..."
}
```

Kalau kosong, semua pakai `LLM_MODEL` dari `.env`.

---

## Langkah 4 — Tes dulu mode simulasi (WAJIB)

Sebelum pegang uang sungguhan, jalankan mode dry run — Meridian berpikir dan lapor, **tapi nggak melakukan transaksi**:

```bash
npm run dev
```

Pastikan `DRY_RUN=true` di `.env`. Amati: apakah dia screening pool, lapor kandidat, nggak ada error provider? Kalau lancar beberapa cycle, baru lanjut.

---

## Langkah 5 — Jalan live dengan PM2

Kalau sudah yakin, jalankan mode live pakai PM2 (process manager — bikin Meridian tetap hidup & auto-restart).

:::caution[Pakai script PM2 bawaan]
Meridian punya konfigurasi PM2 sendiri (`ecosystem.config.cjs`). **Jangan** jalankan `pm2 start index.js` manual — pakai script bawaan:
:::

```bash
# set DRY_RUN=false di .env dulu untuk live
npm run pm2:start
pm2 save
```

Cek status & log:

```bash
pm2 status
pm2 logs meridian
```

---

## Ringkasan perintah (cheat sheet)

```bash
# 1. Clone — pilih branch
git clone https://github.com/yunus-0x/meridian            # main (stabil)
# atau:
git clone -b experimental https://github.com/yunus-0x/meridian  # experimental
cd meridian

# 2. Install
npm install

# 3. Setup .env + config
npm run setup
#   → OpenRouter: set LLM_BASE_URL=https://openrouter.ai/api/v1 + OPENROUTER_API_KEY
#   → 9Router:    biarkan LLM_BASE_URL kosong, lalu: tmux new-session -d -s ninerouter '9router start'

# 4. Tes simulasi (DRY_RUN=true)
npm run dev

# 5. Live dengan PM2 (DRY_RUN=false)
npm run pm2:start && pm2 save
```

---

## Gabung dengan operator (Hermes)

Setelah Meridian jalan, kamu bisa minta **Hermes** (operator dari [halaman sebelumnya](/operator/install-hermes-vps/)) buat mengawasinya — baca log, cek posisi, perbaiki bug, restart. Dua proses terpisah: Meridian di PM2, Hermes di gateway service-nya sendiri. Tinggal kasih tahu operator di mana folder Meridian-nya.

## Intinya

- **Branch:** mulai `main` (stabil), naik ke `experimental` kalau mau fitur baru dan siap bug.
- **Provider:** OpenRouter = gampang & cloud (ubah `LLM_BASE_URL`); 9Router = lokal & fleksibel (jalankan prosesnya, biarkan base URL default).
- **Selalu dry run dulu** sebelum live.

:::caution[Bukan saran finansial]
Catatan ini soal infrastruktur, bukan ajakan trading. LP memecoin berisiko tinggi — kamu bisa rugi. Pahami penuh apa yang kamu jalankan sebelum kasih kendali wallet ke agent.
:::
