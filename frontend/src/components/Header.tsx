
import React from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect, useEnsName } from 'wagmi';
import { WalletIcon } from './icons/WalletIcon';
import { truncateAddress } from '../utils/helpers';
import { FaucetIcon } from './icons/FaucetIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { GithubIcon } from './icons/GithubIcon';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-white whitespace-nowrap">Base Sepolia Contract Deployer</h1>
        <div className="flex items-center space-x-2 md:space-x-4">
            <HeaderButton href="https://www.base.org/faucet" icon={<FaucetIcon />} text="Faucet" />
            <HeaderButton href="#" icon={<TwitterIcon />} text="Follow Me" />
            <HeaderButton href="#" icon={<GithubIcon />} text="Source Code" />
            <ConnectButton />
        </div>
      </div>
    </header>
  );
};

interface HeaderButtonProps {
    href: string;
    icon: React.ReactNode;
    text: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ href, icon, text }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hidden md:flex items-center space-x-2 px-4 py-2 font-semibold text-white bg-base-surface hover:bg-slate-800 rounded-full transition-colors border border-slate-700"
    >
        {icon}
        <span>{text}</span>
    </a>
)

const ConnectButton: React.FC = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  
  const displayAddress = ensName || (address ? truncateAddress(address) : '');

  return isConnected ? (
    <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2 bg-base-surface px-4 py-2 rounded-full border border-slate-700">
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
      className="px-6 py-2 font-semibold text-white bg-base-blue hover:bg-base-blue-dark rounded-full transition-colors shadow-[0_0_10px_rgba(0,82,255,0.5)]"
    >
      Connect Wallet
    </button>
  );
};

export default Header;