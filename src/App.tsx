/**
 * IMPORTS
 */
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import GlobalStyle from "styles/global";
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from './state/store';
import { useContext } from "react";
import { PersistGate } from 'redux-persist/integration/react';
import { RoutesLoader } from "routes";
import { selectIsDarkTheme } from "features/interfaceState/selectors";


/**
 * I am a main App component
 */
export function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (

    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      
          <RoutesLoader />
          <GlobalStyle />
        
    </ThemeProvider >

  )
}
