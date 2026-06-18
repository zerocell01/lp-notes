---
title: Install Meridian (Agent LP) di VPS
description: Panduan pemula memasang agent LP DLMM Meridian - pilih branch main atau experimental, dan setting provider OpenRouter atau 9Router.
---

Halaman [sebelumnya](/operator/install-hermes-vps/) soal memasang **Hermes** (operator). Halaman ini soal memasang **Meridian** sendiri - agent LP DLMM yang melakukan trading otomatis. Repo aslinya: [github.com/yunus-0x/meridian](https://github.com/yunus-0x/meridian).

Ditulis untuk **pemula** - copy-paste dari atas ke bawah. Ada dua keputusan yang perlu Anda ambil di tengah jalan, dan aku jelasin dua-duanya pelan-pelan:

1. **Branch mana** - `main` atau `experimental`?
2. **Provider model mana** - OpenRouter atau 9Router?

:::caution[Pakai uang sungguhan]
Meridian mengeksekusi trading on-chain dengan wallet asli. **Selalu mulai dengan `DRY_RUN=true`** (mode simulasi, tidak ada transaksi) sampai Anda yakin semuanya jalan benar. Baru pindah ke live setelah paham.
:::

---

## Keputusan 1 - Branch `main` vs `experimental`

Repo Meridian punya beberapa branch. Dua yang relevan untuk Anda:

### `main` (default - disarankan untuk mulai)
- Versi **stabil**. Sudah diuji, paling jarang error.
- Fitur yang masuk sini sudah matang.
- **Pilih ini kalau Anda baru mulai** atau mau yang aman.

### `experimental`
- Versi **uji coba**. Fitur baru masuk sini dulu sebelum naik ke `main`.
- Lebih banyak fitur terbaru, tetapi **lebih berisiko** - bisa ada bug yang belum ketahuan.
- Pilih ini kalau Anda mau fitur terdepan dan **siap menghadapi bug** sesekali.

**Analogi sederhana:** `main` itu seperti mobil produksi yang sudah lolos uji. `experimental` itu mobil konsep - keren, fitur baru, tetapi belum tentu mulus di jalan.

> Rekomendasiku untuk pemula: **mulai dari `main`**. Pindah ke `experimental` nanti kalau sudah nyaman.

---

## Langkah 1 - Clone repo (pilih branch di sini)

Pastikan Node.js 18+ ada (kalau memasang Hermes duluan, Node sudah otomatis ada). Lalu clone.

### Opsi A - branch `main` (stabil)

```bash
git clone https://github.com/yunus-0x/meridian
cd meridian
```

`git clone` tanpa embel-embel otomatis ambil branch `main`.

### Opsi B - branch `experimental` (uji coba)

```bash
git clone -b experimental https://github.com/yunus-0x/meridian
cd meridian
```

Flag `-b experimental` artinya "clone langsung di branch experimental".

### Mau pindah branch setelah terlanjur clone?

Kalau sudah terlanjur clone `main` tetapi mau coba `experimental` (atau sebaliknya):

```bash
# dari dalam folder meridian
git fetch origin
git checkout experimental # pindah ke experimental
# atau:
git checkout main # balik ke main
```

Cek Anda sekarang di branch mana:

```bash
git branch --show-current
```

---

## Langkah 2 - Install dependency

```bash
npm install
```

Tunggu sampai selesai (download paket-paket yang dibutuhkan).

---

## Keputusan 2 - Provider model: OpenRouter vs 9Router

Meridian butuh model LLM untuk berpikir. Ada dua cara umum, dan **Anda bisa pilih salah satu** lewat setting `.env`. Ini bedanya:

### OpenRouter (cara bawaan README, paling mudah)
- Layanan **cloud** - Anda pakai API key, model jalan di server mereka.
- **Mudah**: daftar, dapat key, tempel. Selesai.
- **Bayar per pemakaian** (token), tetapi ada juga model gratis.
- Cocok kalau Anda mau langsung jalan tanpa rumit.

### 9Router (yang aku pakai)
- **Gateway lokal** yang berjalan di VPS-mu sendiri (`localhost:20128`), me-rute ke banyak provider upstream dengan fallback otomatis.
- Lebih fleksibel: bisa gonta-ganti provider/model upstream tanpa ubah Meridian.
- **Perlu setup tambahan** - Anda jalankan proses `9router` sendiri.
- Cocok kalau Anda mau kontrol lebih dan sudah nyaman.

:::note[Fakta teknis penting]
Secara default, kode Meridian **mengarah ke 9Router lokal** (`http://localhost:20128/v1`). Jadi kalau Anda mau pakai **OpenRouter**, Anda HARUS mengubah `LLM_BASE_URL` di `.env` - kalau tidak, Meridian akan mencari 9Router yang belum tentu jalan. Ini sumber kebingungan paling umum.
:::

---

## Langkah 3 - Setup `.env` (di sinilah pilih provider)

Jalankan wizard dulu (mengisi wallet, RPC, Telegram, dll):

```bash
npm run setup
```

Wizard menulis dua file di root repo:
- **`.env`** → semua rahasia: `WALLET_PRIVATE_KEY`, `RPC_URL`, `HELIUS_API_KEY`, API key, `TELEGRAM_BOT_TOKEN`, `DRY_RUN`
- **`user-config.json`** → setelan strategi (ukuran deploy, filter, dll) - **jangan pernah tempatkan key di sini**

Setelah wizard, buka `.env` dan atur bagian provider sesuai pilihanmu:

### Kalau pilih OpenRouter

Tambahkan / pastikan baris ini ada di `.env`:

```ini
LLM_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_API_KEY=sk-or-...your-key...
LLM_MODEL=openrouter/auto
```

- Dapat `OPENROUTER_API_KEY` di [openrouter.ai](https://openrouter.ai) → menu **Keys**.
- `LLM_MODEL` boleh diganti ke model spesifik yang Anda mau (mis. model `:free` untuk hemat saat belajar).

### Kalau pilih 9Router

9Router itu **gateway lokal** yang berjalan di VPS-mu. Meridian secara default sudah mengarah ke sana (`http://localhost:20128/v1`), jadi `LLM_BASE_URL` di `.env` **dibiarkan kosong**. Yang perlu Anda lakukan: memasang dan nyalakan 9Router-nya, lalu colok minimal satu provider. Ikuti pelan-pelan.

#### 9a. Install 9Router

9Router dipasang global lewat npm (Node.js sudah ada dari langkah sebelumnya):

```bash
npm install -g 9router
```

#### 9b. Nyalakan 9Router (biar tetap hidup pakai tmux)

Karena ini proses yang harus terus jalan, kita pakai tmux supaya tidak mati saat SSH ditutup:

```bash
tmux new-session -d -s ninerouter '9router'
```

Penjelasan: `tmux new-session -d -s ninerouter` membuat sesi background bernama `ninerouter`, lalu `'9router'` adalah perintah yang dijalankan di dalamnya.

Cek 9Router sudah hidup:

```bash
curl -s http://localhost:20128/api/health
```

Kalau balas `{"ok":true}`, berarti jalan. 🎉

Mau lihat isi sesi tmux-nya? `tmux attach -t ninerouter` (keluar lagi tanpa mematikan: tekan `Ctrl+B` lalu `D`).

#### 9c. Colok provider (minimal satu)

9Router hanya router - dia butuh setidaknya satu provider untuk diteruskan. Ada **provider gratis** yang tidak perlu daftar (mis. Kiro, OpenCode Free) dan provider berbayar pakai API key (OpenRouter, GLM, dll).

Cara paling mudah lewat **dashboard**:

1. Buka dashboard 9Router di browser: `http://localhost:20128`
2. Login. Password-nya ada di file ini (jalankan di VPS, copy hasilnya):

 ```bash
 cat ~/.9router/auth/cli-secret
 ```
3. Masuk menu **Providers**, pilih satu, ikuti langkah connect-nya (provider OAuth seperti Kiro tinggal authorize; provider API key tinggal tempel key).

:::tip[Buka dashboard dari laptop]
Dashboard jalan di `localhost` VPS, jadi dari laptop Anda perlu **SSH tunnel**. Di laptop, jalankan:

```bash
ssh -L 20128:localhost:20128 root@ALAMAT_IP_VPS
```

Biarkan terminal itu terbuka, lalu buka `http://localhost:20128` di browser laptop. Itu "menembus" ke dashboard di VPS.
:::

#### 9d. Cek model apa saja yang tersedia

Setelah provider tercolok, lihat daftar model yang bisa dipakai:

```bash
curl -s http://localhost:20128/v1/models -o /tmp/models.json
```

Lalu lihat isinya (jangan di-pipe langsung ke python - tulis ke file dulu, baru baca, biar aman):

```bash
python3 -c "import json; d=json.load(open('/tmp/models.json')); [print(m['id']) for m in d['data']]"
```

Nama model di 9Router pakai awalan provider, contohnya:
- `kr/claude-sonnet-4.5`, `kr/claude-opus-4.8` (provider subscription utama)
- `cmc/...` (provider sekunder: DeepSeek, GLM, MiniMax, dll)

Catatan: katalog model berubah-ubah, jadi **selalu cek `/v1/models`** daripada menebak nama model.

#### 9e. Set model di `.env` Meridian

Terakhir, di `.env` Meridian cukup set nama model (base URL dibiarkan default):

```ini
# LLM_BASE_URL dibiarkan kosong → otomatis ke 9Router lokal (localhost:20128)
LLM_MODEL=kr/claude-sonnet-4.5
```

Pilih nama model dari daftar `/v1/models` di langkah 9d. Untuk agent yang banyak pakai tool seperti Meridian, model `kr/claude-*` (Claude) lebih andal soal pemanggilan tool dibanding model GPT.

#### Ringkasan langkah 9Router

```bash
npm install -g 9router # memasang
tmux new-session -d -s ninerouter '9router' # nyalakan
curl -s http://localhost:20128/api/health # cek hidup → {"ok":true}
cat ~/.9router/auth/cli-secret # password dashboard
# buka http://localhost:20128 → Providers → colok 1 provider
curl -s http://localhost:20128/v1/models -o /tmp/models.json # lihat model
# set LLM_MODEL di .env Meridian, LLM_BASE_URL biarkan kosong
```

:::tip[Cara mudah ingat bedanya]
- **OpenRouter** = ubah `LLM_BASE_URL` ke URL openrouter + isi `OPENROUTER_API_KEY`. Selesai, tidak ada proses tambahan.
- **9Router** = biarkan `LLM_BASE_URL` kosong, tetapi memasang + nyalakan `9router` dulu DAN colok minimal satu provider lewat dashboard.

Kalau Meridian error **"connection refused"** ke `localhost:20128`, artinya dia mencari 9Router tetapi 9Router-nya belum jalan - jalankan 9Router, atau pindah ke OpenRouter dengan set `LLM_BASE_URL`.
:::

### Model per-peran (opsional)

Meridian bisa pakai model berbeda untuk tiap peran. Di `user-config.json`:

```json
{
 "screeningModel": "...",
 "managementModel": "...",
 "generalModel": "..."
}
```

Kalau kosong, semua pakai `LLM_MODEL` dari `.env`.

---

## Langkah 4 - Tes dulu mode simulasi (WAJIB)

Sebelum pegang uang sungguhan, jalankan mode dry run - Meridian berpikir dan lapor, **tetapi tidak melakukan transaksi**:

```bash
npm run dev
```

Pastikan `DRY_RUN=true` di `.env`. Amati: apakah dia screening pool, lapor kandidat, tidak ada error provider? Kalau lancar beberapa cycle, baru lanjut.

---

## Langkah 5 - Jalan live dengan PM2

Kalau sudah yakin, jalankan mode live pakai PM2 (process manager - membuat Meridian tetap hidup & auto-restart).

:::caution[Pakai script PM2 bawaan]
Meridian punya konfigurasi PM2 sendiri (`ecosystem.config.cjs`). **Jangan** jalankan `pm2 start index.js` manual - pakai script bawaan:
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
# 1. Clone - pilih branch
git clone https://github.com/yunus-0x/meridian # main (stabil)
# atau:
git clone -b experimental https://github.com/yunus-0x/meridian # experimental
cd meridian

# 2. Install
npm install

# 3. Setup .env + config
npm run setup
# → OpenRouter: set LLM_BASE_URL=https://openrouter.ai/api/v1 + OPENROUTER_API_KEY
# → 9Router: biarkan LLM_BASE_URL kosong, lalu: tmux new-session -d -s ninerouter '9router start'

# 4. Tes simulasi (DRY_RUN=true)
npm run dev

# 5. Live dengan PM2 (DRY_RUN=false)
npm run pm2:start && pm2 save
```

---

## Gabung dengan operator (Hermes)

Setelah Meridian jalan, Anda bisa minta **Hermes** (operator dari [halaman sebelumnya](/operator/install-hermes-vps/)) untuk mengawasinya - baca log, cek posisi, perbaiki bug, restart. Dua proses terpisah: Meridian di PM2, Hermes di gateway service-nya sendiri. Tinggal memberikan tahu operator di mana folder Meridian-nya.

## Intinya

- **Branch:** mulai `main` (stabil), naik ke `experimental` kalau mau fitur baru dan siap bug.
- **Provider:** OpenRouter = mudah & cloud (ubah `LLM_BASE_URL`); 9Router = lokal & fleksibel (jalankan prosesnya, biarkan base URL default).
- **Selalu dry run dulu** sebelum live.

:::caution[Bukan saran finansial]
Catatan ini soal infrastruktur, bukan ajakan trading. LP memecoin berisiko tinggi - Anda bisa rugi. Pahami penuh apa yang Anda jalankan sebelum memberikan kendali wallet ke agent.
:::
