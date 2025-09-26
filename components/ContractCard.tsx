import React from 'react';
import { useWeb3Modal, useWeb3ModalAccount } from 'https://esm.sh/@web3modal/ethers5@3.5.1/react?deps=react@18.2.0,react-dom@18.2.0';
import { Contract, BadgeStatus } from '../types';
import { LightningIcon, RocketIcon, BadgeIcon, WarningIcon, NoBadgeIcon } from '../constants';

interface ContractCardProps {
    contract: Contract;
}

const ContractCard: React.FC<ContractCardProps> = ({ contract }) => {
    const { open } = useWeb3Modal();
    const { isConnected } = useWeb3ModalAccount();

    const handleAction = (action: () => void) => {
        if (!isConnected) {
            open();
            return;
        }
        action();
    };

    const deployContract = () => {
        alert(`Deploying ${contract.name}...`);
        // Deploy logic here
    };

    const mintBadge = () => {
        alert(`Minting badge for ${contract.name}...`);
        // Mint logic here
    };
    
    const getBadgeButton = () => {
        switch (contract.badgeStatus) {
            case BadgeStatus.MINTABLE:
                return (
                    <button onClick={() => handleAction(mintBadge)} className="flex-1 flex items-center justify-center text-sm font-medium bg-black text-white rounded-lg px-5 py-3 transition-all duration-200 hover:bg-gray-800">
                        <BadgeIcon />
                        Mint Badge
                    </button>
                );
            case BadgeStatus.NOT_NEEDED:
                return (
                    <div className="flex-1 flex items-center justify-center text-sm font-medium bg-gray-900/50 text-gray-400 rounded-lg px-5 py-3 cursor-not-allowed">
                        <NoBadgeIcon />
                        No need to mint badge
                    </div>
                );
            case BadgeStatus.MINTED:
                 return (
                    <button disabled className="flex-1 flex items-center justify-center text-sm font-medium bg-green-500/20 text-green-400 rounded-lg px-5 py-3 cursor-not-allowed">
                        <BadgeIcon />
                        Badge Minted
                    </button>
                );
            default:
                return null;
        }
    };
    
    return (
        <div className="bg-[#111827]/60 border border-blue-500/30 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">{contract.name}</h3>
                <div className="flex items-center text-gray-300 text-sm mb-2">
                    <LightningIcon />
                    <span>Ready to deploy</span>
                </div>
                {contract.dependencies && contract.dependencies.length > 0 && (
                     <div className="flex items-center text-yellow-400 text-xs mt-2 mb-4 p-2 bg-yellow-400/10 rounded-md">
                        <WarningIcon />
                        <span>Please deploy {contract.dependencies.join(' & ')} first</span>
                    </div>
                )}
            </div>
            <div className="mt-6 flex items-center space-x-3">
                <button onClick={() => handleAction(deployContract)} className="flex-1 flex items-center justify-center text-sm font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg px-5 py-3 transition-all duration-200 hover:scale-105 shadow-[0_0_15px_rgba(77,189,255,0.4)]">
                    <RocketIcon />
                    Deploy
                </button>
                {getBadgeButton()}
            </div>
        </div>
    );
};

export default ContractCard;