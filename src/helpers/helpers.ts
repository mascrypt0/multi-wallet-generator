import * as multichainWallet from "multichain-crypto-wallet";
import * as bip39 from "bip39";

export class MultichainWallet {
  constructor() {}

  generateMnemonic = async () => {
    try {
      const mnemonic = bip39.generateMnemonic();
      return mnemonic;
    } catch (error) {
      throw error;
    }
  };

  createWalletEVMAndDisplayMnemonic = async () => {
    try {
      // Creating an Ethereum wallet.
      const { address, mnemonic } = multichainWallet.createWallet({
        derivationPath: "m/44'/60'/0'/0/0", // Leave empty to use default derivation path
        network: "ethereum",
      });

      return { address, mnemonic };
    } catch (error) {
      throw error;
    }
  };

  getEvmWalletAddress = async (mnemonic: string) => {
    try {
      const { address } = multichainWallet.generateWalletFromMnemonic({
        mnemonic: mnemonic,
        derivationPath: "m/44'/60'/0'/0/0", // Leave empty to use default derivation path
        network: "ethereum",
      });

      return address;
    } catch (error) {
      throw error;
    }
  };

  getPrivateKeyEVM = async (mnemonic: string) => {
    try {
      const { privateKey } = multichainWallet.generateWalletFromMnemonic({
        mnemonic: mnemonic,
        derivationPath: "m/44'/60'/0'/0/0", // Leave empty to use default derivation path
        network: "ethereum",
      });

      return privateKey;
    } catch (error) {
      throw error;
    }
  };

  verifyMemonicEVM = async (mnemonic: string) => {
    try {
      const verifiedMnemonic = bip39.validateMnemonic(mnemonic);
      return verifiedMnemonic;
    } catch (error) {
      throw error;
    }
  };


}

export const MultichainWalletWrapper = new MultichainWallet();
