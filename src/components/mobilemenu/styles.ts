import { motion } from "framer-motion";
import styled from "styled-components";
import { devices } from "styles/devices";

export const $MenuMobile = styled.div`
 z-index: 125;
 background: ${props => props.theme.neutral};
 border-radius: 0 20px 0 0;

 flex-direction: column;
 position: fixed;
 left: -200px;
 top: 80px;
 bottom: 0;
 display: none;
 color: ${props => props.theme.neutral8};
 transition: left ease 1s;
 
 @media ${devices.tablet}{
    top: 60px;
 }

 &.open{
  left: 0;
 }

 ul{
    margin-top: 50px;
    padding: 15px;
    flex-direction: column;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    font-weight: ${props => props.theme.fonts.weight.bold};

    li{
      padding: 12px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: ${props=>props.theme.neutral8};

      svg{
        height: 18x;
        width: 18px;
        margin-right: 10px;
      }
    }
 }


 @media ${devices.tablet} {
   width: 200px;
   display: flex;
   border: none;
   align-items: center;
   flex-direction: column;
   justify-content: flex-start;
 }
`;

export const $Background = styled(motion.div)`
@media ${devices.tablet} {
  background: black;
  opacity: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 124;
  transition: all ease 1s;
}
`;

export const variants = {
    animate: {
        opacity: 0.5,
        transitionDuration: '0.1s',
    },
    exit: {
        opacity: 0,
    }
};
