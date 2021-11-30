/**
 * IMPORTS
 */
import { ReactNotificationOptions } from "react-notifications-component";

export interface INotify extends ReactNotificationOptions {
    duration?: number
    container?: ReactNotificationOptions.container
}