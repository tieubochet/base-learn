
import { Contract, BadgeStatus } from './types';

export const contracts: Contract[] = [
  { id: 'basicMath', name: 'BasicMath', badgeStatus: BadgeStatus.MINTABLE },
  { id: 'controlStructures', name: 'ControlStructures', badgeStatus: BadgeStatus.MINTABLE },
  { id: 'employeeStorage', name: 'EmployeeStorage', badgeStatus: BadgeStatus.MINTABLE },
  { id: 'arraysExercise', name: 'ArraysExercise', badgeStatus: BadgeStatus.MINTABLE },
  { id: 'favoriteRecords', name: 'FavoriteRecords', badgeStatus: BadgeStatus.MINTABLE },
  { id: 'garageManager', name: 'GarageManager', badgeStatus: BadgeStatus.MINTABLE },
  { id: 'salesperson', name: 'Salesperson', badgeStatus: BadgeStatus.NOT_NEEDED },
  { id: 'engineeringManager', name: 'EngineeringManager', badgeStatus: BadgeStatus.NOT_NEEDED },
  { 
    id: 'inheritanceSubmission', 
    name: 'InheritanceSubmission', 
    dependencies: ['Salesperson', 'EngineeringManager'], 
    badgeStatus: BadgeStatus.MINTABLE 
  },
  { id: 'importsExercise', name: 'ImportsExercise', badgeStatus: BadgeStatus.MINTABLE },
  { id: 'errorTriageExercise', name: 'ErrorTriageExercise', badgeStatus: BadgeStatus.MINTABLE },
  { id: 'addressBookFactory', name: 'AddressBookFactory', badgeStatus: BadgeStatus.MINTABLE },
  { id: 'unburnableToken', name: 'UnburnableToken', badgeStatus: BadgeStatus.MINTABLE },
  { id: 'weightedVoting', name: 'WeightedVoting', badgeStatus: BadgeStatus.MINTABLE },
  { id: 'haikuNFT', name: 'HaikuNFT', badgeStatus: BadgeStatus.MINTABLE },
];

export const FaucetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

export const FollowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6.41L8.41 10.82l-2.82 2.83L1 9.24V15h2V9.9l3.41 3.41 4.24-4.24L18.49 17H15v2h6V13h-2v2.59L12.12 7.71l-4.24 4.24L4 8.1V6.41z"/>
    </svg>
);

export const SourceCodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

export const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

export const LightningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
);

export const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    </svg>
);

export const BadgeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 opacity-70" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 16a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
);

export const WarningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.636-1.026 2.242-1.026 2.878 0l6.39 10.322c.636 1.026-.16 2.33-1.439 2.33H3.306c-1.28 0-2.075-1.304-1.439-2.33l6.39-10.322zM10 14a1 1 0 100-2 1 1 0 000 2zm-1-4a1 1 0 112 0v2a1 1 0 11-2 0v-2z" clipRule="evenodd" />
    </svg>
);

export const NoBadgeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
);
