import React from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { wagmiConfig } from './config/web3';
import Header from './components/Header';
import ContractGrid from './components/ContractGrid';
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
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center gap-4 mb-10">
            <button className="w-full md:w-auto px-8 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Check My NFTs
            </button>
            <a href="#" className="text-base-text-secondary hover:text-white transition-colors">
                <p>🤔 <span className="font-bold">Base Learn Role on Guild.xyz</span> 🤔</p>
                <p className="text-sm">(It may take up to 1 day for your Guild role to update!)</p>
            </a>
        </div>

        {isConnected ? (
          <ContractGrid />
        ) : (
          <div className="bg-base-surface p-8 rounded-lg shadow-2xl mt-4 border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Connect Your Wallet to Get Started</h2>
            <p className="text-base-text-secondary">Please connect your wallet to deploy contracts.</p>
          </div>
        )}
      </div>
    </div>
  );
};


const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 mt-12 border-t border-slate-800">
      <p className="text-base-text-secondary">
        Built with ❤️ for the Base ecosystem.
      </p>
    </footer>
  );
}

export default App;