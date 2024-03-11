# Wallet Generator

Simple and powerful utility for generating and managing multicurrency crypto wallets. 
Provides easy-to-use functions to generate mnemonics, compatible with EVM and blockchains, retrieve wallet addresses and private keys and verify mnemonics.

## Features

- Generate BIP39 mnemonics
- Create EVM-compatible wallets (Ethereum, etc.)
- Retrieve wallet addresses from mnemonics
- Extract private keys from mnemonics
- Verify the validity of mnemonics

## Installation

Install `multi-wallet-generator` using npm:

```bash
npm install multi-wallet-generator
yarn add multi-wallet-generator

```

## Test
- To run the tests , use the npm command:
```bash
 npm run test
```

# Usage
- Below are some examples of how to use the wallet-generator library:
  
Generate a Mnemonic
```bash
import { MultichainWalletWrapper } from 'wallet-generator';

async function generateMnemonic() {
  const mnemonic = await MultichainWalletWrapper.generateMnemonic();
  console.log(`Mnemonic: ${mnemonic}`);
}
// Note: Mnemonics with less than 12 words have low entropy and may be guessed by an attacker.
generateMnemonic();

```
- Response
```bash 
  net idle lava mango another capable inhale portion blossom fluid discover cruise
```
Create an EVM Wallet and Display Mnemonic
```bash
async function createWallet() {
  const { address, mnemonic } = await MultichainWalletWrapper.createWalletEVMAndDisplayMnemonic();
  console.log(`Address: ${address}`);
  console.log(`Mnemonic: ${mnemonic}`);
}
createWallet();
```

- Response

```bash
{
  address: '0xfBE11AC0258cc8288cA24E818691Eb062f7042E9',
  mnemonic: 'net idle lava mango another capable inhale portion blossom fluid discover cruise'
}
```

Get EVM Wallet Address from Mnemonic

```bash
async function getAddress() {
  const mnemonic = "Contributions are welcome! Please feel free to submit a pull request or open an issue"
  const address = await MultichainWalletWrapper.getEvmWalletAddress(mnemonic);
  console.log(`Address: ${address}`);
}

getAddress();
```
- Reponse
```bash
0xfBE11AC0258cc8288cA24E818691Eb062f7042E9
```

Retrieve Private Key for EVM Wallet
```bash
 async function getPrivateKey() {
  const mnemonic = "net idle lava mango another capable inhale portion blossom fluid discover cruise"
  const privateKey = await MultichainWalletWrapper.getPrivateKeyEVM(mnemonic);
  console.log(`Private Key: ${privateKey}`);
}

getPrivateKey();
```

- Response
```bash
{
  privateKey: '0xfdf745f45d1942feea79b4c0a3fc1ca67da366899f7e6cebaa06496806ca8127',
}
```

Verify a Mnemonic
```bash
async function verifyMnemonic() {
  const mnemonic = "net idle lava mango another capable inhale portion blossom fluid discover cruise"
  const isValid = await MultichainWalletWrapper.verifyMemonicEVM(mnemonic);
  console.log(`Is valid: ${isValid}`);
}

verifyMnemonic();
```
- Response
```bash
 true
```