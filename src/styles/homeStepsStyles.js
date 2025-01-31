//import { motion } from "framer-motion";
import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const StepsWrap = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #f9f9f9;
    h1 {
        color: ${colorPalette.text};
        //text-align: center;
        padding: 70px 0 20px;
        @media (max-width: ${breakpoints.s}px){
            padding: 50px 0 20px;
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
    @media (max-width: ${breakpoints.xl}px){     
        padding-left: 0px; 
    }
    @media (max-width: ${breakpoints.l}px){
    display: block;
    padding-left: 0px;
    padding-bottom: 50px;
    }
`

export const Step = styled.div`
    position: relative;
    width: 30%;
    height: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    //border: 1px solid #ccc;
    box-shadow: rgba(0, 0, 0, 0.4) -5px 5px, rgba(0, 0, 0, 0.3) -10px 10px, rgba(0, 46, 170, 0.2) -15px 15px, rgba(0, 0, 0, 0.1) -10px 10px, rgba(0, 0, 0, 0.05) -0 0; 
    background: ${colorPalette.grey};
    color: ${colorPalette.text};
    @media (max-width: ${breakpoints.l}px){
    width: 100%;
    height: 400px;
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
    justify-content: space-between;
    margin: 0 20px 20px;
    padding: 40px 0 0;
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
    }
    &:after {
    position: absolute;
    background: #000;
    content: "";
    width: 100%;
    height: 1px;
    bottom: 0px;
    left: 0;
    }
    img {
    display: none;
    width: 32px;
    height: 32px;
    //display: inline-block;
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
    //font-family: "Archia";
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
        color: #000;
        letter-spacing: -1px;
        
    }
`
export const StepCta = styled.div` 
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 20px;
margin-right: 20px;
margin-bottom: 30px;
    margin-top: auto;
    h4 {
        margin: 0;
        font-size: 1rem;
        letter-spacing: -1px;
    }
    span {
        background: ${colorPalette.green};
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
`
