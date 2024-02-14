import { motion } from "framer-motion";
import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const ContactContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ContactWrapper = styled.div`
  position: relative;
  margin-top: 200px;
  margin-bottom: 100px;
  padding: 0 40px;
  display: flex;
  height: 100%;
  @media (max-width: ${breakpoints.m}px){
    margin-top: 150px;
    margin-bottom: 50px;
  }
  @media (max-width: ${breakpoints.s}px){
    padding: 0 20px;
    flex-direction: column;
    margin-top: 130px;
  }
  h4 {
    @media (max-width: ${breakpoints.s}px){
      font-size: 1rem;
    }
  }
  h3 {
    margin: 5px 0;
    color: ${colorPalette.blue};
    font-family: "Archia";
    letter-spacing: -1px;
    @media (max-width: ${breakpoints.s}px){
      font-size: 1rem;
    }
  }
`;
export const ContactFlex = styled.div`
  display: flex;
  width: 65%;
  flex-wrap: wrap;
  margin-left: 50px;
  @media (max-width: ${breakpoints.m}px){
    margin-left: 20px;
  }
  @media (max-width: ${breakpoints.s}px){
    width: 100%;
    margin-left: 0;
  }
`;

export const ContactFlexInner = styled.div`
  margin-right: 100px;
  margin-bottom: 20px;
  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: ${breakpoints.xl}px){
    margin-right: 50px;
  }
  @media (max-width: ${breakpoints.s}px){
    margin-right: 20px;
    margin-bottom: 10px;
  }
`;

export const ContactTitle = styled(motion.div)`
  width: 35%;
  border-right: 1px solid ${colorPalette.darkgrey};
  @media (max-width: ${breakpoints.s}px){
    width: 100%;
    margin-bottom: 20px;
    border-right: none;
  }
`