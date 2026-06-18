---
title: Environment — Node, Hardhat, Foundry
description: Setup environment development Web3 — pilih Hardhat (JS/TS) atau Foundry (Solidity-native).
---

## Dua pilihan utama

| Tool | Bahasa | Best for |
|------|--------|----------|
| **Hardhat** | JavaScript/TypeScript | Pemula, full-stack, testing JS |
| **Foundry** | Solidity (tests juga Solidity) | Advanced, gas optimization, fuzz testing |

Pemula → **Hardhat**. Lebih familiar (JS), dokumentasi lengkap, plugin banyak.

## Setup Hardhat

### Prasyarat
- Node.js 18+ (cek: `node --version`)
- npm atau yarn

### Step-by-step

```bash
# 1. Untuk folder project
mkdir belajar-web3
cd belajar-web3

# 2. Init project Node.js
npm init -y

# 3. Install Hardhat
npm install --save-dev hardhat

# 4. Init Hardhat project
npx hardhat init
```

Pilih "Create a TypeScript project" (kalau mau JS, pilih JavaScript). Ikuti prompt — install dependencies.

### Struktur project Hardhat

```
belajar-web3/
├── contracts/ # Kontrak Solidity di sini
│ └── Lock.sol
├── scripts/ # Script deploy & interaksi
│ └── deploy.ts
├── test/ # Unit test
│ └── Lock.ts
├── hardhat.config.ts # Konfigurasi
└── package.json
```

### hardhat.config.ts (minimal)
```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
 solidity: "0.8.20",
 networks: {
 sepolia: {
 url: "https://sepolia.infura.io/v3/YOUR_INFURA_KEY",
 accounts: ["YOUR_PRIVATE_KEY"] // ⚠️ Jangan commit ini!
 }
 }
};

export default config;
```

## Setup Foundry

### Install
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

### Init project
```bash
forge init belajar-web3-foundry
cd belajar-web3-foundry
```

Struktur:
```
belajar-web3-foundry/
├── src/ # Kontrak di sini
├── script/ # Deploy script (Solidity)
├── test/ # Test (Solidity)
└── foundry.toml # Config
```

### Deploy dengan Foundry
```solidity
// script/Deploy.s.sol
contract DeployScript is Script {
 function run() external {
 uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
 vm.startBroadcast(deployerPrivateKey);
 new MyContract();
 vm.stopBroadcast();
 }
}
```

```bash
forge script script/Deploy.s.sol --rpc-url $SEPOLIA_RPC --broadcast
```

## Hardhat vs Foundry — mana yang dipilih?

| Situasi | Pilih |
|---------|-------|
| Baru belajar Web3 | Hardhat |
| Sudah jago TypeScript | Hardhat |
| Pengen fokus Solidity | Foundry |
| Gas optimization | Foundry |
| Debugging kompleks | Foundry (cast, anvil) |
| Full-stack dApp | Hardhat (integrasi frontend) |

## Infura / Alchemy — RPC Endpoint

Anda butuh RPC endpoint untuk konek ke Ethereum. Daftar gratis:

1. [infura.io](https://infura.io) — 100k request/bulan gratis
2. [alchemy.com](https://alchemy.com) — 300M compute units/bulan gratis

Membuat project → pilih Sepolia → copy HTTPS endpoint URL.

## .env & Keamanan

**JANGAN PERNAH COMMIT PRIVATE KEY.** Simpen di `.env`:

```bash
# .env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/KEY_KAMU
PRIVATE_KEY=0x... # Wallet DEV, bukan wallet asli!
```

Install dotenv:
```bash
npm install --save-dev dotenv
```

Tambahkan ke `.gitignore`:
```
.env
node_modules/
```

> **Hardhat = training wheels. Foundry = downhill MTB. Pilih sesuai skill, upgrade seiring waktu. Yang penting: mulai.**

Lanjut: [RPC, Provider, & Endpoint →](/tools/rpc-provider/)