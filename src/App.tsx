/**
 * IMPORTS
 */
import 'animate.css';
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import GlobalStyle from "styles/global";
import { useSelector } from 'react-redux';
import { RoutesLoader } from "routes";
import { selectIsDarkTheme } from "features/interfaceState/selectors";


/**
 * I am a main App component
 */
export function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (

    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ReactNotification />
      <RoutesLoader />
      <GlobalStyle />
    </ThemeProvider >

  )
}
