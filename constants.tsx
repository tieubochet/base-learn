import type { Contract } from './types';
import { ContractStatus } from './types';

export const CONTRACTS: Contract[] = [
  { name: 'BasicMath', status: ContractStatus.ReadyToDeploy, mintable: true },
  { name: 'ControlStructures', status: ContractStatus.ReadyToDeploy, mintable: true },
  { name: 'EmployeeStorage', status: ContractStatus.ReadyToDeploy, mintable: true },
  { name: 'ArraysExercise', status: ContractStatus.ReadyToDeploy, mintable: true },
  { name: 'FavoriteRecords', status: ContractStatus.ReadyToDeploy, mintable: true },
  { name: 'GarageManager', status: ContractStatus.ReadyToDeploy, mintable: true },
  { name: 'Salesperson', status: ContractStatus.ReadyToDeploy, mintable: false },
  { name: 'EngineeringManager', status: ContractStatus.ReadyToDeploy, mintable: false },
  { name: 'InheritanceSubmission', status: ContractStatus.ReadyToDeploy, dependencies: ['Salesperson', 'EngineeringManager'], mintable: true },
  { name: 'ImportsExercise', status: ContractStatus.ReadyToDeploy, mintable: true },
  { name: 'ErrorTriageExercise', status: ContractStatus.ReadyToDeploy, mintable: true },
  { name: 'AddressBookFactory', status: ContractStatus.ReadyToDeploy, mintable: true },
  { name: 'UnburnableToken', status: ContractStatus.ReadyToDeploy, mintable: true },
  { name: 'WeightedVoting', status: ContractStatus.ReadyToDeploy, mintable: true },
  { name: 'HaikuNFT', status: ContractStatus.ReadyToDeploy, mintable: true },
];

export const FaucetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 00-1.414-1.414L13 11.586V7a1 1 0 10-2 0v4.586l-1.293-1.293z" clipRule="evenodd" />
    <path d="M10 3a1 1 0 011 1v.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 4.586V4a1 1 0 011-1z" />
  </svg>
);

export const FollowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 11a3 3 0 100-6 3 3 0 000 6zM16 13a5 5 0 015 5h-1.5a3.5 3.5 0 00-3.5-3.5V13z" />
    </svg>
);

export const SourceCodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 01-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

export const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
    <path d="M5.5 13.5a.5.5 0 01.5-.5H8v.5a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5z" />
  </svg>
);

export const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

export const BadgeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v12H5V4zm5 2a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1zm-3 5a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);

export const LightningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
);

export const WarningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 2.98-1.742 2.98H4.42c-1.532 0-2.492-1.646-1.742-2.98l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
);

export const NoBadgeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
);
