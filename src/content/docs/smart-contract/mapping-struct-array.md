---
title: Mapping, Struct, & Array
description: Tiga struktur data paling penting di Solidity — mapping (key-value), struct (object), dan array (list).
---

## Mapping: Key → Value

Mapping itu kayak dictionary di Python, object di JavaScript, atau HashMap di Java.

```solidity
// mapping(keyType => valueType) visibility nama;
mapping(address => uint256) public balances;
mapping(address => mapping(address => bool)) public approvals;
```

### Kenapa mapping penting?

Karena di blockchain, lo gak bisa "query semua user" kayak database SQL. Mapping adalah **satu-satunya cara efisien** buat nyari data berdasarkan key.

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

- **Gak bisa iterasi** — lo gak bisa "loop semua key"
- **Gak bisa tahu ukuran** — gak ada `.length`
- **Key gak disimpen** — lo gak bisa tahu key apa aja yang pernah dipake
- Semua key default = 0 / false / address(0) — hati-hati membedakan "belum diset" vs "diset ke 0"

## Struct: Custom Data Type

Struct itu kayak object/class — bundling beberapa variabel jadi satu tipe.

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
uint256[5] public fixedArray;          // selalu 5 elemen

// Dynamic
uint256[] public dynamicArray;         // bisa nambah
address[] public voters;

// Operasi
dynamicArray.push(10);                 // tambah di akhir
uint256 last = dynamicArray[dynamicArray.length - 1];  // akses
dynamicArray.pop();                    // hapus terakhir
delete dynamicArray[2];               // reset ke 0 (gak hapus index!)
```

> **`delete` di Solidity gak menghapus elemen array — dia cuma reset nilai ke default (0, false, address(0)). Array tetap punya length yang sama.**

## Kombinasi Real-World: ERC-20 Token

```solidity
contract TokenKita {
    // Mapping: saldo tiap address
    mapping(address => uint256) public balanceOf;

    // Mapping: allowance (address A kasih izin address B pake berapa)
    mapping(address => mapping(address => uint256)) public allowance;

    // Array: address yang pernah transfer (buat tracking)
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

1. **Gunakan mapping buat lookup, array buat iterasi.** Gabungin keduanya kalau perlu.
2. **Hati-hati sama gas cost** — loop array gede bisa bikin transaksi gagal (out of gas)
3. **Struct di parameter function** — harus pake `memory` atau `calldata`
4. **Mapping default value** — hati-hati antara "0 karena emang 0" vs "0 karena belum diset"

> **Mapping = search engine. Struct = blueprint. Array = daftar berurutan.**

Lanjut: [Deploy ke Testnet →](/smart-contract/deploy-testnet/)