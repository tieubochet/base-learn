import React, { useState } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { readContract } from 'wagmi/actions';
import { useAccount } from 'wagmi';

import { wagmiConfig } from './config/web3';
import { CONTRACTS } from './constants/contract';
import { ERC721_BADGE_ABI } from './constants/abi';

import Header from './components/Header';
import ContractGrid from './components/ContractGrid';
import NftModal from './components/NftModal';

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

// NFT metadata structure
interface NftMetadata {
  name: string;
  description: string;
  image: string;
  contractName: string;
}

const MainContent: React.FC = () => {
  const { address, isConnected } = useAccount();
  const [isNftModalOpen, setIsNftModalOpen] = useState(false);
  const [ownedNfts, setOwnedNfts] = useState<NftMetadata[]>([]);
  const [isCheckingNfts, setIsCheckingNfts] = useState(false);

  const handleCheckNfts = async () => {
    if (!isConnected || !address) {
      alert("Please connect your wallet first.");
      return;
    }

    setIsCheckingNfts(true);
    setOwnedNfts([]);
    setIsNftModalOpen(true);

    try {
      const allNfts: NftMetadata[] = [];
      const contractsWithBadges = CONTRACTS.filter(c => c.hasBadge && c.badgeContractAddress);

      for (const contract of contractsWithBadges) {
        if (!contract.badgeContractAddress) continue;
        
        const balance = await readContract(wagmiConfig, {
            abi: ERC721_BADGE_ABI,
            address: contract.badgeContractAddress,
            functionName: 'balanceOf',
            args: [address],
        });

        if (Number(balance) > 0) {
            const tokenIdsPromises = [];
            for (let i = 0; i < Number(balance); i++) {
                tokenIdsPromises.push(readContract(wagmiConfig, {
                    abi: ERC721_BADGE_ABI,
                    address: contract.badgeContractAddress,
                    functionName: 'tokenOfOwnerByIndex',
                    args: [address, BigInt(i)],
                }));
            }
            const tokenIds = await Promise.all(tokenIdsPromises);

            const metadataPromises = tokenIds.map(async (tokenId) => {
                try {
                    const tokenURIResult = await readContract(wagmiConfig, {
                        abi: ERC721_BADGE_ABI,
                        address: contract.badgeContractAddress!,
                        functionName: 'tokenURI',
                        args: [tokenId],
                    });
                    
                    const tokenURI = tokenURIResult as string;

                    if (tokenURI) {
                        const metadataUrl = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');
                        const response = await fetch(metadataUrl);
                        if (response.ok) {
                            const metadata = await response.json();
                            return {
                                ...metadata,
                                image: metadata.image?.replace('ipfs://', 'https://ipfs.io/ipfs/'),
                                contractName: contract.name,
                            };
                        }
                    }
                } catch (e) {
                    console.error(`Failed to fetch metadata for token ${tokenId} from ${contract.name}`, e);
                }
                return null;
            });

            const metadatas = (await Promise.all(metadataPromises)).filter((m): m is NftMetadata => m !== null);
            allNfts.push(...metadatas);
        }
      }
      setOwnedNfts(allNfts);
    } catch (e) {
        console.error("Error checking NFTs:", e);
    } finally {
        setIsCheckingNfts(false);
    }
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col items-center gap-4 mb-10">
              <button 
                onClick={handleCheckNfts}
                disabled={!isConnected}
                className="w-full md:w-auto px-8 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:scale-100"
              >
                  Check My Badges
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
      <NftModal 
        isOpen={isNftModalOpen}
        onClose={() => setIsNftModalOpen(false)}
        nfts={ownedNfts}
        isLoading={isCheckingNfts}
      />
    </>
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
