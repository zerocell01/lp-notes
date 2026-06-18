---
title: Token Standard — ERC-20, ERC-721, ERC-1155
description: Apa itu ERC, kenapa standard penting, dan perbedaan 3 standard token paling umum di Ethereum.
---

## Apa itu ERC?

ERC = **Ethereum Request for Comments**. Ini standard teknis — kayak "interface" di programming. Developer Ethereum ngajuin proposal → komunitas setuju → jadi standard.

Kenapa penting? Karena standard bikin **semua token kompatibel**. MetaMask bisa nampilin semua token ERC-20 karena semuanya ikutin interface yang sama. OpenSea bisa nampilin semua NFT ERC-721 karena alasan yang sama.

## ERC-20: Fungible Token

Fungible = setiap unit identik. 1 USDC = 1 USDC lainnya. Kayak uang.

### Fungsi wajib ERC-20:
```solidity
function totalSupply() public view returns (uint256)
function balanceOf(address account) public view returns (uint256)
function transfer(address to, uint256 amount) public returns (bool)
function allowance(address owner, address spender) public view returns (uint256)
function approve(address spender, uint256 amount) public returns (bool)
function transferFrom(address from, address to, uint256 amount) public returns (bool)
```

Contoh: USDC, DAI, UNI, AAVE, LINK. Semua token yang "kayak uang."

## ERC-721: NFT (Non-Fungible Token)

Non-fungible = setiap token **unik**. NFT #1 ≠ NFT #2. Kayak sertifikat tanah — tiap sertifikat beda.

### Fungsi wajib ERC-721:
```solidity
function ownerOf(uint256 tokenId) public view returns (address)
function balanceOf(address owner) public view returns (uint256)
function tokenURI(uint256 tokenId) public view returns (string)
function transferFrom(address from, address to, uint256 tokenId) public
```

### Metadata
`tokenURI()` return link ke JSON metadata:
```json
{
  "name": "Bored Ape #1234",
  "description": "...",
  "image": "ipfs://Qm...",
  "attributes": [
    {"trait_type": "Background", "value": "Blue"},
    {"trait_type": "Eyes", "value": "Laser"}
  ]
}
```

Image disimpen di IPFS (bukan di blockchain — on-chain storage mahal banget).

Contoh: Bored Ape Yacht Club, CryptoPunks, ENS domains.

## ERC-1155: Multi-Token

Gabungan ERC-20 + ERC-721. Satu kontrak bisa handle **fungible token DAN NFT**.

```solidity
function balanceOf(address account, uint256 id) public view returns (uint256)
function balanceOfBatch(address[] accounts, uint256[] ids) public view returns (uint256[])
function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data) public
```

Kenapa efisien? Game blockchain: lo punya 100 gold coin (fungible) + 5 item unik (NFT). Pake ERC-1155 → 1 kontrak. Pake ERC-20 + ERC-721 → minimal 2 kontrak, gas lebih boros.

Contoh: Enjin, game item, Sandbox ASSET.

## Perbandingan

| | ERC-20 | ERC-721 | ERC-1155 |
|---|:---:|:---:|:---:|
| **Fungible?** | Ya | Tidak | Bisa keduanya |
| **Unit** | Balance | tokenId | tokenId + amount |
| **Transfer** | `transfer(amount)` | `transferFrom(tokenId)` | `transferFrom(tokenId, amount)` |
| **Use case** | Uang, governance | Seni, koleksi, domain | Game, multi-asset |
| **Gas efisien** | Standar | Mahal (1 per mint) | Paling efisien (batch) |

## Standard lain yang perlu diketahui

- **ERC-4626** — Tokenized vault (Yearn, lending pool)
- **ERC-4337** — Account abstraction (gasless tx, social recovery)
- **ERC-6551** — Token Bound Account (NFT yang bisa megang aset)
- **EIP-1559** — Fee burning mechanism (London upgrade)

> **ERC = interface standard. ERC-20 = uang. ERC-721 = barang koleksi. ERC-1155 = game inventory.**

Lanjut: [Bikin Token Sendiri →](/token/bikin-token/)