import React from 'react';
import { FaucetIcon, FollowIcon, SourceCodeIcon, WalletIcon } from '../constants';

const NavButton: React.FC<{ children: React.ReactNode; }> = ({ children }) => (
    <button className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 font-semibold py-2 px-4 border border-blue-500/30 rounded-lg flex items-center justify-center transition-colors duration-300">
        {children}
    </button>
);


export const Header: React.FC = () => {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <h1 className="text-4xl font-black text-white tracking-tight">
                Base Sepolia Contract Deployer
            </h1>
            <nav className="flex items-center space-x-2 sm:space-x-3">
                <NavButton>
                    <FaucetIcon />
                    Faucet
                </NavButton>
                <NavButton>
                    <FollowIcon />
                    Follow Me
                </NavButton>
                <NavButton>
                    <SourceCodeIcon />
                    Source Code
                </NavButton>
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center">
                    <WalletIcon />
                    Connect Wallet
                </button>
            </nav>
        </header>
    );
};
