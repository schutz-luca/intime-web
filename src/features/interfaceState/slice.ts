/**
 * IMPORTS
 */
import { createSlice, Slice } from '@reduxjs/toolkit'
import initialState from './initialState'

/**
 * I am an compact menu slice.
 */


const slice: Slice = createSlice({
  name: 'interfaceState',
  initialState,
  reducers: {
    switchCompactMenu: (state) => {
      state.compactuMenu = !state.compactuMenu;
    },
    switchTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    }
  },
})

/**
 * EXPORTS
 */
export default slice
export const { name, actions, reducer } = slice