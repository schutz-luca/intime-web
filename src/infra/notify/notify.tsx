/**
 * IMPORTS
 */
import { store } from "react-notifications-component";
import { INotify } from "./index.d";

/**
 * I am the notify function
 * @param notify props
 * @returns the function that render notify
 */
export const notify = (props: INotify) => store.addNotification({
    ...props,
    insert: "top",
    container: props.container || "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration: props.duration || 5000,
        onScreen: true
    },
});