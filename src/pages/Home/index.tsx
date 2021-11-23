/**
 * IMPORTS
 */
import { useDispatch } from "react-redux";
import interfaceState from 'features/interfaceState';

/**
 * I am the Home Page
 */
export const Home = () => {
    const dispatch = useDispatch();


    const changeTheme = () => {
        dispatch(interfaceState.actions.switchTheme({}));
    }

    return (
        <>
            <button onClick={changeTheme} style={{ background: "white" }}>
                TROCAR THEME
            </button>
        </>
    )
}