// Fix: Add type declarations for process.env to resolve TypeScript error in a browser-like environment
// where environment variables are injected into process.env.
declare var process: {
  env: {
    VITE_WALLETCONNECT_PROJECT_ID?: string;
  }
};

// The WalletConnect Project ID is loaded from the VITE_WALLETCONNECT_PROJECT_ID environment variable.
// This environment uses process.env instead of import.meta.env.
export const projectId = process.env.VITE_WALLETCONNECT_PROJECT_ID || '';
