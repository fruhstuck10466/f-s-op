import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const HeroWrap = styled.div`

    width: 100%;
    position: relative;
    background: ${colorPalette.green};
    padding-top: 130px;

    @media (max-width: ${breakpoints.m}px) {
      padding-top: 100px; /* adjust for smaller headers */
    }

    @media (max-width: ${breakpoints.s}px) {
      padding-top: 100px;
    }
`

export const HeroInner = styled.div`
  margin: 0 auto;
  padding: 150px 0;
  display: flex;
  align-items: stretch;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    padding: 60px 0;
  }
`;

export const HeroText = styled.div`
  width: 50%;
  color: ${colorPalette.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 40px;

  h1 {
   color: ${colorPalette.background};
    line-height: 1.1;
    margin-bottom: 24px;

    span {
      display: block;
    }
  }


  @media (max-width: ${breakpoints.l}px) {
    width: 90%;
    padding-right: 0;
    margin-bottom: 40px;

    p {
      font-size: 16px;
    }
  }
`;

export const HeroVisual = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 90%;
    justify-content: center;
  }
`;


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
    a {
    font-size: 12px;
    }
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

