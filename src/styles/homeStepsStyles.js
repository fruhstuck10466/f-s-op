//import { motion } from "framer-motion";
import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const StepsWrap = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    // background: ${colorPalette.grey};
    background-color: white;
    //border-bottom: 1px solid ${colorPalette.darkgrey};
    h1 {
        color: ${colorPalette.blue};
        padding: 70px 0 20px;
        @media (max-width: ${breakpoints.s}px){
            padding: 50px 0 20px;
            //border-bottom: none;
        }    
    }
`

export const StepsWrapInner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 100%;
    width: 100%;
    padding-bottom: 100px;
    //padding-left: 90px;
    @media (max-width: ${breakpoints.xl}px){
        
        padding-left: 0px;
       
    }
    @media (max-width: ${breakpoints.m}px){
    display: block;
    padding-left: 0px;
    padding-bottom: 50px;
    }
`

export const Step = styled.div`
    position: relative;
    height: 400px;
    display: flex;
    flex-direction: column;
    //border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: rgba(0, 0, 0, 0.4) -5px 5px, rgba(0, 0, 0, 0.3) -10px 10px, rgba(0, 46, 170, 0.2) -15px 15px, rgba(0, 0, 0, 0.1) -10px 10px, rgba(0, 0, 0, 0.05) -0 0;
    //box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 85, 85) 20px -20px;
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    // border-radius: 30px;
    width: 30%;
    background: ${colorPalette.background};
    color: ${colorPalette.text};
    @media (max-width: ${breakpoints.m}px){
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
    }
    @media (max-width: ${breakpoints.s}px){
        height: 400px;
        }
    span {
        color: #295D91;
    }
`

export const StepHeading = styled.div`
    position: relative;
    display: flex;
    //height: auto;
    justify-content: space-between;
    margin: 0 20px 20px;
    padding: 40px 0 0;
    //background: pink;
    @media (max-width: ${breakpoints.m}px){
        padding: 25px 0 5px;
    }
    @media (max-width: ${breakpoints.s}px){
        padding: 30px 0 5px;
    }
    h2 {
        font-size: 1.1rem;
        text-transform: none;
        color: #295D91;
        //font-family: "CeraPro";
    }
    &:after {
    position: absolute;
    background: #295D91;
    content: "";
    width: 100%;
    height: 1px;
    bottom: 0px;
    left: 0;
    }
    img {
    width: 32px;
    height: 32px;
    display: inline-block;
    //opacity: 0;
    padding-bottom: 5px;
    }
`

export const StepDescription = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`

export const StepNumber = styled.div`
    position: relative;
    display: none;
    margin-left: 20px;
    width: 20%;
    h4 {
    color: ${colorPalette.text};
    font-family: "Archia";
    }
`

export const StepDescriptionInner = styled.div`
    position: relative;
    width: 80%;
    margin-right: 20px;
    margin-left: 20px;
    @media (max-width: ${breakpoints.s}px){
        margin-bottom: 15%;
    }
    p {
    color: ${colorPalette.text};
    }
    h4 {
        margin-bottom: 0;
        font-size: 1.1rem;
        //font-family: "Archia";
        color: #295D91;
        letter-spacing: -1px;
        
    }
`
export const StepCta = styled.div` 
position: relative;
display: flex;
align-items: center;
//background: pink;
justify-content: space-between;
margin-left: 20px;
margin-right: 20px;
margin-bottom: 30px;
    margin-top: auto;
    h4 {
        margin: 0;
        font-size: 1rem;
        //font-family: "Archia";
        letter-spacing: -1px;
    }
    span {
        background: #295D91;
        //border-radius: 100px;
        height: 70px;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 20px;
        }
        &:hover {
            transform: scale(1.1);
            transition: ease-in-out 0.2s;
        }
    }
`

export const StepAcc = styled.div`
    margin-top: auto;
    margin-bottom: 30px;
    margin-left: 20px;
    h4 {
        font-size: 1.1rem;
        letter-spacing: -1px;
    }
`
