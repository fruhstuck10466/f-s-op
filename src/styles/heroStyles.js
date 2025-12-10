import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const HeroWrap = styled.div`
    position: relative;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100%;
    @media (max-width: ${breakpoints.xl}px){
        height: 700px;
    }
    @media (max-width: ${breakpoints.l}px){
        height: 600px;
    }
    @media (max-width: ${breakpoints.s}px){
        overflow: hidden;
        height: auto;
        margin-bottom: 50px;
    } 
`
export const HeroWrapInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width: ${breakpoints.s}px){
        display: block;
    } 
`

export const HeroText = styled(motion.div)`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    padding: 20px 60px 0 100px;
    justify-content: center;
    flex-direction: column;
    h3 {
    width: 80%;
    @media (max-width: ${breakpoints.s}px){
        width: 80%;
    }
    }
    @media (max-width: ${breakpoints.xl}px){
        padding-left 80px;
    }
    @media (max-width: ${breakpoints.m}px){
        padding: 20px 30px 0 50px;
    }
    @media (max-width: ${breakpoints.s}px){
        width: 100%;
        height: auto;
        padding: 30% 40px 0px;    
    }
    @media (max-width: ${breakpoints.xs}px){
        padding-left: 30px;
        padding-right: 30px;
    }
`
export const HeroImage = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;  
    @media (max-width: ${breakpoints.s}px){     
        width: 100%;
        height: 50vh;   
        align-items: flex-start;
    }
`
export const HeroImageInner = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 70%;
    overflow: hidden; 
    @media (max-width: ${breakpoints.s}px){
        width: 100%;
        height: 100%; 
        justify-content: center;
        align-items: center;
    }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px; 
    height: 400px; 
    @media (max-width: ${breakpoints.m}px){
        width: 300px; 
        height: 300px;
    } 
    @media (max-width: ${breakpoints.xs}px){
        width: 300px; 
        height: 300px;
    } 
    }
`
export const ContactMeta = styled(motion.div)`
    position: absolute;
    bottom: 5%;
    left: 0;
    margin-left: 40px;
    @media (max-width: ${breakpoints.s}px){
        display: none;
        margin-left: 20px;
        bottom: 3%;
        p {
            //background: #c05d06ff;
            padding: 7px;
            border-radius: 10px;
        }
    }    
    p {
    a {
        position: relative;
        text-decoration: none;
        color: ${colorPalette.text};
        &:after {
            border-radius: 1em;
            border-top: 1px solid #000;
            content: "";
            position: absolute;
            right: 100%;
            bottom: -7px;
            left: 0;
            transition: right 0.4s cubic-bezier(0, 0.5, 0, 1);
            
        }
        &:hover:after {
            right: 0;
        }
    }
    }
    
`
const myanimation = keyframes`
  0% {background-color: ${colorPalette.green};}
  25%{background-color: ${colorPalette.lightred};}
  50%{background-color:${colorPalette.green};}
  75%{background-color: ${colorPalette.lightred};}
  100% {background-color: ${colorPalette.green};}
`

export const ArrowMeta = styled(motion.div)`
    position: absolute;
    bottom: 5%;
    right: 0;
    margin-right: 20px;
    height: 100px;
    width: 100px;
    border-radius: 100px;
    animation: ${myanimation} 10s infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${breakpoints.m}px){
        height: 90px;
        width: 90px;
        bottom: 3%;
    } 
    p {
        transform-origin: center;
        color: ${colorPalette.background};
    }
`

