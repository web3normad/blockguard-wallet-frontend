import { ethers } from 'ethers';
import CryptoJS from 'crypto-js';

// Function to generate a new wallet
export const generateWallet = async () => {
    const wallet = ethers.Wallet.createRandom();
    const walletAddress = wallet.address;
    const privateKey = wallet.privateKey;
    const mnemonic = wallet.mnemonic.phrase;
  
    return { privateKey, mnemonic, walletAddress };
  };
  
// Function to hash a password
export const hashPassword = (password) => {
  return CryptoJS.SHA256(password).toString();
};
