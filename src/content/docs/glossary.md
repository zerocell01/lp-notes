---
title: Glossary Istilah Web3
description: Daftar istilah Web3 yang sering muncul — dari ABI sampai zk-rollup.
---

## A

**ABI (Application Binary Interface)**
Deskripsi teknis fungsi kontrak — seperti "API spec" untuk smart contract. Dibutuhkan Ethers.js/web3.py untuk interaksi.

**Account Abstraction (ERC-4337)**
Membuat wallet bisa dikustomisasi — gasless tx, social recovery, multisig — tanpa mengubah protokol Ethereum.

**Address**
Identitas di blockchain, format `0x...` 40 karakter hex. Bisa wallet atau kontrak.

**Airdrop**
Distribusi token gratis ke banyak address. Biasanya untuk marketing atau reward early user.

**Altcoin**
Semua crypto selain Bitcoin.

**AMM (Automated Market Maker)**
DEX yang menggunakan rumus matematika (bukan order book) untuk tentuin harga. Contoh: Uniswap.

**APR / APY**
Annual Percentage Rate (bunga sederhana) vs Annual Percentage Yield (bunga berbunga, termasuk compounding).

**Arbitrum**
Layer-2 Ethereum berbasis Optimistic Rollup. Transaksi lebih murah & cepat.

---

## B

**Base**
Layer-2 Ethereum dari Coinbase, berbasis OP Stack.

**Block**
Kumpulan transaksi yang diproses barengan. Satu blok ≈ satu halaman di buku besar.

**Block Explorer**
Tool untuk cari & lihat data blockchain (transaksi, alamat, kontrak). Contoh: Etherscan.

**Blockchain**
Database terdesentralisasi yang tidak bisa diubah. Ethereum, Solana, Polygon adalah blockchain.

**Bridge**
Jembatan untuk mindahin aset antar blockchain (Ethereum ↔ Arbitrum).

**Burn**
Hancurin token secara permanen — kirim ke address yang tidak ada kuncinya.

**Byzantine Fault Tolerance (BFT)**
Kemampuan sistem terdesentralisasi untuk tetap jalan meskipun ada node jahat / rusak.

---

## C

**CEX (Centralized Exchange)**
Exchange yang dikontrol satu perusahaan. Contoh: Binance, Coinbase.

**Consensus**
Mekanisme kesepakatan semua node soal "state blockchain yang benar." PoW (Bitcoin), PoS (Ethereum).

**Consensus Layer**
Layer Ethereum yang handle validasi blok — sebelumnya execution layer.

**Contract Address**
Alamat di blockchain tempat smart contract di-deploy.

**Custodial**
Pihak ketiga yang memegang private key lo. "Not your keys, not your coins."

---

## D

**dApp (Decentralized Application)**
Aplikasi yang backend-nya smart contract, bukan server tradisional.

**DAO (Decentralized Autonomous Organization)**
Organisasi yang diatur smart contract — voting, treasury, aturan semua on-chain.

**DeFi (Decentralized Finance)**
Sistem keuangan tanpa perantara, jalan di smart contract.

**Decentralization**
Tidak ada satu pihak yang kontrol. Kekuasaan tersebar di banyak node/validator.

**DEX (Decentralized Exchange)**
Exchange berbasis AMM di blockchain. Contoh: Uniswap, Curve.

**Depeg**
Stablecoin kehilangan patokan $1 — misal USDC sempat $0.87 pas SVB collapse.

**Deterministic**
Input sama → output selalu sama. Smart contract wajib deterministic.

**Dilution**
Penurunan nilai token karena supply bertambah (inflasi).

---

## E

**ECDSA**
Algoritma kriptografi yang digunakan Ethereum untuk tanda tangan digital.

**EIP (Ethereum Improvement Proposal)**
Proposal perubahan teknis Ethereum. EIP-1559 (fee burn), EIP-4337 (account abstraction).

**EOA (Externally Owned Account)**
Address yang dikontrol private key — wallet biasa, bukan kontrak.

**ERC (Ethereum Request for Comments)**
Standard teknis di Ethereum. ERC-20 (token), ERC-721 (NFT), ERC-1155 (multi-token).

**Ethereum**
Blockchain paling populer untuk smart contract & DeFi. Native token: ETH.

**EVM (Ethereum Virtual Machine)**
Mesin virtual yang eksekusi smart contract di Ethereum. Semua EVM-compatible chain (Polygon, Arbitrum) bisa menjalankan kontrak yang sama.

**Execution Layer**
Layer Ethereum yang eksekusi transaksi & smart contract — sebelumnya execution layer.

---

## F

**Faucet**
Website yang memberikan testnet token gratis. Contoh: Sepolia Faucet.

**Finality**
Titik di mana transaksi "final" — tidak bisa di-reverse. Di Ethereum PoS: ~12.8 menit.

**Flash Loan**
Pinjaman tanpa jaminan yang harus dikembalikan dalam 1 transaksi yang sama.

**Floor Price**
Harga termurah NFT dalam suatu koleksi.

**Fork**
Percabangan blockchain. Soft fork (update backward-compatible), hard fork (split permanen).

**Fractionalized NFT**
NFT yang dipecah jadi token ERC-20 — kepemilikan kolektif.

**Front-running**
Bot lihat transaksi pending Anda → kirim transaksi duluan dengan gas lebih tinggi. Jenis MEV.

**FUD**
Fear, Uncertainty, Doubt — narasi negatif (biasanya untuk manipulasi harga).

**Fungible**
Token yang tiap unit identik (1 USDC = 1 USDC lain). Lawannya: non-fungible (NFT).

---

## G

**Gas**
Unit komputasi di Ethereum. Tiap operasi butuh gas → Anda bayar dalam ETH.

**Gas Limit**
Maksimum gas yang Anda siap bayar untuk 1 transaksi.

**Gas Price**
Harga per unit gas (gwei). Semakin tinggi → semakin cepat diproses.

**Genesis Block**
Blok pertama di blockchain.

**GM / GN**
Good Morning / Good Night — salam khas komunitas crypto.

**Governance Token**
Token untuk voting keputusan protokol. Contoh: UNI (Uniswap), AAVE.

**Gwei**
Satuan kecil ETH: 1 gwei = 0.000000001 ETH = 1 nano-ETH.

---

## H

**Hardhat**
Framework development Solidity berbasis TypeScript/JavaScript.

**Hash**
Fungsi satu arah yang ubah data jadi string fixed-length. SHA-256, keccak256.

**HODL**
Hold On for Dear Life — strategi pegang crypto jangka panjang.

**Hot Wallet**
Wallet yang online (software). Lawannya: cold wallet (hardware, paper).

---

## I

**Immutable**
Tidak bisa diubah. Smart contract immutable setelah deploy (kecuali ada upgrade mechanism).

**Impermanent Loss (IL)**
Kerugian sementara LP karena harga aset berubah — dibanding hold biasa.

**IPFS (InterPlanetary File System)**
Penyimpanan terdesentralisasi. Tempat menyimpan metadata & gambar NFT.

---

## J,K

**JSON-RPC**
Protokol komunikasi antara aplikasi Anda dan node Ethereum.

**KYC**
Know Your Customer — verifikasi identitas (wajib di CEX, opsional di DeFi).

---

## L

**Layer 1 (L1)**
Blockchain utama: Ethereum, Solana, Bitcoin.

**Layer 2 (L2)**
Protokol di atas L1 untuk skalabilitas: Arbitrum, Optimism, Base, Polygon zkEVM.

**Liquidity Pool**
Kolam berisi 2 token yang digunakan AMM untuk fasilitasi swap.

**LP (Liquidity Provider)**
Orang yang nyetor aset ke liquidity pool, mendapatkan fee dari swap.

---

## M

**Mainnet**
Blockchain produksi — transaksi benar-benar, aset punya nilai asli.

**Market Cap (Mcap)**
Total nilai token = harga × supply beredar.

**MEV (Maximal Extractable Value)**
Profit yang bisa diekstrak validator/miner dengan nyusun ulang transaksi.

**Mempool**
Antrian transaksi yang belum diproses (pending).

**Merkle Tree**
Struktur data efisien untuk verifikasi data besar — basis airdrop & whitelist.

**MetaMask**
Wallet browser paling populer untuk akses Web3.

**Mint**
Membuat token/NFT baru. Dari "minting" — cetak koin.

**Multisig**
Wallet yang butuh >1 tanda tangan untuk transaksi.

---

## N

**NFT (Non-Fungible Token)**
Token unik yang tidak bisa ditukar 1:1. Dipake untuk seni, koleksi, domain, game item.

**Node**
Komputer yang menjalankan software blockchain & simpan salinan data.

**Nonce**
Counter transaksi — mulai dari 0, naik tiap transaksi. Cegah double-spend.

**Non-Custodial**
Anda yang memegang private key — bukan pihak ketiga.

---

## O

**Off-Chain**
Di luar blockchain. Data/gas/perhitungan yang tidak butuh on-chain transaction.

**On-Chain**
Di dalam blockchain. Semua transaksi & state yang tersimpan permanen.

**OpenZeppelin**
Library kontrak solidity yang diaudit — standard industri.

**Optimism**
Layer-2 Ethereum berbasis Optimistic Rollup.

**Oracle**
Jembatan data off-chain ke on-chain. Contoh: Chainlink (harga token).

---

## P

**Permissionless**
Bisa diakses siapa pun tanpa izin. Lawannya: permissioned (harus di-whitelist).

**Phishing**
Penipuan untuk curi private key / seed phrase. Selalu cek URL sebelum connect wallet.

**Polygon**
EVM-compatible sidechain / L2 — transaksi murah.

**PoS (Proof of Stake)**
Konsensus validasi blok berdasarkan jumlah token yang di-stake. Dipake Ethereum sekarang.

**PoW (Proof of Work)**
Konsensus berbasis komputasi (mining). Dipake Bitcoin, Ethereum dulu sebelum Merge.

**Private Key**
Kunci rahasia 64 karakter hex. Siapa yang memegang = pemilik wallet.

**Public Key**
Turunan private key, digunakan untuk verifikasi tanda tangan. Dari public key → address.

**Proxy Contract**
Pattern upgrade kontrak — logic bisa diganti meskipun address tetap.

---

## R

**RPC (Remote Procedure Call)**
Cara aplikasi berbicara sama node Ethereum. Endpoint = URL provider.

**Rug Pull**
Developer kabur bawa dana investor. Scam paling umum di DeFi.

**Rollup**
Teknologi L2 yang "gulung" transaksi off-chain → submit bukti ke L1.
- **Optimistic Rollup**: asumsi valid, challenge period (Arbitrum, Optimism)
- **ZK Rollup**: bukti kriptografi tiap batch (zkSync, StarkNet)

---

## S

**Seed Phrase**
12/24 kata yang bisa restore wallet. Simpan offline, jangan di cloud.

**Self-Custody**
Anda memegang private key sendiri. Lawan dari kustodian.

**Sepolia**
Testnet Ethereum yang direkomendasikan. Gantiin Goerli.

**Slippage**
Perbedaan harga expected vs actual akibat pergerakan harga saat transaksi diproses.

**Smart Contract**
Program yang berjalan di blockchain — immutable, self-executing, transparan.

**Solidity**
Bahasa pemrograman untuk menulis smart contract Ethereum.

**Stablecoin**
Token yang nilainya dipatok ke aset stabil (USD). USDC, USDT, DAI.

**Staking**
Ngunci token untuk bantu amankan jaringan (PoS) atau mendapatkan reward.

---

## T

**Testnet**
Blockchain latihan — token gratis, untuk development & testing.

**Token**
Aset digital di blockchain. Bisa represent uang, governance, utility, atau koleksi.

**Tokenomics**
Ekonomi token — supply, inflasi, distribusi, utility.

**Total Value Locked (TVL)**
Total nilai aset yang "terkunci" di protokol DeFi.

**Transaction**
Operasi on-chain: kirim ETH, panggil kontrak, deploy, dll.

**Trustless**
Tidak perlu percaya siapa pun. Verifikasi sendiri dari data on-chain.

---

## V

**Validator**
Node yang validasi & usul blok di PoS. Stake 32 ETH untuk jadi validator Ethereum.

**Vanity Address**
Address custom — misal `0xDEAD...BEEF`. Hasil brute-force generation.

**Vault**
Kontrak yang menyimpan & kelola aset user — seperti reksadana DeFi. Contoh: Yearn vaults.

---

## W

**Wallet**
Alat untuk interaksi sama Web3: membuat key pair, tanda tangan TX, konek ke dApp.

**Wei**
Satuan terkecil ETH: 1 ETH = 10^18 wei.

**Wrapped Token**
Token yang ngewakilin aset dari chain lain di Ethereum. WBTC = Bitcoin di Ethereum.

**WAGMI**
We're All Gonna Make It — mantra optimisme komunitas crypto.

---

## Y

**Yield**
Imbal hasil dari staking / LP / lending di DeFi.

**Yield Farming**
Strategi maksimalin yield dengan mindahin aset antar protokol.

---

## Z

**Zero-Knowledge Proof (ZKP)**
Bukti kriptografi bahwa Anda tahu sesuatu tanpa mengungkapkan apa yang Anda tahu. Basis ZK rollup + privasi.

**zk-Rollup**
L2 yang menggunakan ZK proof untuk validasi batch transaksi.

---

> \* Glossary ini terus ditambah seiring saya belajar. Kalau ada istilah yang kurang atau salah, buka issue di [GitHub](https://github.com/zerocell01/lp-notes).