---
title: Liquidity Pool & AMM
description: Gimana DEX jalan tanpa order book — pool, AMM, dan rumus x*y=k.
---

## Order Book vs AMM

### Cara lama: Order Book (kayak bursa saham)
```
BUY orders:          SELL orders:
0.99 ETH — 2    |   1.01 ETH — 3
0.98 ETH — 5    |   1.02 ETH — 1
0.97 ETH — 10   |   1.03 ETH — 8
```
Pembeli & penjual matching — butuh likuiditas 2 sisi. Gak cocok buat on-chain (gas mahal, lambat).

### Cara DEX: AMM (Automated Market Maker)

Gak ada order book. Yang ada: **liquidity pool** — kolam berisi 2 token dengan rumus matematika.

## Gimana cara kerja pool?

Pool ETH-USDC isinya:
- 10 ETH
- 20,000 USDC

Rumus: **x × y = k** (constant product)
- x = jumlah ETH
- y = jumlah USDC
- k = konstanta (10 × 20000 = 200,000)

### Harga ditentukan otomatis
Harga ETH = y / x = 20,000 / 10 = **$2,000**

### Lo swap 1 ETH → USDC:
1. ETH masuk pool → x jadi 11
2. Supaya k tetap 200,000 → y harus jadi 200,000 / 11 = 18,181
3. USDC keluar = 20,000 - 18,181 = **1,818 USDC**

Tapi... lo gak dapet $2,000 (harga awal). Lo dapet **$1,818**. Selisih = **slippage**.

Semakin besar swap vs ukuran pool → semakin besar slippage.

## LP: Liquidity Provider

Lo bisa **nyetor 2 token** ke pool → jadi LP. Lo dapet:

1. **LP Token** — bukti kepemilikan lo di pool
2. **Fee** dari tiap swap (biasanya 0.3%) — proporsional sama share lo

Contoh: pool total $100,000, lo setor $10,000 → lo punya 10% pool → lo dapet 10% dari fee.

## Impermanent Loss (IL)

IL = kerugian sementara karena harga token berubah. Pool selalu "jual yang naik, beli yang turun."

Contoh:
- Lo LP ETH-USDC pas ETH $2,000
- ETH naik ke $3,000
- Lo tarik LP → nilai aset lo **lebih kecil** dibanding kalau lo cuma hold aja

Kenapa? Karena pool ngikutin rumus x*y=k. Pool otomatis "jual" ETH pas naik, jadi lo megang lebih sedikit ETH.

> IL = opportunity cost. Belum tentu rugi total kalau fee nutup.

## Konsentrasi Likuiditas (Uniswap V3)

Di V1/V2, likuiditas lo nyebar dari harga $0 → $∞. Di V3, lo bisa tentuin **range harga** tempat likuiditas lo aktif. Lebih efisien, tapi lebih kompleks.

---

> **AMM = robot market maker yang pake rumus matematika, bukan order book. LP = lo yang nyetor aset ke robot itu. Risiko utama = impermanent loss.**

Lanjut: [Yield Farming & Staking →](/defi/yield-farming-staking/)