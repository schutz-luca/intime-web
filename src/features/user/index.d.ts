/**
 * User state interface.
 */
export interface IUserState {
  id: string,
  name: string,
  email: string,
  signed: boolean,
  role: TRole | null
}

type TRole = 'admin' | 'provider' | 'client'