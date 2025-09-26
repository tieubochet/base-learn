
import React from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { wagmiConfig } from './config/web3';
import Header from './components/Header';
import Deployer from './components/Deployer';
import { useAccount } from 'wagmi';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-base-background font-sans">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <MainContent />
          </main>
          <Footer />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

const MainContent: React.FC = () => {
  const { isConnected } = useAccount();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Deploy a BasicMath Contract on Base
      </h1>
      <p className="text-base-text-secondary mb-8 max-w-2xl">
        Connect your wallet to the Base Sepolia testnet and deploy your own 'BasicMath' smart contract with a single click. This contract provides safe addition and subtraction functions.
      </p>

      {isConnected ? (
        <Deployer />
      ) : (
        <div className="bg-base-surface p-8 rounded-lg shadow-2xl mt-4">
          <h2 className="text-2xl font-semibold mb-4 text-white">Connect Your Wallet to Get Started</h2>
          <p className="text-base-text-secondary">Please connect your wallet to interact with the application.</p>
        </div>
      )}
    </div>
  );
};


const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 mt-12 border-t border-slate-700">
      <p className="text-base-text-secondary">
        Built with ❤️ for the Base ecosystem.
      </p>
    </footer>
  );
}

export default App;