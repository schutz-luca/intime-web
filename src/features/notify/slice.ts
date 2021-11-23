/**
 * IMPORTS
 */
import { createSlice, Slice } from '@reduxjs/toolkit'
import { INotifyState } from './index.d'
import initialState from './initialState'

/**
 * I am an user slice.
 */


const slice: Slice<INotifyState> = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    update: (state, action) => {
      state.detail = action.payload.detail;
      state.title = action.payload.title;
      state.kind = action.payload.kind;
    }
  },
})

/**
 * EXPORTS
 */
export default slice
export const { name, actions, reducer } = slice
