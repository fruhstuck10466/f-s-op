import { motion } from "framer-motion";
import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const HeaderWrap = styled.div`
    position: fixed;
    height: 95px;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    transition: top 0.3s;
    //border-bottom: 1px solid ${colorPalette.darkgrey};
    background: ${colorPalette.background};
    z-index: 99;
    @media (max-width: ${breakpoints.m}px){
        height: 64px;
    } 
    @media (max-width: ${breakpoints.s}px){
        height: 60px;
    } 
`

export const HeaderItems = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    display: flex;
    position: relative; 
    padding-left: 40px;
    width: 100%;
    @media (max-width: ${breakpoints.m}px){
        padding-left: 20px; 
    }
`

export const LogoImg = styled.div`
    a {
        display: flex;
        align-items: center;
    img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
        @media (max-width: ${breakpoints.m}px){
            width: 48px;
            height: 48px;
        }
        @media (max-width: ${breakpoints.xs}px){
            width: 40px;
            height: 40px;
        }
    }
    p {
        @media (min-width: ${breakpoints.m}px){
            display: none;
        }
    }
    }
`
export const LogoText = styled.div`
    display: flex;
    align-items: center;
    //position: relative;
    a {
        position: relative;
        font-family: "Archia";
        padding-left: 24px;
        @media (max-width: ${breakpoints.m}px){
           display: none;
        }
    }
    .disabled {
        cursor: not-allowed;
        opacity: 0.4;
    }
    .label {
        opacity: 1;
        top: -15px;
        right: -15px;
        position: absolute;
        display: block;
        font-size: 7px;
        background: #626eff;
        color: ${colorPalette.background};
        border-radius: 4px;
        padding: 4px;
    }

`

export const HamburgerMenu = styled(motion.div)`
    cursor: pointer;
    width: 100px;
    height: 100%;
    //background: ${colorPalette.blue};
    //border-left: 1px solid ${colorPalette.darkgrey};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
        height: 2px;
        width: 50px;
        background: ${colorPalette.text};
        margin-bottom: 5px;
        &:last-child{
            margin-bottom: 0px;
        }
    }
`