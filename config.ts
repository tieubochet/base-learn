// Fix: Add type declarations for import.meta.env to resolve TypeScript error.
declare global {
  interface ImportMeta {
    readonly env: {
      readonly VITE_WALLETCONNECT_PROJECT_ID: string;
    }
  }
}

// The WalletConnect Project ID is loaded from the VITE_WALLETCONNECT_PROJECT_ID environment variable.
export const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '';
