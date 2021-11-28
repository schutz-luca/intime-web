/**
 * IMPORTS
 */
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { selectUser } from "features/user/selectors";
import { Home } from "pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import { IRoutesProps } from "./routes.d";
import { LoginPage } from 'pages/LoginPage';
import { MainLayout } from 'layouts/MainLayout';

const Routes = (props: IRoutesProps) => {

    const { signed } = useSelector(selectUser);

    return (
        <BrowserRouter basename={props.isLocalhost ? props.basename : undefined}>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={props.basename}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {signed ?
                        <MainLayout>
                            <Route path="/" exact component={Home} />
                        </MainLayout>
                        :
                        <>
                            <Route path="/" exact component={LoginPage} />
                            <Route path="/cadastro" component={Home} />
                        </>
                    }
                </motion.div>
            </AnimatePresence>
        </BrowserRouter>
    )
}

/**
 * EXPORTS
 */
export { Routes }