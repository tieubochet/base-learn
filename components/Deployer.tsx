import React, { useState, useEffect } from 'react';
// FIX: Replaced `useWriteContract` with `useDeployContract` for contract deployment, as it's the correct hook for this action.
import { useDeployContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { CONTRACT_ABI, CONTRACT_BYTECODE } from '../constants/contract';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { baseSepolia } from 'wagmi/chains';

const Deployer: React.FC = () => {
  const [greeting, setGreeting] = useState<string>('Hello, Base!');
  const [deployedContractAddress, setDeployedContractAddress] = useState<string | null>(null);

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

  const handleDeploy = async () => {
    reset();
    setDeployedContractAddress(null);
    if (!greeting) {
      alert("Please enter a greeting message.");
      return;
    }
    deployContract({
      abi: CONTRACT_ABI,
      bytecode: CONTRACT_BYTECODE,
      args: [greeting],
    });
  };
  
  const isWrongNetwork = chain?.id !== baseSepolia.id;
  
  if (isWrongNetwork) {
      return (
        <div className="w-full max-w-2xl bg-base-surface p-8 rounded-lg shadow-2xl border border-red-500/50">
             <h2 className="text-2xl font-semibold mb-4 text-red-400">Wrong Network</h2>
             <p className="text-base-text-secondary">
                 Your wallet is not connected to the Base Sepolia testnet. Please switch networks in your wallet to proceed.
             </p>
        </div>
      )
  }

  return (
    <div className="w-full max-w-2xl bg-base-surface p-8 rounded-lg shadow-2xl border border-slate-700">
      <div className="space-y-6">
        <div>
          <label htmlFor="greeting" className="block text-sm font-medium text-base-text-secondary mb-2 text-left">
            Initial Greeting Message
          </label>
          <input
            id="greeting"
            type="text"
            value={greeting}
            onChange={(e) => setGreeting(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:ring-2 focus:ring-base-blue focus:outline-none transition"
            placeholder="Enter your greeting..."
          />
        </div>

        <button
          onClick={handleDeploy}
          disabled={isPending || isConfirming}
          className="w-full bg-base-blue hover:bg-base-blue-dark disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          {isPending || isConfirming ? (
            <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{isPending ? 'Awaiting Confirmation...' : 'Deploying...'}</span>
            </>
          ) : (
            <span>Deploy Greeter Contract</span>
          )}
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {hash && (
          <StatusCard title="Transaction Submitted" link={`${baseSepolia.blockExplorers.default.url}/tx/${hash}`}>
            Your deployment transaction has been sent.
          </StatusCard>
        )}
        {isConfirming && (
          <StatusCard title="Confirming Transaction">
            Waiting for the transaction to be included in a block. This may take a moment.
          </StatusCard>
        )}
        {isConfirmed && deployedContractAddress && (
          <StatusCard title="Deployment Successful!" link={`${baseSepolia.blockExplorers.default.url}/address/${deployedContractAddress}`} success>
            Your Greeter contract is live on Base Sepolia.
          </StatusCard>
        )}
        {error && (
            <div className="bg-red-900/50 border border-red-500/50 text-red-300 px-4 py-3 rounded-md break-words">
                <h3 className="font-bold">Deployment Failed</h3>
                <p className="text-sm">{error.message}</p>
            </div>
        )}
      </div>

       <div className="mt-8 text-sm text-base-text-secondary text-left p-4 bg-slate-800/50 rounded-lg">
            <h4 className="font-bold text-base-text mb-2">Instructions:</h4>
            <ul className="list-disc list-inside space-y-1">
                <li>Make sure you have Base Sepolia testnet ETH. You can get some from a <a href="https://www.base.org/faucet" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Base Faucet</a>.</li>
                <li>Enter a greeting message for your contract.</li>
                <li>Click "Deploy" and approve the transaction in your wallet.</li>
            </ul>
        </div>
    </div>
  );
};


interface StatusCardProps {
    title: string;
    children: React.ReactNode;
    link?: string;
    success?: boolean;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, children, link, success = false }) => {
    const baseClasses = "px-4 py-3 rounded-md break-words text-left";
    const colorClasses = success 
        ? "bg-green-900/50 border border-green-500/50 text-green-300"
        : "bg-blue-900/50 border border-blue-500/50 text-blue-300";

    return (
         <div className={`${baseClasses} ${colorClasses}`}>
            <div className="flex justify-between items-center">
                <h3 className="font-bold">{title}</h3>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline">
                        <span>View on Explorer</span>
                        <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                )}
            </div>
            <p className="text-sm mt-1">{children}</p>
        </div>
    )
}

export default Deployer;