import React from 'react';
import { Header } from './components/Header';
import { ContractCard } from './components/ContractCard';
import { CONTRACTS } from './constants';
import type { Contract } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#010419] to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <main className="mt-12 flex flex-col items-center">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-12 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
            Check My NFTs
          </button>
          <div className="text-center mt-6">
            <p className="text-gray-300">
              <span role="img" aria-label="waving hand">🧐</span>{' '}
              <a href="#" className="font-semibold text-blue-400 hover:underline">
                Base Learn Role on Guild.xyz
              </a>{' '}
              <span role="img" aria-label="waving hand">🧐</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              (It may take up to 1 day for your Guild role to update!)
            </p>
          </div>

          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {CONTRACTS.map((contract: Contract) => (
              <ContractCard key={contract.name} contract={contract} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
