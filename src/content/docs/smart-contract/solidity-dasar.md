---
title: Solidity Dasar — Variables & Functions
description: Ngerti tipe data, variabel, visibility, dan function di Solidity.
---

## Solidity itu apa?

Solidity = bahasa pemrograman buat nulis smart contract di Ethereum (dan EVM-compatible chain). Sintaksnya mirip JavaScript/C++, tapi punya aturan spesifik karena jalan di blockchain.

## Struktur dasar kontrak

```solidity
// SPDX-License-Identifier: MIT    // Wajib: lisensi
pragma solidity ^0.8.20;           // Versi compiler

contract MyContract {
    // State variables, functions, events di sini
}
```

## Tipe Data Dasar

```solidity
bool public isActive = true;        // true / false
uint256 public angka = 42;          // unsigned integer (0 sampai 2^256-1)
int256 public negatif = -10;        // signed integer
address public owner = 0x1234...;   // alamat wallet / kontrak
string public nama = "Web3";        // teks
bytes32 public hash = 0x...;        // data biner fixed-size
```

> `uint256` paling umum dipakai. `uint` aja = `uint256`.

## Variabel: 3 Jenis

| Jenis | Keyword | Disimpen di | Contoh |
|-------|---------|-------------|--------|
| **State** | (default) | Blockchain (storage) | Saldo, owner |
| **Local** | di dalam function | Memory (sementara) | Hasil hitungan |
| **Global** | built-in | Blockchain info | `msg.sender`, `block.timestamp` |

```solidity
uint256 public stateVar;  // State — tersimpan permanen, gas mahal

function hitung(uint256 x) public pure returns (uint256) {
    uint256 localVar = x * 2;  // Local — cuma hidup di function ini
    return localVar;
}
```

## Visibility: Siapa yang Bisa Akses?

| Keyword | Bisa diakses dari |
|---------|-------------------|
| `public` | Semua orang + kontrak lain |
| `private` | Cuma kontrak ini |
| `internal` | Kontrak ini + kontrak turunan |
| `external` | Cuma dari luar kontrak |

```solidity
uint256 public dataTerbuka;    // Semua orang bisa baca
uint256 private dataRahasia;   // Cuma kontrak ini
```

## Functions

```solidity
function namaFunction(uint256 param1, string memory param2)
    public                     // visibility
    view                       // state mutability (opsional)
    returns (uint256)          // return type
{
    // body
    return param1;
}
```

### State Mutability

| Keyword | Bisa ubah state? | Bisa baca state? | Gas? |
|---------|:-----------------:|:-----------------:|:----:|
| (default) | ✅ | ✅ | Bayar |
| `view` | ❌ | ✅ | Gratis (kalau dipanggil external) |
| `pure` | ❌ | ❌ | Gratis |
| `payable` | ✅ | ✅ | Bisa terima ETH |

```solidity
function bacaData() public view returns (uint256) {
    return stateVar;  // Baca state — view
}

function tambah(uint256 a, uint256 b) public pure returns (uint256) {
    return a + b;  // Gak sentuh state sama sekali — pure
}

function deposit() public payable {
    // msg.value = jumlah ETH yang dikirim
    // payable = function ini bisa terima ETH
}
```

## msg.sender: Siapa yang Mangil?

`msg.sender` = address yang manggil function. Ini adalah **identitas pemanggil** — dan gak bisa dipalsukan.

```solidity
address public owner;

constructor() {
    owner = msg.sender;  // Yang deploy = owner
}

function hanyaOwner() public {
    require(msg.sender == owner, "Bukan owner!");
    // ... logika khusus owner
}
```

## Tips Pemula

1. **Selalu kasih visibility** — jangan biarin default (internal)
2. **Gunakan `view`/`pure` kalau bisa** — hemat gas pas dipanggil dari luar
3. **`string` harus pake `memory`** di parameter function
4. **`require()` buat validasi** — kalau gagal, transaksi di-revert

> **Solidity itu syntactically gampang, conceptually susah. Bedanya sama JS: tiap operasi ada biaya, data disimpen selamanya, dan bug gak bisa di-patch.**

Lanjut: [Mapping, Struct, & Array →](/smart-contract/mapping-struct-array/)