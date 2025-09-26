// Add type declarations for import.meta.env for TypeScript
// This is typically in a vite-env.d.ts file, but added here for simplicity.
// FIX: To augment global types from within a module, declarations must be wrapped in `declare global`. This resolves the error "Property 'env' does not exist on type 'ImportMeta'".
declare global {
  interface ImportMetaEnv {
    readonly VITE_WALLETCONNECT_PROJECT_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

// The WalletConnect Project ID is loaded from the VITE_WALLETCONNECT_PROJECT_ID environment variable.
// For Vercel deployments, ensure your project is configured with the "Vite" framework preset.
// This allows Vercel's build process to correctly substitute the environment variable.
export const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '';