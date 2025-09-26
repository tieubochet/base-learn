// Fix: Add triple-slash directive to include Vite client types, resolving the error on `import.meta.env`.
/// <reference types="vite/client" />

// Fix: Renamed `defaultEthersConfig` to `defaultConfig` to fix the import error.
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';

// 1. Get projectId from environment variables
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;
if (!projectId) {
  throw new Error("VITE_WALLETCONNECT_PROJECT_ID is not set in the environment variables.");
}


// 2. Define chains
const baseSepolia = {
  chainId: 84532,
  name: 'Base Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.basescan.org',
  rpcUrl: 'https://sepolia.base.org',
};

// 3. Create modal
const metadata = {
  name: 'Base Sepolia Contract Deployer',
  description: 'A user interface to deploy smart contracts on the Base Sepolia testnet and mint corresponding NFT badges.',
  url: window.location.host,
  icons: ['https://avatars.githubusercontent.com/u/37784886'], // Example icon
};

// Fix: Renamed `defaultEthersConfig` to `defaultConfig` to match the import change.
const ethersConfig = defaultConfig({
  metadata,
});

createWeb3Modal({
  ethersConfig,
  chains: [baseSepolia],
  projectId,
  defaultChain: baseSepolia,
  enableAnalytics: false, // Optional - defaults to your Cloud configuration
  themeMode: 'dark',
});
