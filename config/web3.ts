
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { baseSepolia } from 'wagmi/chains';

// 1. Get projectId from https://cloud.walletconnect.com
// This example uses a public projectId from the Web3Modal documentation.
// For production, it is recommended to get your own projectId at https://cloud.walletconnect.com
const projectId = '1e88029c31b53f025062c2f7339b13d5';

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
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId });
