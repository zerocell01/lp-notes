---
title: Mapping, Struct, & Array
description: Tiga struktur data paling penting di Solidity — mapping (key-value), struct (object), dan array (list).
---

## Mapping: Key → Value

Mapping itu seperti dictionary di Python, object di JavaScript, atau HashMap di Java.

```solidity
// mapping(keyType => valueType) visibility nama;
mapping(address => uint256) public balances;
mapping(address => mapping(address => bool)) public approvals;
```

### Mengapa mapping penting?

Karena di blockchain, Anda tidak bisa "query semua user" seperti database SQL. Mapping adalah **satu-satunya cara efisien** untuk mencari data berdasarkan key.

```solidity
contract Token {
 mapping(address => uint256) public balanceOf;

 function transfer(address to, uint256 amount) public {
 require(balanceOf[msg.sender] >= amount, "Saldo kurang");
 balanceOf[msg.sender] -= amount;
 balanceOf[to] += amount;
 }
}
```

### Keterbatasan

- **Tidak bisa iterasi** — Anda tidak bisa "loop semua key"
- **Tidak bisa tahu ukuran** — tidak ada `.length`
- **Key tidak disimpan** — Anda tidak bisa tahu key apa saja yang pernah digunakan
- Semua key default = 0 / false / address(0) — hati-hati membedakan "belum diset" vs "diset ke 0"

## Struct: Custom Data Type

Struct itu seperti object/class — bundling beberapa variabel jadi satu tipe.

```solidity
struct Proposal {
 string title;
 uint256 yesVotes;
 uint256 noVotes;
 uint256 deadline;
 bool executed;
}

Proposal[] public proposals;

function createProposal(string memory _title) public {
 proposals.push(Proposal({
 title: _title,
 yesVotes: 0,
 noVotes: 0,
 deadline: block.timestamp + 7 days,
 executed: false
 }));
}
```

## Array: Urutan Data

```solidity
// Fixed size
uint256[5] public fixedArray; // selalu 5 elemen

// Dynamic
uint256[] public dynamicArray; // bisa bertambah
address[] public voters;

// Operasi
dynamicArray.push(10); // tambah di akhir
uint256 last = dynamicArray[dynamicArray.length - 1]; // akses
dynamicArray.pop(); // hapus terakhir
delete dynamicArray[2]; // reset ke 0 (tidak hapus index!)
```

> **`delete` di Solidity tidak menghapus elemen array — dia hanya reset nilai ke default (0, false, address(0)). Array tetap punya length yang sama.**

## Kombinasi Real-World: ERC-20 Token

```solidity
contract TokenKita {
 // Mapping: saldo tiap address
 mapping(address => uint256) public balanceOf;

 // Mapping: allowance (address A memberikan izin address B menggunakan berapa)
 mapping(address => mapping(address => uint256)) public allowance;

 // Array: address yang pernah transfer (untuk tracking)
 address[] public holders;

 // Struct: info transfer
 struct TransferInfo {
 address from;
 address to;
 uint256 amount;
 uint256 timestamp;
 }
 TransferInfo[] public transfers;

 function transfer(address to, uint256 amount) public {
 require(balanceOf[msg.sender] >= amount, "not enough");
 balanceOf[msg.sender] -= amount;
 balanceOf[to] += amount;

 // Track
 transfers.push(TransferInfo(msg.sender, to, amount, block.timestamp));
 }
}
```

## Tips

1. **Gunakan mapping untuk lookup, array untuk iterasi.** Gabungin keduanya kalau perlu.
2. **Hati-hati sama gas cost** — loop array besar bisa membuat transaksi gagal (out of gas)
3. **Struct di parameter function** — harus menggunakan `memory` atau `calldata`
4. **Mapping default value** — hati-hati antara "0 karena memang 0" vs "0 karena belum diset"

> **Mapping = search engine. Struct = blueprint. Array = daftar berurutan.**

Lanjut: [Deploy ke Testnet →](/smart-contract/deploy-testnet/)