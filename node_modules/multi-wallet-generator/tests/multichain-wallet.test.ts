import { MultichainWalletWrapper } from "../src/helpers/helpers";
import { validateMnemonic } from 'bip39'

describe('MultichainWallet', () => {
  test('generateMnemonic generates a valid mnemonic', async () => {
    const mnemonic = await MultichainWalletWrapper.generateMnemonic();
    expect(mnemonic.split(' ').length).toBe(12); // Assuming it generates a 12-word mnemonic
    expect(validateMnemonic(mnemonic)).toBe(true);
  });
});


test('createWalletEVM creates a wallet with address and mnemonic', async () => {
  const { address, mnemonic } = await MultichainWalletWrapper.createWalletEVMAndDisplayMnemonic();
  expect(mnemonic.split(' ').length).toBe(12);
  expect(validateMnemonic(mnemonic)).toBe(true);
  expect(typeof address).toBe('string');
  expect(address.length).toBeGreaterThan(0);
 
});

test('getEvmWalletAddress returns an address for a given mnemonic', async () => {
  const mnemonic = await MultichainWalletWrapper.generateMnemonic(); // Generate or use a predefined mnemonic
  const address = await MultichainWalletWrapper.getEvmWalletAddress(mnemonic);
  expect(typeof address).toBe('string');
  expect(address.length).toBeGreaterThan(0);
});

test('getPrivateKeyEVM returns a private key for a given mnemonic', async () => {
  const mnemonic = await MultichainWalletWrapper.generateMnemonic(); // Generate or use a predefined mnemonic
  const privateKey = await MultichainWalletWrapper.getPrivateKeyEVM(mnemonic);
  expect(typeof privateKey).toBe('string');
  expect(privateKey.length).toBeGreaterThan(0);
});


test('verifyMnemonicEVM verifies a mnemonic correctly', async () => {
  const mnemonic = await MultichainWalletWrapper.generateMnemonic();
  const isValid = await MultichainWalletWrapper.verifyMemonicEVM(mnemonic);
  expect(isValid).toBe(true);

  const invalidMnemonic = 'this is clearly not a valid mnemonic';
  const isInvalid = await MultichainWalletWrapper.verifyMemonicEVM(invalidMnemonic);
  expect(isInvalid).toBe(false);
});
