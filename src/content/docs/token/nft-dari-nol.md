---
title: NFT dari Nol
description: Tutorial bikin NFT ERC-721 pake OpenZeppelin — mint, metadata, dan deploy ke Sepolia.
---

## Yang lo butuhin

1. **Gambar** — ukuran kecil (NFT storage mahal), upload ke IPFS
2. **Metadata JSON** — deskripsi NFT lo
3. **Smart contract ERC-721**

## Step 1: Upload gambar ke IPFS

IPFS = penyimpanan terdesentralisasi. Gratis, permanen.

1. Buka [Pinata.cloud](https://pinata.cloud) (daftar gratis)
2. Upload gambar lo
3. Copy **IPFS CID** — format: `QmXyZ....`
4. URL gambar: `ipfs://QmXyZabc123...`

## Step 2: Bikin metadata JSON

Buat file `metadata.json`:
```json
{
  "name": "Cat Belajar Web3 #1",
  "description": "NFT pertama gue. Bukti bahwa gue beneran belajar Web3, bukan cuma baca.",
  "image": "ipfs://QmXyZabc123...",
  "attributes": [
    { "trait_type": "Level", "value": "Pemula" },
    { "trait_type": "Network", "value": "Sepolia" },
    { "trait_type": "Year", "value": "2026" }
  ]
}
```

Upload juga ke Pinata → dapet CID metadata.

## Step 3: Tulis kontrak NFT

Bikin `MyNFT.sol` di Remix:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor()
        ERC721("MyNFT", "MNFT")
        Ownable(msg.sender)
    {}

    // Mint NFT baru — hanya owner
    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId;
        _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // Required override
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
```

## Step 4: Deploy & Mint

1. Deploy kontrak (tanpa parameter constructor)
2. Panggil `safeMint`:
   - `to`: address wallet lo
   - `uri`: `ipfs://QmAbcMetadataCID...`
3. Konfirmasi di MetaMask

## Step 5: Cek di OpenSea Testnet

1. Buka [testnets.opensea.io](https://testnets.opensea.io)
2. Connect wallet
3. Profile → "My Collections" → NFT lo harusnya muncul
4. Metadata di-load dari IPFS → gambar muncul

## Verifikasi di Etherscan

Sama kayak ERC-20 — masukin address kontrak ke Sepolia Etherscan → Verify.

## Gas Cost Estimasi

| Action | Gas (perkiraan) |
|--------|:---:|
| Deploy kontrak | ~1,000,000 |
| Mint 1 NFT | ~150,000 |
| Transfer NFT | ~65,000 |

Di Sepolia testnet: gratis. Di Ethereum mainnet: berapa pun harga gas saat itu × estimasi di atas.

---

## Kenapa NFT storage di IPFS, bukan di blockchain?

1 ETH = 1 byte on-chain storage cost-nya mahal banget. Gambar 100KB = $5,000,000++ buat simpen. IPFS gratis. Kontrak lo cuma simpen **link** ke IPFS.

## On-chain NFT (SVG)

Ada NFT yang purely on-chain — gambar-nya SVG yang di-generate langsung dari data blockchain. Storage cost tetap signifikan, tapi feasible buat SVG kecil. Contoh: Loot, Chain Runners, Terraforms.

> **NFT = token unik + metadata. Metadata disimpen di IPFS, token ID di blockchain. OpenSea cuma "jendela" buat lihat — NFT lo tetap di wallet lo.**

Lanjut: [Tools Developer →](/tools/environment/)