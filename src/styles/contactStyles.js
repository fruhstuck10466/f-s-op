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
  h3 {
    margin: 5px 0;
    color: ${colorPalette.text};
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
    width: 100%;
    margin-right: 50px;
  }
  @media (max-width: ${breakpoints.s}px){
    margin-right: 20px;
    margin-bottom: 10px;
  }
`;

export const ContactTitle = styled(motion.div)`
  width: 35%;
  @media (max-width: ${breakpoints.s}px){
    width: 100%;
    margin-bottom: 20px;
    border-right: none;
  }
`

export const MapContainer = styled(motion.div)`
  //margin-bottom: 20px;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`