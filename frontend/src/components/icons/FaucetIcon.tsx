
import React from 'react';

export const FaucetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M12 12h.01"></path>
        <path d="M15.28 17.28a4 4 0 0 0-5.6 2.75"></path>
        <path d="M12 8a4 4 0 0 0-3.2 1.28"></path>
        <path d="M17.28 15.28a4 4 0 0 0 2.75-5.6"></path>
        <path d="M8 12a4 4 0 0 0 1.28 3.2"></path>
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path>
        <path d="m4.2 10.2 3.1 3.1"></path>
        <path d="M16.7 16.7l3.1 3.1"></path>
    </svg>
);