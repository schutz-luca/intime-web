/**
 * IMPORTS
 */
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import user from "../features/user";
import initialState from "../features/user/initialState";

/**
 * I am a custom logout hook
 */
const useLogout = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = async () => {
        localStorage.removeItem('token');
        dispatch(user.actions.update(initialState));
        if (history)
            history.push("/");
    };
    return handleLogout;
}

export default useLogout;