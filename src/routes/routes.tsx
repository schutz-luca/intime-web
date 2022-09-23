/**
 * IMPORTS
 */
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { selectUser } from "features/user/selectors";
import { RoleEnum } from "features/user/index.d"
import { MainLayout } from "layouts/MainLayout";
import { ClientHome } from "pages/Client/Home";
import { LoginPage } from "pages/LoginPage";
import { IRoutesProps } from "./routes.d";
import { ClientJoin } from "pages/Client/Join";
import { ProviderJoin } from "pages/Provider/Join";
import { ListServices } from "pages/Provider/Services";
import { ProviderProfile } from "pages/Provider/Profile";
import { ClientProfile } from "pages/Client/Profile";
import { ClientSchedulings } from "pages/Client/Schedulings";
import { ProviderSchedulings } from "pages/Provider/Schedulings";

const Routes = (props: IRoutesProps) => {

    const { signed, role } = useSelector(selectUser);

    return (
        <BrowserRouter >
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={props.basename}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {signed ?
                        <MainLayout>
                            {role === RoleEnum.PROVIDER &&
                                <>
                                    <Route path="/" exact component={ProviderSchedulings} />
                                    <Route path="/profile" exact component={ProviderProfile} />
                                    <Route path="/services" exact component={ListServices} />
                                </>
                            }
                            {role === RoleEnum.CLIENT &&
                                <>
                                    <Route path="/" exact component={ClientHome} />
                                    <Route path="/profile" exact component={ClientProfile} />
                                    <Route path="/schedulings" exact component={ClientSchedulings} />
                                </>
                            }
                        </MainLayout>
                        :
                        <>
                            <Route path="/" exact component={LoginPage} />
                            <Route path="/join" exact component={ClientJoin} />
                            <Route path="/join-provider" exact component={ProviderJoin} />
                            <Route render={() => <Redirect to="/" />} />
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