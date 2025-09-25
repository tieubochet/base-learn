
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { baseSepolia } from 'wagmi/chains';

// 1. Get projectId from https://cloud.walletconnect.com
// This is a placeholder and WILL NOT WORK. You must replace it.
const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID';
if (projectId === 'YOUR_WALLETCONNECT_PROJECT_ID') {
    console.error('ERROR: You need to replace YOUR_WALLETCONNECT_PROJECT_ID with your own WalletConnect project ID in config/web3.ts');
}


// 2. Create wagmiConfig
const metadata = {
  name: 'Base Contract Deployer',
  description: 'Deploy a contract to Base Sepolia',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [baseSepolia] as const;
export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });
