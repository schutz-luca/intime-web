/**
 * IMPORTS
 */
import { Routes } from "./routes"

/**
 * I am the routes loader. I pass some config props to routes
 */
const RoutesLoader = () => {

    const isLocalhost = import.meta.env.DEV;

    const { pathname } = window.location;

    return (
        <Routes isLocalhost={isLocalhost} basename={pathname}/>
    )
}

/**
 * EXPORTS
 */
export { RoutesLoader }