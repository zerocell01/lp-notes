---
title: Impermanent Loss di DLMM
description: Memahami impermanent loss dan kenapa di DLMM efeknya bisa lebih tajam.
---

**Impermanent loss (IL)** adalah selisih rugi antara menyediakan likuiditas vs sekadar memegang (hold) token. Muncul saat harga bergerak setelah kamu deploy. Disebut "impermanent" karena baru jadi rugi nyata kalau kamu menutup posisi saat harga sedang tidak menguntungkan.

## Kenapa IL terjadi

Saat jadi LP, posisimu otomatis "menjual" token yang naik dan "membeli" token yang turun seiring harga bergerak melewati bin. Kalau harga bergerak jauh satu arah, kamu berakhir memegang lebih banyak token yang nilainya turun - dibanding kalau kamu cuma hold.

## Kenapa di DLMM bisa lebih tajam

Karena likuiditas **terkonsentrasi** di range sempit, IL di DLMM bekerja lebih cepat daripada AMM klasik yang menyebar likuiditas ke semua harga:

- Range sempit = konversi token terjadi padat di sedikit bin = IL terasa lebih cepat saat harga bergerak.
- Makin sempit range, makin tinggi potensi fee **dan** makin tinggi potensi IL. Dua sisi koin yang sama.

Ini sebabnya token volatil sebaiknya pakai [range lebih lebar](/volatilitas/lebar-range/) - bukan cuma biar tahan OOR, tapi juga meredam laju IL.

## Lawan IL: fee

Kabar baiknya, LP dibayar fee. Posisi dianggap menang kalau:

```
Fee yang terkumpul  >  Impermanent loss
```

Inilah inti keputusan [hold vs cut](/psikologi/hold-vs-cut/): selama fee yang sudah terkumpul lebih besar dari IL sementara, posisi itu masih untung bersih walau angka harga terlihat merah.

## Cara meredam IL

- **Range proporsional dengan volatilitas** - jangan pasang sempit di token liar.
- **Pilih pool turnover tinggi** - fee tebal lebih cepat menutup IL ([volume ÷ TVL](/fee/volume-tvl/)).
- **Sabar** - fee butuh waktu mengumpul; keluar terlalu cepat sering mengunci IL sebelum fee sempat menutupnya.
- **Hindari token yang sudah lewat puncak** - masuk saat momentum sekarat = risiko harga jatuh searah = IL besar.

## Intinya

IL adalah biaya alami jadi LP, dan di DLMM efeknya lebih cepat karena likuiditas terkonsentrasi. Kuncinya bukan menghindari IL sepenuhnya (mustahil), tapi memastikan **fee yang dipanen lebih besar dari IL**. Range yang pas + pool yang ramai + kesabaran adalah cara menjaga keseimbangan itu.
