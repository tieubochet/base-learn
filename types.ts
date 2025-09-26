export enum ContractStatus {
  ReadyToDeploy = 'Ready to deploy',
  Deployed = 'Deployed',
}

export interface Contract {
  name: string;
  status: ContractStatus;
  dependencies?: string[];
  mintable: boolean;
}
