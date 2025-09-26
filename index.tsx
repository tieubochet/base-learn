import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { projectId } from './config';
import { initializeWeb3Modal } from './web3';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

const MissingProjectIdMessage = () => (
  <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col items-center justify-center font-sans p-4">
    <div className="bg-[#111827] border border-red-500/50 rounded-2xl p-8 max-w-lg text-center shadow-lg">
      <h1 className="text-3xl font-bold text-red-400 mb-4">Configuration Needed</h1>
      <p className="text-gray-300 mb-6">
        Your WalletConnect Project ID has not been set. Please open the <code className="bg-gray-700 text-yellow-300 rounded px-2 py-1 text-sm">config.ts</code> file and add your Project ID.
      </p>
      <p className="text-gray-400 text-sm">
        You can get a Project ID from the <a href="https://cloud.walletconnect.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">WalletConnect Cloud</a> dashboard.
      </p>
    </div>
  </div>
);


if (!projectId) {
  root.render(
    <React.StrictMode>
      <MissingProjectIdMessage />
    </React.StrictMode>
  );
} else {
  initializeWeb3Modal(projectId);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
