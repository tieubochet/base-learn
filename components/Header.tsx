
import React from 'react';
import { FaucetIcon, FollowIcon, SourceCodeIcon, WalletIcon } from '../constants';

const Header: React.FC = () => {
    
    const navButtons = [
        { text: 'Faucet', icon: <FaucetIcon /> },
        { text: 'Follow Me', icon: <FollowIcon /> },
        { text: 'Source Code', icon: <SourceCodeIcon /> },
        { text: 'Connect Wallet', icon: <WalletIcon /> }
    ];

    return (
        <header className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-0">
            <h1 className="text-4xl font-bold text-white mb-4 md:mb-0">
                Base Sepolia Contract Deployer
            </h1>
            <nav className="flex items-center space-x-2">
                {navButtons.map((button) => (
                    <button key={button.text} className="flex items-center justify-center text-sm font-medium text-white bg-blue-500/80 hover:bg-blue-600/80 rounded-lg px-4 py-2 transition-all duration-200 shadow-[0_0_10px_rgba(77,189,255,0.4)]">
                        {button.icon}
                        {button.text}
                    </button>
                ))}
            </nav>
        </header>
    );
};

export default Header;
