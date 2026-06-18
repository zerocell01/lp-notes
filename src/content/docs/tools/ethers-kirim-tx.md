---
title: Kirim Transaksi dengan Ethers.js
description: Tutorial kirim ETH, panggil fungsi kontrak (write), dan handle transaksi yang stuck.
---

## Yang Anda butuhkan

- Provider (Infura/Alchemy URL)
- Wallet dengan private key + saldo ETH
- **Jangan menggunakan wallet asli** — membuat wallet terpisah untuk development

## Setup Wallet + Provider

```javascript
const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(
 "https://sepolia.infura.io/v3/YOUR_KEY"
);

// Wallet dari private key
const wallet = new ethers.Wallet("0x...YOUR_PRIVATE_KEY", provider);

console.log("Address:", wallet.address);
```

## 1. Kirim ETH

```javascript
async function kirimETH(to, amountEth) {
 const tx = await wallet.sendTransaction({
 to: to,
 value: ethers.parseEther(amountEth), // "0.01" → 10000000000000000 wei
 });

 console.log("TX hash:", tx.hash);
 console.log("Menunggu konfirmasi...");

 // Tunggu 1 konfirmasi (opsional)
 const receipt = await tx.wait();
 console.log("Status:", receipt.status === 1 ? "Sukses" : "Gagal");
 console.log("Gas used:", receipt.gasUsed.toString());
 console.log("Block:", receipt.blockNumber);
}

kirimETH("0x742d...", "0.001");
```

## 2. Panggil fungsi kontrak (transfer token)

```javascript
const tokenABI = [
 "function transfer(address to, uint256 amount) returns (bool)",
 "function balanceOf(address) view returns (uint256)",
 "function decimals() view returns (uint8)",
];

const token = new ethers.Contract(tokenAddress, tokenABI, wallet);

async function transferToken(to, amount) {
 const decimals = await token.decimals();
 const parsedAmount = ethers.parseUnits(amount, decimals); // "10" → 10000000

 console.log(`Transfer ${amount} token ke ${to}...`);
 const tx = await token.transfer(to, parsedAmount);
 const receipt = await tx.wait();

 console.log("Status:", receipt.status === 1 ? "Sukses" : "Gagal");
}

transferToken("0x742d...", "100");
```

## 3. Custom gas

```javascript
const tx = await wallet.sendTransaction({
 to: "0x...",
 value: ethers.parseEther("0.01"),
 gasLimit: 100000, // override default
 maxFeePerGas: ethers.parseUnits("50", "gwei"), // EIP-1559
 maxPriorityFeePerGas: ethers.parseUnits("2", "gwei"), // tip
});
```

## 4. Gas estimation (sebelum kirim)

```javascript
const txData = {
 to: tokenAddress,
 data: token.interface.encodeFunctionData("transfer", [to, amount]),
};

const estimatedGas = await provider.estimateGas(txData);
console.log("Estimasi gas:", estimatedGas.toString());

// Kirim dengan buffer 20%
const tx = await wallet.sendTransaction({
 ...txData,
 gasLimit: estimatedGas * 120n / 100n,
});
```

## 5. Handle transaksi yang pending / stuck

```javascript
async function cekStatus(txHash) {
 const tx = await provider.getTransaction(txHash);

 if (!tx.blockNumber) {
 console.log("TX masih pending...");
 // Tunggu dan cek lagi
 setTimeout(() => cekStatus(txHash), 5000);
 return;
 }

 const receipt = await provider.getTransactionReceipt(txHash);
 console.log(`Terkonfirmasi di blok ${receipt.blockNumber}`);
 console.log("Status:", receipt.status === 1 ? "Sukses" : "Gagal");
}
```

Kalau TX stuck lama (gas terlalu rendah):
- **Speed up**: kirim TX baru dengan nonce yang sama + gas lebih tinggi
- **Cancel**: kirim TX ke diri sendiri dengan nonce yang sama + gas lebih tinggi

## 6. Approve sebelum transfer (ERC-20)

Untuk transfer token via `transferFrom`, Anda harus **approve** dulu:

```javascript
async function approve(spenderAddress, amount) {
 const decimals = await token.decimals();
 const parsedAmount = ethers.parseUnits(amount, decimals);

 const tx = await token.approve(spenderAddress, parsedAmount);
 const receipt = await tx.wait();

 console.log("Approved:", receipt.status === 1 ? "Sukses" : "Gagal");
}

approve("0xSpenderAddress...", "1000");
```

## Debugging TX

```javascript
// Coba simulate dulu (tidak kirim ke chain)
try {
 const result = await wallet.call({
 to: contractAddress,
 data: contractInterface.encodeFunctionData("someFunction", [args]),
 });
 console.log("Result:", result);
} catch (error) {
 console.log("Akan revert kalau dikirim:", error.reason || error.message);
}
```

## Keamanan

- **Gunakan `.env`** — jangan hardcode private key
- **Dev wallet terpisah** — jangan menggunakan wallet yang ada aset asli
- **Cek `require()` sebelum kirim** — `callStatic` bisa simulate
- **Verifikasi address** — jangan sampai salah address

> **`wallet.sendTransaction()` = commit. `wallet.call()` = preview. Selalu preview dulu kalau ragu, karena transaksi on-chain tidak bisa di-undo.**

Lanjut: [Explorer & Verifikasi Kontrak →](/tools/explorer-verifikasi/)