import { motion } from "framer-motion";
import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const MenuWrap = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 40%;
    background: ${colorPalette.blue};
    color: ${colorPalette.background};
    z-index: 999;
    overflow: hidden;
    @media (max-width: 600px) {
        width: 100%;
      }
`

export const MenuHead = styled.div`
    position: absolute;
    height: 75px;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    border-bottom: 1px solid ${colorPalette.background};
    @media (max-width: ${breakpoints.m}px){
        height: 64px;
    } 
    @media (max-width: ${breakpoints.s}px){
        height: 60px;
    } 
`

export const CloseMenu = styled.div`
    position: relative;
    margin-left: auto;
    width: 100px;
    height: 100%;
    background: ${colorPalette.background};
    border-left: 1px solid ${colorPalette.text};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
        height: 2px;
        width: 50px;
        background: ${colorPalette.blue};
        margin-bottom: 3px;
        &:last-child{
            margin-bottom: 0px;
        }
    }
`

export const MenuBody = styled(motion.div)`
transform-origin: top;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    font-family: "Archia";
    padding-left: 0px;
    h1 {
        color: ${colorPalette.background};  
        @media (max-width: ${breakpoints.s}px){ 
            font-size: 2rem;
           }  
    }
    ul {
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    li {
        list-style: none;
        //background: pink;
        font-weight: normal;
        height: 76px;
        line-height: 76px;
        padding-top: 10px;
        overflow: hidden;  
        padding-left: 40px;
        border-bottom: 1px solid ${colorPalette.darkgrey};     
        @media (max-width: ${breakpoints.s}px){
            height: 56px;
            line-height: 56px;
            padding-left: 20px;
          }
        .link {
        color: ${colorPalette.background};     
        position: relative;
        display: flex;
        align-items: center;
        }
        a {
          position: relative;
          &.active {
            position: relative;
            &:after {
              content: "";
              position: absolute;
              left: 5px;
              top: 15px;
              transform: translateX(-50%);
              border-radius: 100px;
              height: 7px;
              width: 7px;
              background: ${(props) => props.theme.text};
              display: block;
              @media (max-width: 600px) {
                top: 0;
              }
            }
          }
          sup {
            font-size: 0.8rem;
          }
        }
    
    }
`

export const MenuFoot = styled.div``