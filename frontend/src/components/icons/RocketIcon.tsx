
import React from 'react';

export const RocketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.64-1.21 2.2-1.76 3.45-1.55l.66 2.07 1.8-1.8-2.07-.66c.2-.25.4-.5.6-.75.25-.3.5-.6.75-.95.25-.35.5-.7.75-1.05.25-.35.5-.7.7-1.05.2-.35.4-.7.55-1.05.1-.35.2-.7.25-1.05.1-.35.15-.7.15-1.05s0-.7-.05-1.05c0-.35-.05-.7-.1-1.05s-.1-.7-.15-1.05c-.1-.35-.15-.7-.2-1.05-.1-.35-.2-.7-.3-1.05s-.2-.7-.3-1.05c-.15-.35-.3-.7-.45-1.05l-1.8 1.8.66 2.07c-1.21.2-1.76 1.75-1.55 3.45-.81-.65-2.27-.66-3.11.05z"></path>
        <path d="m12 15 6-6"></path>
    </svg>
);