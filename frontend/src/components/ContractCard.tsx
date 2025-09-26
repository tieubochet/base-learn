
import React, { useState, useEffect } from 'react';
import { useDeployContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { baseSepolia } from 'viem/chains';
import { ContractInfo } from '../constants/contract';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { RocketIcon } from './icons/RocketIcon';

interface ContractCardProps {
  contract: ContractInfo;
}

export const ContractCard: React.FC<ContractCardProps> = ({ contract }) => {
  const [deployedContractAddress, setDeployedContractAddress] = useState<string | null>(null);
  const [args, setArgs] = useState<Record<string, string>>({});

  const { chain } = useAccount();
  const { data: hash, error, isPending, deployContract, reset } = useDeployContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed, data: receipt } = useWaitForTransactionReceipt({
    hash,
  });
  
  useEffect(() => {
    if (receipt?.contractAddress) {
      setDeployedContractAddress(receipt.contractAddress);
    }
  }, [receipt]);

  const handleArgChange = (name: string, value: string) => {
    setArgs(prev => ({ ...prev, [name]: value }));
  };
  
  const handleDeploy = async () => {
    reset();
    setDeployedContractAddress(null);
    if (contract.bytecode === '0x0') {
        alert("This contract's ABI and bytecode have not been added yet.");
        return;
    }
    
    let finalArgs: any[] = [];
    if (contract.constructorInputs) {
        for (const input of contract.constructorInputs) {
            const value = args[input.name];
            if (!value || value.trim() === '') {
                alert(`Please provide a value for ${input.name}.`);
                return;
            }
            if (input.type === 'number') {
                try {
                    // Use BigInt for all number types to support uint256 and prevent precision issues
                    finalArgs.push(BigInt(value));
                } catch {
                    alert(`Invalid number format for ${input.name}.`);
                    return;
                }
            } else {
                finalArgs.push(value);
            }
        }
    }

    deployContract({
      abi: contract.abi,
      bytecode: contract.bytecode,
      args: finalArgs,
    });
  };
  
  const isWrongNetwork = chain?.id !== baseSepolia.id;
  // For now, dependencies are just checked by name. A real implementation might check deployment status.
  const hasUnmetDependencies = (contract.dependencies ?? []).length > 0;

  return (
    <div className="bg-base-surface p-6 rounded-lg shadow-lg border border-slate-700 flex flex-col justify-between space-y-4">
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{contract.name}</h3>
            <div className="text-sm text-base-text-secondary mb-4 space-y-1">
                <p className="flex items-center"><span className="text-yellow-400 mr-2">⚡</span> Ready to deploy</p>
                {hasUnmetDependencies && (
                    <p className="flex items-center text-amber-400"><span className="mr-2">⚠️</span> Please deploy {contract.dependencies?.join(' & ')} first</p>
                )}
            </div>
        </div>

        <div className="space-y-4">
            {contract.constructorInputs && (
                <div className="space-y-3">
                    <h4 className="text-base font-semibold text-base-text-secondary">Constructor Arguments</h4>
                    {contract.constructorInputs.map((input) => (
                        <input
                            key={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            value={args[input.name] || ''}
                            onChange={(e) => handleArgChange(input.name, e.target.value)}
                            className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-sm text-base-text placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-base-blue transition-all"
                        />
                    ))}
                </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                onClick={handleDeploy}
                disabled={isPending || isConfirming || isWrongNetwork || hasUnmetDependencies || contract.bytecode === '0x0'}
                className="w-full flex-1 bg-base-blue hover:bg-base-blue-dark disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-[0_0_10px_rgba(0,82,255,0.5)]"
                >
                {isPending || isConfirming ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>{isPending ? 'Confirm...' : 'Deploying...'}</span>
                    </>
                ) : (
                    <>
                        <RocketIcon className="h-5 w-5" />
                        <span>Deploy</span>
                    </>
                )}
                </button>
                <button
                    disabled={!contract.hasBadge}
                    className="w-full flex-1 bg-slate-900 border border-slate-700 hover:bg-slate-800 disabled:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                    {contract.hasBadge ? 'Mint Badge' : 'No badge needed'}
                </button>
            </div>
            
            <div className="mt-4 space-y-2">
                {isWrongNetwork && (
                    <StatusCard type="error">
                        Please switch to Base Sepolia network.
                    </StatusCard>
                )}
                {hash && (
                    <StatusCard type="info" link={`${baseSepolia.blockExplorers.default.url}/tx/${hash}`}>
                        Transaction submitted.
                    </StatusCard>
                )}
                {isConfirmed && deployedContractAddress && (
                    <StatusCard type="success" link={`${baseSepolia.blockExplorers.default.url}/address/${deployedContractAddress}`}>
                        Deployment successful!
                    </StatusCard>
                )}
                {error && (
                    <StatusCard type="error">
                        <p className="truncate">Failed: {error.message}</p>
                    </StatusCard>
                )}
            </div>
        </div>
    </div>
  );
};


interface StatusCardProps {
    children: React.ReactNode;
    link?: string;
    type: 'success' | 'error' | 'info';
}

const StatusCard: React.FC<StatusCardProps> = ({ children, link, type }) => {
    const baseClasses = "px-3 py-2 rounded-md break-words text-left text-sm";
    const colorClasses = {
        success: "bg-green-900/50 border border-green-500/50 text-green-300",
        error: "bg-red-900/50 border border-red-500/50 text-red-300",
        info: "bg-blue-900/50 border border-blue-500/50 text-blue-300",
    };

    return (
         <div className={`${baseClasses} ${colorClasses[type]}`}>
            <div className="flex justify-between items-center">
                <div className="flex-1 truncate">{children}</div>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center space-x-1 hover:underline ml-2">
                        <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                )}
            </div>
        </div>
    )
}