# Base Contract Deployer

A simple web application to connect a wallet and deploy a standard 'Greeter' smart contract to the Base Sepolia testnet.

This project serves as a straightforward example of a decentralized application (dApp) built with modern frontend tools.

## How to Use

1.  **Connect Your Wallet:** Click the "Connect Wallet" button in the top right corner.
2.  **Switch Network:** Make sure your wallet is set to the **Base Sepolia** testnet. The app will show a warning if you're on a different network.
3.  **Get Testnet ETH:** You need testnet ETH to pay for transaction fees. You can get some from a [Base Faucet](https://www.base.org/faucet).
4.  **Enter Greeting:** Type an initial greeting message for your contract (e.g., "Hello, World!").
5.  **Deploy Contract:** Click the "Deploy" button and approve the transaction in your wallet.
6.  **View on Explorer:** Once deployed, you'll see a success message with a link to view your new contract on the Base Sepolia block explorer.

## Technologies Used

-   **React** & **TypeScript**
-   **wagmi** & **viem** for Ethereum blockchain interactions
-   **Web3Modal** for easy wallet connection
-   **Tailwind CSS** for styling
