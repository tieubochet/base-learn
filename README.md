# Base Smart Contract Monorepo

A monorepo containing a user-friendly dApp to deploy a curated list of smart contracts to the Base Sepolia testnet.

## Project Structure

This project is structured as a monorepo to separate concerns between the smart contracts and the frontend application.

-   `/contracts`: Contains the Solidity smart contracts. (Coming soon)
-   `/frontend`: Contains the React-based frontend application.
-   `/deploy`: Contains deployment scripts. (Coming soon)
-   `/test`: Contains tests for the smart contracts. (Coming soon)

## Frontend Application

The frontend is a React application built with TypeScript, wagmi, and Tailwind CSS.

### How to Use

1.  **Connect Your Wallet:** Click "Connect Wallet" in the top right.
2.  **Select Network:** Ensure your wallet is on the **Base Sepolia** testnet.
3.  **Get Testnet ETH:** Use the "Faucet" link to get testnet ETH for gas fees.
4.  **Deploy a Contract:**
    -   Find the contract you want to deploy from the grid.
    -   If required, fill in the constructor arguments.
    -   Click "Deploy" and confirm the transaction in your wallet.
5.  **View on Explorer:** A success message will appear with a link to your deployed contract on the block explorer.

## Technologies Used

-   **React** & **TypeScript**
-   **wagmi** & **viem** for Ethereum blockchain interactions
-   **Web3Modal** for wallet connection
-   **Tailwind CSS** for styling
-   **Solidity** for smart contracts (Coming soon)