//import { motion } from "framer-motion";
import styled from "styled-components";
import {breakpoints} from "./globalStyles"

export const HomeAboutWrap = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    @media (max-width: ${breakpoints.xl}px){
        height: 700px;
    }
    @media (max-width: ${breakpoints.l}px){
        height: 600px;
    }
    @media (max-width: ${breakpoints.s}px){
        height: auto;
    } 
`

export const HomeAboutWrapInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width: ${breakpoints.s}px){
        flex-direction: column;

    } 
`

export const HomeAboutText = styled.div`
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
    padding: 16% 40px 0px;    
}
@media (max-width: ${breakpoints.xs}px){
    padding-left: 30px;
    padding-right: 30px;
}
`

export const HomeAboutImage = styled.div`
position: relative;
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: ${breakpoints.s}px){     
    width: 100%;
    height: 400px;   
}
`

export const HomeAboutImageInner = styled.div`
    position: relative;
    width: 100%;
    height: 70%;
    overflow: hidden;
    @media (max-width: ${breakpoints.s}px){
        width: 100%;
        height: 100%; 
        // justify-content: center;
        // align-items: center;
    }
    img {
        position: absolute;
        //object-fit: contain;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px; 
        height: 500px; 
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