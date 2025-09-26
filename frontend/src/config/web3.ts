
// FIX: Manually define types for import.meta.env to resolve TypeScript errors since the vite/client types were not being found.
declare global {
    interface ImportMeta {
        readonly env: {
            readonly VITE_WALLETCONNECT_PROJECT_ID: string;
        }
    }
}

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
// FIX: Module '"wagmi/chains"' has no exported member 'baseSepolia'. Import from 'viem/chains' instead.
import { baseSepolia } from 'viem/chains';

// 1. Get projectId from https://cloud.walletconnect.com
// This is read from an environment variable to ensure security and flexibility for deployment.
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;
if (!projectId) {
    throw new Error("VITE_WALLETCONNECT_PROJECT_ID is not set. Please add it to your .env file for local development, or to your Vercel project's environment variables.");
}


// 2. Create wagmiConfig
const metadata = {
  name: 'Base Sepolia Contract Deployer',
  description: 'Deploy various smart contracts to Base Sepolia',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [baseSepolia] as const;
export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  // FIX: Removed `enableAnalytics` as it is not a valid property for `defaultWagmiConfig`.
  // enableAnalytics: true // Optional - defaults to your Cloud configuration
});

// 3. Create modal
// FIX: Removed `chains` as it is not a valid property for `createWeb3Modal` when `wagmiConfig` is provided. The chains are already included in wagmiConfig.
createWeb3Modal({ wagmiConfig, projectId });