"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultichainWalletWrapper = exports.MultichainWallet = void 0;
const multichainWallet = __importStar(require("multichain-crypto-wallet"));
const bip39 = __importStar(require("bip39"));
class MultichainWallet {
    constructor() {
        this.generateMnemonic = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const mnemonic = bip39.generateMnemonic();
                return mnemonic;
            }
            catch (error) {
                throw error;
            }
        });
        this.createWalletEVMAndDisplayMnemonic = () => __awaiter(this, void 0, void 0, function* () {
            try {
                // Creating an Ethereum wallet.
                const { address, mnemonic } = multichainWallet.createWallet({
                    derivationPath: "m/44'/60'/0'/0/0", // Leave empty to use default derivation path
                    network: "ethereum",
                });
                return { address, mnemonic };
            }
            catch (error) {
                throw error;
            }
        });
        this.getEvmWalletAddress = (mnemonic) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { address } = multichainWallet.generateWalletFromMnemonic({
                    mnemonic: mnemonic,
                    derivationPath: "m/44'/60'/0'/0/0", // Leave empty to use default derivation path
                    network: "ethereum",
                });
                return address;
            }
            catch (error) {
                throw error;
            }
        });
        this.getPrivateKeyEVM = (mnemonic) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { privateKey } = multichainWallet.generateWalletFromMnemonic({
                    mnemonic: mnemonic,
                    derivationPath: "m/44'/60'/0'/0/0", // Leave empty to use default derivation path
                    network: "ethereum",
                });
                return privateKey;
            }
            catch (error) {
                throw error;
            }
        });
        this.verifyMemonicEVM = (mnemonic) => __awaiter(this, void 0, void 0, function* () {
            try {
                const verifiedMnemonic = bip39.validateMnemonic(mnemonic);
                return verifiedMnemonic;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.MultichainWallet = MultichainWallet;
exports.MultichainWalletWrapper = new MultichainWallet();
