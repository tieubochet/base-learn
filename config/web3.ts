
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { baseSepolia } from 'wagmi/chains';

// 1. Get projectId from https://cloud.walletconnect.com
// This example uses a public projectId from the Web3Modal documentation.
// This is read from an environment variable to ensure security and flexibility for deployment.
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID as string;
if (!projectId) {
    throw new Error("VITE_WALLETCONNECT_PROJECT_ID is not set. Please add it to your .env file for local development, or to your Vercel project's environment variables.");
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
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId });
