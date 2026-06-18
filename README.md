# Catatan LP DLMM

Catatan publik dari perjalanan belajar likuiditas DLMM, memecoin, dan psikologi trading. Dibangun dengan [Astro Starlight](https://starlight.astro.build/).

Fokus konten: **konsep dan "kenapa"-nya** — bukan angka/parameter rahasia atau saran finansial.

## Isi

- Dasar DLMM (bin, range, in-range vs OOR)
- Volatilitas & range (ATR, lebar range)
- Fee & pemilihan pool (volume ÷ TVL)
- Psikologi & strategi (sabar, hold vs cut)
- Tips singkat

## Jalankan lokal

```sh
npm install
npm run dev      # dev server di localhost:4321
npm run build    # build ke ./dist
npm run preview  # preview hasil build
```

## Menambah konten

Tiap halaman = satu file `.md` di `src/content/docs/`. Untuk memunculkannya di menu, tambahkan ke `sidebar` di `astro.config.mjs` (atau taruh di folder yang sudah di-`autogenerate` seperti `tips/`).

## Deploy

Auto-deploy via Vercel — tiap `git push` ke branch utama akan memicu build dan deploy otomatis.

Untuk Vercel:

- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Static Site

---

⚠️ **Bukan saran finansial.** Materi edukasi dari pengalaman belajar pribadi. LP memecoin berisiko tinggi.
