
export enum BadgeStatus {
  MINTABLE,
  NOT_NEEDED,
  MINTED,
}

export interface Contract {
  id: string;
  name: string;
  dependencies?: string[];
  badgeStatus: BadgeStatus;
}
