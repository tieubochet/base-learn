
import React from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect, useEnsName } from 'wagmi';
import { WalletIcon } from './icons/WalletIcon';
import { truncateAddress } from '../utils/helpers';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 md:px-8 border-b border-slate-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
            <svg width="32" height="32" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#0052FF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0zm0 896c-212.064 0-384-171.936-384-384s171.936-384 384-384 384 171.936 384 384-171.936 384-384 384z"></path></g></svg>
            <h1 className="text-xl font-bold text-white">BaseContractDeployer</h1>
        </div>
        <ConnectButton />
      </div>
    </header>
  );
};

const ConnectButton: React.FC = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  
  const displayAddress = ensName || (address ? truncateAddress(address) : '');

  return isConnected ? (
    <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-base-surface px-4 py-2 rounded-full">
            <WalletIcon className="h-5 w-5 text-base-blue" />
            <span className="font-mono text-sm">{displayAddress}</span>
        </div>
        <button
            onClick={() => disconnect()}
            className="px-4 py-2 text-sm font-semibold bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
        >
            Disconnect
        </button>
    </div>
  ) : (
    <button
      onClick={() => open()}
      className="px-6 py-2 font-semibold text-white bg-base-blue hover:bg-base-blue-dark rounded-full transition-colors"
    >
      Connect Wallet
    </button>
  );
};

export default Header;