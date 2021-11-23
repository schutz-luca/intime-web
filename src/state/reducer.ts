/**
 * IMPORTS
 */
import { combineReducers } from 'redux'
import interfaceState from 'features/interfaceState'
import user from 'features/user'
import notify from 'features/notify'

/**
 * I create a root reducer.
 */
const reducer = combineReducers({
    [user.name]: user.reducer,
    [interfaceState.name]: interfaceState.reducer,
    [notify.name]: notify.reducer
})

/**
 * EXPORTS
 */
export type IRootState = ReturnType<typeof reducer>
export default reducer