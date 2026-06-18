---
title: Apa itu Smart Contract?
description: Program yang jalan di blockchain — gak bisa dimatiin, gak bisa diubah, gak perlu perantara.
---

## Kontrak, tapi "Pintar"

Smart contract = **program yang di-deploy ke blockchain**. Begitu di-deploy:

- Kodenya gak bisa diubah (immutable)
- Jalannya otomatis — gak ada yang bisa stop
- Semua orang bisa lihat isinya (transparan)
- Semua orang bisa panggil fungsinya (permissionless)

## Analogi: Mesin Jual Otomatis

Bayangin vending machine:

- Lo masukin uang → dia keluarin minuman
- Gak ada kasir, gak ada yang kontrol
- Aturannya keras: "Rp10.000 = 1 Aqua. Gak ada negosiasi."

Smart contract itu vending machine digital. Aturannya ditulis di kode, dan **gak bisa dilanggar.**

## Contoh sederhana

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Celengan {
    // Simpen siapa yang nyimpen berapa
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
1. Lo panggil `nabung()` sambil kirim ETH → ETH nyangkut di kontrak
2. Lo panggil `tarik()` → ETH balik ke lo
3. Gak ada yang bisa ambil ETH lo — aturannya udah fixed di kode

## Karakteristik Smart Contract

| Sifat | Artinya |
|-------|---------|
| **Immutable** | Begitu deploy, kode gak bisa diubah (kecuali pake proxy pattern) |
| **Deterministic** | Input yang sama → output yang sama, selalu |
| **Transparent** | Semua orang bisa baca kode & state |
| **Self-executing** | Gak ada manusia yang perlu approve |

## Keterbatasan

- **Gak bisa akses internet** — kontrak gak bisa HTTP request sendiri. Butuh oracle (Chainlink) buat data dari luar.
- **Gas mahal** — tiap operasi kena biaya. Kode harus efisien.
- **Bug = bencana** — gak bisa di-patch. Kalau ada celah, semua dana bisa raib.

## EVM: Mesin yang Jalanin Kontrak

EVM (Ethereum Virtual Machine) = "CPU"-nya Ethereum. Semua node jalanin EVM, dan EVM yang eksekusi smart contract. Bahasa paling populer: **Solidity**.

> **Smart contract = program yang dijamin jalan sesuai aturan, tanpa bisa diintervensi. Konsekuensinya: bug = permanen.**

Lanjut: [Solidity Dasar →](/smart-contract/solidity-dasar/)