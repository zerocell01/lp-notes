---
title: Kapan LP Menang vs Kalah
description: LP DLMM itu taruhan harga ranging, bukan harga naik. Pahami kapan posisi LP unggul, kapan teredam, dan kapan ketinggalan — biar pilih token dan range dengan kepala dingin.
---

Pertanyaan yang sering muncul: "kalau token-nya naik, LP untung ?" Jawabannya tidak sesederhana itu. Posisi LP punya karakter untung-rugi yang berbeda dari sekadar pegang token. Halaman ini menjelaskan kapan LP unggul dan kapan dia kalah, supaya Anda masuk posisi dengan ekspektasi yang benar.

:::note
Angka di halaman ini ilustrasi dari simulasi konsep (random walk + model IL standar), bukan hasil pasti. Tujuannya menunjukkan *arah* dan *bentuk* trade-off, bukan menjanjikan return. Pasar nyata jauh lebih berisik.
:::

## Inti: LP itu taruhan "harga akan ranging"

Posisi LP DLMM menghasilkan fee selama harga **bergerak di dalam range**. Makin sering harga bolak-balik di dalam range (ranging/choppy), makin banyak fee numpuk tanpa Anda kehilangan apa-apa. Itu kondisi ideal LP.

Yang sering disalahpahami: LP **bukan** taruhan arah. Anda tidak sedang bertaruh harga naik. Anda bertaruh harga akan **goyang-goyang di sekitar level sekarang**. Tiga skenario di bawah menjelaskan mengapa.

## Skenario 1 — Harga ranging (LP menang)

Harga naik-turun di dalam range, tidak ke mana-mana secara bersih.

- Fee terus mengalir tiap jam
- Impermanent loss mendekati nol (harga balik ke titik awal)
- Ini sweet spot: Anda dibayar untuk menyediakan likuiditas di pasar yang sibuk tetapi tidak trending

Inilah mengapa metrik **volume ÷ TVL** lebih penting dari arah harga. Token yang membosankan secara harga tetapi ramai volume = mesin fee.

## Skenario 2 — Harga dump (LP rugi, tetapi teredam)

Di sinilah ada kejutan yang melegakan: saat token turun, posisi LP **rugi lebih sedikit** daripada kalau Anda hanya pegang token.

Ilustrasi token turun 20% (modal $1.000):

- **Hanya pegang token (HODL):** rugi ~$200
- **Posisi LP range ketat:** rugi ~$77 (IL plus fee yang sudah terkumpul)
- **Posisi LP range lebar:** rugi ~$37

Mengapa teredam? Posisi LP hanya sebagian di token (sisanya di SOL/quote), plus sudah mengumpulkan fee sepanjang jalan. Jadi LP berfungsi sebagai **peredam** saat turun, bukan penguat. Ketakutan umum "LP membuat rugi lebih parah saat dump" itu keliru untuk gerakan turun.

Tetapi tetap rugi absolut. Dump dalam tetap menyakitkan — LP memperkecil, bukan menghilangkan.

## Skenario 3 — Harga pump kuat (LP ketinggalan)

Ini biaya sebenarnya dari LP. Saat token naik menembus batas atas range, posisi Anda otomatis **menjual token di tengah jalan** — di batas atas Anda jadi 100% quote (SOL). Hasilnya Anda **ketinggalan upside**.

Ilustrasi naik (modal $1.000, range ketat):

- **+10%:** LP kira-kira impas, HODL +$100
- **+25%:** LP malah tertinggal ~7%, HODL +$250
- **+50%:** LP tertinggal ~17%, HODL +$500

Fee tidak menutupi selisih ini saat pump besar. Anda menukar potensi cuan besar demi fee yang stabil. Kalau keyakinanmu token akan terbang, LP adalah cara yang salah untuk mengekspresikannya — lebih baik pegang token langsung.

## Ringkasan trade-off

- **Ranging:** LP menang telak (fee tanpa IL)
- **Dump:** LP rugi, tetapi lebih kecil dari HODL (teredam)
- **Pump:** LP ketinggalan, makin parah makin besar pump-nya

Bentuk untung-rugi LP itu seperti **menjual volatilitas**: Anda untung kalau pasar tenang/ranging, dan membayar kalau pasar bergerak jauh ke satu arah.

## Implikasi praktis

**Pilih token yang membosankan tetapi ramai.** Volume tinggi, harga ranging, mcap tidak rapuh. Itu kondisi di mana LP menang. Bukan token yang lagi momentum kuat atau mau breakout.

**Hindari token yang mungkin break satu arah.** Token tua yang tiba-tiba pump adalah jebakan ganda: kalau lanjut naik Anda ketinggalan, kalau berbalik dump (lebih mungkin untuk pump tak wajar) Anda terkena IL. LP paling buruk justru di sini. Lihat juga [Kapan Hold, Kapan Cut](/psikologi/hold-vs-cut/).

**Range lebar = lebih defensif, fee lebih kecil.** Range lebar mengecilkan IL saat dump dan memperkecil miss saat pump, dengan ongkos fee per jam yang lebih rendah. Range ketat memaksimalkan fee tetapi menuntut perhatian lebih. Lihat [Lebar Range Mengikuti Volatilitas](/volatilitas/lebar-range/).

**Sabar itu cocok dengan matematika LP.** Menahan posisi di token ranging yang sehat = persis kondisi di mana LP unggul. Yang harus dihindari bukan "menahan lama", tetapi "LP di token yang lagi mau breakout". Lihat [Sabar: Edge yang Sering Dilupakan](/psikologi/sabar/).

:::tip
Sebelum masuk, tanya satu hal: "apakah aku berharap token ini ranging, atau aku berharap dia terbang?" Kalau jawabannya terbang, jangan LP — pegang tokennya. LP untuk ketika Anda mau dibayar dari keramaian, bukan dari arah.
:::

:::caution[Bukan saran finansial]
Catatan konsep untuk edukasi. Bukan ajakan trading. Angka adalah ilustrasi simulasi, bukan jaminan. Selalu riset sendiri.
:::
