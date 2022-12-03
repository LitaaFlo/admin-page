export enum FieldEnum {
  name = 'text',
  id = 'hidden',
  isSubscription = 'boolean',
  role = 'enum',
  level = 'text',
  gold = 'text'
}


export type UserType = {
  name: string;
  isSubscription: boolean;
  role: string;
  id: number;
  level: number;
  gold: number;
}