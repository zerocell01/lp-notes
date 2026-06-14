---
title: Lebar Range Mengikuti Volatilitas
description: Prinsip umum menyesuaikan lebar range dengan seberapa liar token bergerak.
---

Prinsip intinya sederhana: **makin liar token, makin lebar range yang dibutuhkan** supaya posisi tidak gampang keluar dari range (OOR).

## Logikanya

- Token **tenang** (ATR% kecil) → harga jarang bergerak jauh → range **sempit** sudah cukup → fee padat, tetap in-range.
- Token **liar** (ATR% besar) → harga sering lompat jauh → butuh range **lebar** → lebih tahan OOR, walau fee per titik lebih encer.

Memasang range sempit di token liar = resep cepat OOR. Memasang range lebar di token tenang = fee jadi encer tanpa alasan. Lebar harus **menyesuaikan** karakter token.

## Pola umum (ilustratif)

Banyak pendekatan memetakan volatilitas ke lebar range secara bertahap, dengan batas bawah (floor) dan batas atas (ceiling):

| Volatilitas relatif | Lebar range |
| --- | --- |
| Sangat rendah | Sempit (dekat floor) |
| Sedang | Menengah |
| Tinggi | Lebar (mendekati ceiling) |
| Ekstrem | Maksimum (ceiling) |

:::note
Angka persisnya sengaja tidak dicantumkan - itu sangat tergantung token, bin step, dan toleransi risiko masing-masing. Yang penting **polanya**: naik bertahap, dengan batas bawah dan atas yang wajar.
:::

## Kenapa pakai floor dan ceiling

- **Floor (batas bawah)** - supaya range tidak pernah terlalu sempit sampai gampang OOR walau token sedang sepi sesaat.
- **Ceiling (batas atas)** - supaya range tidak melebar tanpa batas sampai fee jadi terlalu encer dan modal tidak produktif.

## Hubungan dengan fee

Range lebih lebar = lebih aman dari OOR, tapi fee per bin lebih kecil. Ini trade-off klasik (lihat [In-Range vs OOR](/dasar/range-dan-oor/)). Tujuannya bukan "selebar mungkin" atau "sesempit mungkin", tapi **pas dengan goyangan token** - cukup lebar untuk bertahan, cukup sempit untuk tetap menghasilkan.

## Intinya

Pakai ukuran goyangan (ATR%) untuk menentukan lebar range secara proporsional. Liar → lebar. Tenang → sempit. Selalu beri batas bawah dan atas biar tidak ekstrem.
