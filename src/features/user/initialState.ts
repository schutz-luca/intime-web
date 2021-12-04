/**
 * IMPORTS
 */
import { IUserState } from './index.d'

/**
 * I define the user initial state.
 */
const initialState: IUserState = {
  id: '',
  email: '',
  name: '',
  signed: false,
  role: null,
}

/**
 * EXPORTS
 */
export default initialState