import React from 'react';
import type { Contract } from '../types';
import { RocketIcon, BadgeIcon, LightningIcon, WarningIcon, NoBadgeIcon } from '../constants';

interface ContractCardProps {
    contract: Contract;
}

export const ContractCard: React.FC<ContractCardProps> = ({ contract }) => {
    return (
        <div className="bg-[#0D112B] bg-opacity-50 border border-blue-900/50 rounded-2xl p-6 shadow-2xl shadow-blue-500/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">{contract.name}</h2>
            
            <div className="flex items-center text-sm text-gray-300 mb-4">
                <LightningIcon />
                <span>{contract.status}</span>
            </div>

            {contract.dependencies && contract.dependencies.length > 0 && (
                <div className="flex items-center text-sm text-yellow-400 bg-yellow-900/30 border border-yellow-700/50 rounded-md p-2 mb-4">
                    <WarningIcon />
                    <span>Please deploy {contract.dependencies.join(' & ')} first</span>
                </div>
            )}

            <div className="flex items-center space-x-4 mt-6">
                <button className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                    <RocketIcon />
                    Deploy
                </button>
                {contract.mintable ? (
                    <button className="flex-1 bg-black bg-opacity-40 text-gray-300 font-semibold py-3 px-6 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300 flex items-center justify-center">
                        <BadgeIcon />
                        Mint Badge
                    </button>
                ) : (
                    <div className="flex-1 bg-black bg-opacity-20 text-gray-500 font-semibold py-3 px-6 border border-gray-800 rounded-lg flex items-center justify-center cursor-not-allowed">
                        <NoBadgeIcon />
                        No need to mint badge
                    </div>
                )}
            </div>
        </div>
    );
};
