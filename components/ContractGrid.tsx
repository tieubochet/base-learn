import React from 'react';
import { CONTRACTS } from '../constants/contract';
import { ContractCard } from './ContractCard';

const ContractGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {CONTRACTS.map((contract) => (
        <ContractCard key={contract.name} contract={contract} />
      ))}
    </div>
  );
};

export default ContractGrid;
