---
title: Kapan LP Menang vs Kalah
description: LP DLMM itu taruhan harga ranging, bukan harga naik. Pahami kapan posisi LP unggul, kapan teredam, dan kapan ketinggalan — biar pilih token dan range dengan kepala dingin.
---

Pertanyaan yang sering muncul: "kalau token-nya naik, LP untung dong?" Jawabannya tidak sesederhana itu. Posisi LP punya karakter untung-rugi yang beda dari sekadar pegang token. Halaman ini menjelaskan kapan LP unggul dan kapan dia kalah, supaya kamu masuk posisi dengan ekspektasi yang benar.

:::note
Angka di halaman ini ilustrasi dari simulasi konsep (random walk + model IL standar), bukan hasil pasti. Tujuannya menunjukkan *arah* dan *bentuk* trade-off, bukan menjanjikan return. Pasar nyata jauh lebih berisik.
:::

## Inti: LP itu taruhan "harga bakal ranging"

Posisi LP DLMM menghasilkan fee selama harga **bergerak di dalam range**. Makin sering harga bolak-balik di dalam range (ranging/choppy), makin banyak fee numpuk tanpa kamu kehilangan apa-apa. Itu kondisi ideal LP.

Yang sering disalahpahami: LP **bukan** taruhan arah. Kamu tidak sedang bertaruh harga naik. Kamu bertaruh harga akan **goyang-goyang di sekitar level sekarang**. Tiga skenario di bawah menjelaskan kenapa.

## Skenario 1 — Harga ranging (LP menang)

Harga naik-turun di dalam range, tidak ke mana-mana secara bersih.

- Fee terus mengalir tiap jam
- Impermanent loss mendekati nol (harga balik ke titik awal)
- Ini sweet spot: kamu dibayar untuk menyediakan likuiditas di pasar yang sibuk tapi tidak trending

Inilah kenapa metrik **volume ÷ TVL** lebih penting dari arah harga. Token yang membosankan secara harga tapi ramai volume = mesin fee.

## Skenario 2 — Harga dump (LP rugi, tapi teredam)

Di sinilah ada kejutan yang melegakan: saat token turun, posisi LP **rugi lebih sedikit** daripada kalau kamu cuma pegang token.

Ilustrasi token turun 20% (modal $1.000):

- **Cuma pegang token (HODL):** rugi ~$200
- **Posisi LP range ketat:** rugi ~$77 (IL plus fee yang sudah terkumpul)
- **Posisi LP range lebar:** rugi ~$37

Kenapa teredam? Posisi LP hanya sebagian di token (sisanya di SOL/quote), plus sudah mengumpulkan fee sepanjang jalan. Jadi LP berfungsi sebagai **peredam** saat turun, bukan penguat. Ketakutan umum "LP bikin rugi lebih parah saat dump" itu keliru untuk gerakan turun.

Tapi tetap rugi absolut. Dump dalam tetap menyakitkan — LP memperkecil, bukan menghilangkan.

## Skenario 3 — Harga pump kuat (LP ketinggalan)

Ini biaya sebenarnya dari LP. Saat token naik menembus batas atas range, posisimu otomatis **menjual token di tengah jalan** — di batas atas kamu jadi 100% quote (SOL). Hasilnya kamu **ketinggalan upside**.

Ilustrasi naik (modal $1.000, range ketat):

- **+10%:** LP kira-kira impas, HODL +$100
- **+25%:** LP malah tertinggal ~7%, HODL +$250
- **+50%:** LP tertinggal ~17%, HODL +$500

Fee tidak menutupi selisih ini saat pump besar. Kamu menukar potensi cuan besar demi fee yang stabil. Kalau keyakinanmu token bakal terbang, LP adalah cara yang salah untuk mengekspresikannya — lebih baik pegang token langsung.

## Ringkasan trade-off

- **Ranging:** LP menang telak (fee tanpa IL)
- **Dump:** LP rugi, tapi lebih kecil dari HODL (teredam)
- **Pump:** LP ketinggalan, makin parah makin besar pump-nya

Bentuk untung-rugi LP itu seperti **menjual volatilitas**: kamu untung kalau pasar tenang/ranging, dan membayar kalau pasar bergerak jauh ke satu arah.

## Implikasi praktis

**Pilih token yang membosankan tapi ramai.** Volume tinggi, harga ranging, mcap tidak rapuh. Itu kondisi di mana LP menang. Bukan token yang lagi momentum kuat atau mau breakout.

**Hindari token yang mungkin break satu arah.** Token tua yang tiba-tiba pump adalah jebakan ganda: kalau lanjut naik kamu ketinggalan, kalau berbalik dump (lebih mungkin untuk pump tak wajar) kamu kena IL. LP paling buruk justru di sini. Lihat juga [Kapan Hold, Kapan Cut](/psikologi/hold-vs-cut/).

**Range lebar = lebih defensif, fee lebih kecil.** Range lebar mengecilkan IL saat dump dan memperkecil miss saat pump, dengan ongkos fee per jam yang lebih rendah. Range ketat memaksimalkan fee tapi menuntut perhatian lebih. Lihat [Lebar Range Mengikuti Volatilitas](/volatilitas/lebar-range/).

**Sabar itu cocok dengan matematika LP.** Menahan posisi di token ranging yang sehat = persis kondisi di mana LP unggul. Yang harus dihindari bukan "menahan lama", tapi "LP di token yang lagi mau breakout". Lihat [Sabar: Edge yang Sering Dilupakan](/psikologi/sabar/).

:::tip
Sebelum masuk, tanya satu hal: "apakah aku berharap token ini ranging, atau aku berharap dia terbang?" Kalau jawabannya terbang, jangan LP — pegang tokennya. LP untuk ketika kamu mau dibayar dari keramaian, bukan dari arah.
:::

:::caution[Bukan saran finansial]
Catatan konsep untuk edukasi. Bukan ajakan trading. Angka adalah ilustrasi simulasi, bukan jaminan. Selalu riset sendiri.
:::
