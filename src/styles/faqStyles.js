import { motion } from "framer-motion";
import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const FaqWrap = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    //border-bottom: 1px solid ${colorPalette.darkgrey};
    background: ${colorPalette.blue};
    color: ${colorPalette.background};
    @media (max-width: ${breakpoints.s}px){
        border-bottom: none;
    } 
`
export const FaqWrapInner = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    padding: 80px 0;
    @media (max-width: ${breakpoints.s}px){
        flex-direction: column;
        padding: 50px 0;
    }  
`
export const FaqTitle = styled.div`
    position: relative;
    width: 30%;
    height: 100%;
    @media (max-width: ${breakpoints.s}px){
        width: 100%;
    }
    h1 {
        font-size: 3.5vw;
        color: ${colorPalette.background};
        @media (max-width: ${breakpoints.xl}px){
            font-size: 3.7vw;
        }
        @media (max-width: ${breakpoints.m}px){
            font-size: 4.2vw;
        }
        @media (max-width: ${breakpoints.s}px){
            font-size: 8vw;
            margin-bottom: 30px;
        }   
        
    }
`
export const FaqInfo = styled.div`
    position: relative;
    width: 70%;
    height: 100%;
    //background: pink;
    @media (max-width: ${breakpoints.s}px){
        width: 100%;
    }
`

//accordion

export const FaqHeader = styled.div`
    cursor: pointer;
    width: 100%;
    height: 32px;
    display: flex;
    //background: yellow;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    border-bottom: 1px solid ${colorPalette.darkgrey};
`

export const FaqQuestion = styled.div`
    h3 {
        font-family: "Archia";
        letter-spacing: -0.5px;
    }
`
export const FaqIcon = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    span {
    width: 16px;
    height: 4px;
    background: ${colorPalette.grey};
    transition: 0.1 ease-in-out;
    }
`
export const FaqAnswer = styled(motion.div)`
    overflow: hidden;
    padding-left: 40px;
    width: 100%;
    margin: 8px 0;
    display: block;
`