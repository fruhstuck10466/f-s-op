import { motion } from "framer-motion";
import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const HeaderWrap = styled.div`
    position: fixed;
    height: 75px;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    transition: top 0.3s;
    border-bottom: 1px solid ${colorPalette.darkgrey};
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
    position: relative; 
    padding-left: 40px; 
    @media (max-width: ${breakpoints.m}px){
        padding-left: 20px; 
    }
    a {
    display: flex;
    width: 100%;
    align-items: center;
    font-family: "Archia";
    color: ${colorPalette.green};
    img {
        margin-right: 7px;
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
    }
`

export const HamburgerMenu = styled(motion.div)`
    cursor: pointer;
    width: 100px;
    height: 100%;
    background: ${colorPalette.blue};
    border-left: 1px solid ${colorPalette.darkgrey};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
        height: 2px;
        width: 50px;
        background: ${colorPalette.background};
        margin-bottom: 3px;
        &:last-child{
            margin-bottom: 0px;
        }
    }
`