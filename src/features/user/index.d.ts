/**
 * User state interface.
 */
export interface IUserState {
  id: string,
  name: string,
  email: string,
  signed: boolean,
  role: RoleEnum | null
}

export enum RoleEnum {
  ADMIN = 'admin',
  PROVIDER = 'provider',
  CLIENT = 'client'
}