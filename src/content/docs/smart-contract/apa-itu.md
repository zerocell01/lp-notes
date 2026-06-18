---
title: Apa itu Smart Contract?
description: Program yang berjalan di blockchain — tidak bisa dimatiin, tidak bisa diubah, tidak perlu perantara.
---

## Kontrak, tetapi "Pintar"

Smart contract = **program yang di-deploy ke blockchain**. Begitu di-deploy:

- Kodenya tidak bisa diubah (immutable)
- Jalannya otomatis — tidak ada yang bisa stop
- Semua orang bisa lihat isinya (transparan)
- Semua orang bisa panggil fungsinya (permissionless)

## Analogi: Mesin Jual Otomatis

Bayangkan vending machine:

- Anda masukin uang → dia keluarin minuman
- Tidak ada kasir, tidak ada yang kontrol
- Aturannya keras: "Rp10.000 = 1 Aqua. Tidak ada negosiasi."

Smart contract itu vending machine digital. Aturannya ditulis di kode, dan **tidak bisa dilanggar.**

## Contoh sederhana

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Celengan {
 // Simpen siapa yang menyimpan berapa
 mapping(address => uint256) public tabungan;

 // Fungsi nabung
 function nabung() public payable {
 tabungan[msg.sender] += msg.value;
 }

 // Fungsi tarik
 function tarik() public {
 uint256 jumlah = tabungan[msg.sender];
 tabungan[msg.sender] = 0;
 payable(msg.sender).transfer(jumlah);
 }
}
```

Kontrak ini:
1. Anda panggil `nabung()` sambil kirim ETH → ETH tersangkut di kontrak
2. Anda panggil `tarik()` → ETH balik ke Anda
3. Tidak ada yang bisa ambil ETH Anda — aturannya sudah fixed di kode

## Karakteristik Smart Contract

| Sifat | Artinya |
|-------|---------|
| **Immutable** | Begitu deploy, kode tidak bisa diubah (kecuali menggunakan proxy pattern) |
| **Deterministic** | Input yang sama → output yang sama, selalu |
| **Transparent** | Semua orang bisa baca kode & state |
| **Self-executing** | Tidak ada manusia yang perlu approve |

## Keterbatasan

- **Tidak bisa akses internet** — kontrak tidak bisa HTTP request sendiri. Butuh oracle (Chainlink) untuk data dari luar.
- **Gas mahal** — tiap operasi terkena biaya. Kode harus efisien.
- **Bug = bencana** — tidak bisa di-patch. Kalau ada celah, semua dana bisa raib.

## EVM: Mesin yang Menjalankan Kontrak

EVM (Ethereum Virtual Machine) = "CPU"-nya Ethereum. Semua node menjalankan EVM, dan EVM yang eksekusi smart contract. Bahasa paling populer: **Solidity**.

> **Smart contract = program yang dijamin jalan sesuai aturan, tanpa bisa diintervensi. Konsekuensinya: bug = permanen.**

Lanjut: [Solidity Dasar →](/smart-contract/solidity-dasar/)