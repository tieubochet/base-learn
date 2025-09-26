import { createWeb3Modal, defaultConfig } from 'https://esm.sh/@web3modal/ethers5@3.5.1/react?deps=react@18.2.0,react-dom@18.2.0';

export function initializeWeb3Modal(projectId: string) {
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
}