import React from 'react';
import Header from './components/Header';
import ContractCard from './components/ContractCard';
import { contracts } from './constants';
import { useWeb3Modal, useWeb3ModalAccount } from 'https://esm.sh/@web3modal/ethers5@3.5.1/react?deps=react@18.2.0,react-dom@18.2.0';

const App: React.FC = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();

  const handleCheckNFTs = () => {
    if (!isConnected) {
      open();
      return;
    }
    // Placeholder for actual logic
    alert('Wallet is connected. Checking for your NFTs...');
  };

  return (
    <div className="min-h-screen text-white font-sans">
      <div className="container mx-auto px-4">
        <Header />
        <main className="py-8">
          <div className="flex flex-col items-center mb-10">
            <button 
              onClick={handleCheckNFTs}
              className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-teal-400 text-white rounded-xl px-20 py-4 mb-4 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(45,212,191,0.5)]">
              Check My NFTs
            </button>
            <div className="text-center text-gray-400">
              <p className="text-lg">
                <span role="img" aria-label="star-struck emoji">🤯</span> Base Learn Role on Guild.xyz <span role="img" aria-label="star-struck emoji">🤯</span>
              </p>
              <p className="text-sm">(It may take up to 1 day for your Guild role to update!)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contracts.map(contract => (
              <ContractCard key={contract.id} contract={contract} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;