import styled from "styled-components";
import { motion } from "framer-motion";
import {breakpoints, colorPalette} from "./globalStyles"
import BacImg from "../assets/images/globe.jpeg"

export const AboutContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const IntroWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid ${colorPalette.darkgrey};
  @media (max-width: ${breakpoints.s}px){
    display: block;
    border-bottom: none;
  }
`;

export const IntroAboutHeadingOne = styled.div`
height: 100%;
    width: 50%;
    @media (max-width: ${breakpoints.s}px){
      width: 100%;
    }
  h1 {
    padding: 50px 0 0 40px;
    @media (max-width: ${breakpoints.s}px){
      padding: 40px 0 0 20px;
    }
    .smalltext {
      font-size: 0.8rem;
      color: ${colorPalette.blue};
    }
    .bigtext {
      font-size: 6rem;
      color: ${colorPalette.blue}; 
      @media (max-width: ${breakpoints.s}px){
        line-height: 5.5rem;
      }  
    }
  }
`;

export const IntroAboutHeading = styled.div`
    height: 100%;
    width: 50%;
    @media (max-width: ${breakpoints.s}px){
      width: 100%;
    }
    h1 {
      padding: 200px 0 0 40px;
      @media (max-width: ${breakpoints.s}px){
        padding: 130px 0 0 20px;
      }
    }

`

export const IntroAboutText = styled.div`
  width: 50%;
  border-left: 1px solid ${colorPalette.darkgrey};
  @media (max-width: ${breakpoints.s}px){
    width: 100%;
    border-left: none;
  }
  h3 {
    width: 90%;
    letter-spacing: -1px;
    padding: 200px 40px 50px 40px;
    @media (max-width: ${breakpoints.s}px){
      width: 100%;
      padding: 30px 20px 30px 20px;
    }
  }
`;

export const IntroAboutTextOne = styled.div`
  width: 50%;
  border-left: 1px solid ${colorPalette.darkgrey};
  @media (max-width: ${breakpoints.s}px){
    width: 100%;
    border-left: none;
  }
  h3 {
    width: 90%;
    letter-spacing: -1px;
    padding: 50px 40px 50px 40px;
    @media (max-width: ${breakpoints.s}px){
      width: 100%;
      padding: 30px 20px 0px 20px;
    }
  }
`;

//image parallax

export const IntroAboutImage = styled.div`
position: relative;
  height: 45vh;
  width: 100%;
  background-image: url(${BacImg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  @media (max-width: ${breakpoints.m}px){
    background-attachment: inherit;
    height: 35vh;
  }
`
//strategy

export const StrategyWrapper = styled.div`
  position: relative;
  margin: 50px 0;
  padding: 0 40px;
  height: 100%;
  width: 100%;
  @media (max-width: ${breakpoints.s}px){
    padding: 0 20px;
  }
  h1 {
    margin-bottom: 50px;
  }
`;

export const StrategyWrapperInner = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
export const StrategyTitle = styled.div`
  width: 20%;
  margin-right: 20px;
  h3 {
    color: ${colorPalette.green};
    letter-spacing: -1px;
  }
`;
export const StrategyInfo = styled.div`
  width: 50%;
  h3 {
    letter-spacing: -1px;
  }
  @media (max-width: 700px) {
    width: 70%;
  }
`;
