//import { motion } from "framer-motion";
import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const HomeAboutWrap = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    border-bottom: 1px solid ${colorPalette.darkgrey};
    @media (max-width: ${breakpoints.xl}px){
        height: 700px;
    }
    @media (max-width: ${breakpoints.l}px){
        height: 600px;
    }
    @media (max-width: ${breakpoints.s}px){
        height: auto;
        border-bottom: none;
    } 
`

export const HomeAboutWrapInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width: ${breakpoints.s}px){
        //display: block;
        flex-direction: column-reverse;

    } 
`

export const HomeAboutText = styled.div`
position: relative;
width: 50%;
height: 100%;
display: flex;
padding: 20px 30px 0 130px;
justify-content: center;
flex-direction: column;
border-right: 1px solid ${colorPalette.darkgrey};
@media (max-width: ${breakpoints.xl}px){
    padding-left 80px;
}
@media (max-width: ${breakpoints.m}px){
    padding-left 50px;
}
@media (max-width: ${breakpoints.s}px){
    border-right: none;
    //background: pink;
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
    width: 60%;
    height: 70%;
    opacity: 0.8;
    overflow: hidden;
    // border-radius: 0 200px 200px 0; 
    border-radius: 0px;
    @media (max-width: ${breakpoints.xl}px){
        width: 70%;  
    } 
    @media (max-width: ${breakpoints.s}px){
        width: 100%;
        height: 100%; 
        border-radius: 0px;
    }
`