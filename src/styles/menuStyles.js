import { motion } from "framer-motion";
import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const MenuWrap = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 40%;
    background: ${colorPalette.brown};
    color: ${colorPalette.text};
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
        height: 2px;
        width: 50px;
        background: ${colorPalette.text};
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
    padding-left: 0px;
    h1 {
        color: ${colorPalette.text};  
        @media (max-width: ${breakpoints.s}px){ 
            font-size: 2rem;
           }  
    }
    h3 {
      line-height: 76px;
      color: ${colorPalette.text};  
      @media (max-width: ${breakpoints.s}px){
            line-height: 56px;
          }
    }
    ul {
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    li {
        position: relative;
        width: max-content;
        list-style: none;
        font-weight: normal;
        height: 76px;
        line-height: 76px;
        padding-top: 10px;
        padding-left: 40px;
        &:last-child{
            line-height: normal;
        }
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
          sup {
            color: ${colorPalette.text};  
            font-size: 0.8rem;
          }
        }
    
    }
`

export const MenuFoot = styled.div``