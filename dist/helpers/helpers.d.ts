export declare class MultichainWallet {
    constructor();
    generateMnemonic: () => Promise<string>;
    createWalletEVMAndDisplayMnemonic: () => Promise<{
        address: any;
        mnemonic: any;
    }>;
    getEvmWalletAddress: (mnemonic: string) => Promise<any>;
    getPrivateKeyEVM: (mnemonic: string) => Promise<any>;
    verifyMemonicEVM: (mnemonic: string) => Promise<boolean>;
}
export declare const MultichainWalletWrapper: MultichainWallet;
