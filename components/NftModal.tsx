import React from 'react';

// Define NFT metadata structure
interface NftMetadata {
  name: string;
  description: string;
  image: string;
  contractName: string;
}

interface NftModalProps {
  isOpen: boolean;
  onClose: () => void;
  nfts: NftMetadata[];
  isLoading: boolean;
}

const NftModal: React.FC<NftModalProps> = ({ isOpen, onClose, nfts, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300" 
      aria-modal="true" 
      role="dialog"
      onClick={onClose}
    >
      <div 
        className="bg-base-surface rounded-xl shadow-2xl w-full max-w-4xl max-h-[80vh] flex flex-col border border-slate-700 transform transition-transform duration-300 scale-95"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)', transition: 'transform 0.2s ease-out' }}
      >
        <div className="flex justify-between items-center p-4 border-b border-slate-700 flex-shrink-0">
          <h2 className="text-xl font-bold text-white">My Badges</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors text-3xl leading-none font-bold outline-none focus:outline-none">&times;</button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <svg className="animate-spin h-10 w-10 text-base-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="sr-only">Loading badges...</span>
            </div>
          ) : nfts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {nfts.map((nft, index) => (
                <div key={index} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-600 group transition-all duration-300 hover:shadow-lg hover:border-base-blue">
                  <div className="aspect-square w-full overflow-hidden">
                    <img src={nft.image} alt={nft.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-white text-sm truncate">{nft.name}</h3>
                    <p className="text-xs text-base-text-secondary truncate">From: {nft.contractName}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center h-64 flex flex-col justify-center items-center">
              <p className="text-lg text-base-text-secondary">No badges found.</p>
              <p className="text-sm text-slate-500 mt-2">Deploy contracts to mint commemorative badges!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NftModal;
