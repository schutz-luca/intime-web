import { IRootState } from "../../state/reducer";

export const selectCompactMenuValue = (state: IRootState): boolean => state.interfaceState.compactMenu;

export const selectIsDarkTheme = (state: IRootState): boolean => state.interfaceState.isDarkTheme;