/**
 * IMPORTS
 */
import { Button } from "components/button";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { variants } from "styles/theme";
import { IModalProps } from "./index.d";
import { $CloseContainer, $Modal, $ModalBackground, $ModalContainer, $ModalChildren } from "./styles";

export const Modal = (props: IModalProps) => {

    const closeModal = () => {
        props.setIsOpen(false);
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={props.isOpen as unknown as string}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {props.isOpen &&
                    <$ModalContainer variants={variants} >
                        <$Modal>
                            <$CloseContainer>
                                <Button onClick={closeModal}>
                                    <MdClose />
                                </Button>
                            </$CloseContainer>
                            <$ModalChildren>
                                {props.children}
                            </$ModalChildren>
                        </$Modal>
                        <$ModalBackground onClick={closeModal} />
                    </$ModalContainer>
                }

            </motion.div>
        </AnimatePresence>
    )
}