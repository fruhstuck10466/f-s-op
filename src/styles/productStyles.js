import { motion } from "framer-motion";
import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const ProductContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ProductsWrapper = styled.div`
  position: relative;
  margin-top: 200px;
  margin-bottom: 100px;
  padding: 0 40px;
  @media (max-width: ${breakpoints.m}px){
    margin-top: 150px;
    margin-bottom: 50px;
  }
  @media (max-width: ${breakpoints.s}px){
    padding: 0 20px;
    margin-top: 130px;
  }
  h3 {
    letter-spacing: -0.5px;
    @media (max-width: ${breakpoints.s}px){
     
      font-size: 1rem;
    }
  }
`;
export const ProductsWrapperInner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  @media (max-width: ${breakpoints.s}px){
    flex-direction: column;
  }
`;

export const ProductsInstructions = styled.div`
  position: relative;
  width: 35%;
  height: 100%;
  @media (max-width: ${breakpoints.s}px){
    width: 100%;
  }
  h4 {
    margin-top: 50px;
    width: 90%;
    letter-spacing: -1px;  
    @media (max-width: ${breakpoints.s}px){
      width: 100%;
      font-size: 1.1rem;
    }
  }
  
`;
export const ProductsDropdown = styled.div`
  position: relative;
  width: 65%;
  height: 100%;
  padding-left: 50px;  
  @media (max-width: ${breakpoints.s}px){
    width: 100%;
    padding-left: 0px; 
    
  }
`;
//Categories Accordion

export const CategoriesHeader = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  border-bottom: 1px solid ${colorPalette.darkgrey};
  &:hover {
    cursor: pointer;
  }
`;
export const CategoryTitle = styled.div`
  h3 {
    font-family: "Archia";
    color: ${colorPalette.blue};
  }
`;

export const CategoryIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  span {
    width: 16px;
    height: 4px;
    background: ${colorPalette.text};
    transition: 0.1 ease-in-out;
  }
`;
export const CategoriesList = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    display: block;
  }
`;
