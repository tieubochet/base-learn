import { Abi } from 'viem';

export const CONTRACT_ABI: Abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_b",
				"type": "uint256"
			}
		],
		"name": "adder",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "sum",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "error",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_b",
				"type": "uint256"
			}
		],
		"name": "subtractor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "difference",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "error",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
];

export const CONTRACT_BYTECODE = '0x608060405234801561001057600080fd5b506101c5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063866636c01461003b578063f2b3b8e41461008d575b600080fd5b61008b60048036038101906100869190610122565b6100df565b005b61008b60048036038101906100d8919061016d565b6040516001600160a01b03815260200180516001600160a01b03166001600160a01b03168152602001905080825260208201905092915050565b600080604083850312156100fa57600080fd5b8235919050565b60008160001a610118576001600160a01b0316fd5b9081019050610103565b60006020828403121561013457600080fd5b5035919050565b600080600080600060a01b03841661015657600080fd5b828101905061014e565b919050565b60006020828403121561017f57600080fd5b5035919050565b6000816001600160a01b031661019d57600080fd5b81019050610195565b91905056fea2646970667358221220a20e7d7c66922b9f36f98725893d50821df2220455c1b6a7a00f13031061aa9a64736f6c63430008110033' as `0x${string}`;