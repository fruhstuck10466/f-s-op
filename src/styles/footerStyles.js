import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const FooterWrapper = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  border-bottom: 1px solid ${colorPalette.text};
  a {
    position: relative;
    text-decoration: none;
    text-transform: none;
    color: ${colorPalette.background};
    &:after {
        border-radius: 1em;
        border-top: 1px solid #fff;
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
`;
export const FooterImage = styled.div`
  position: relative;
  height: 40vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  @media (max-width: ${breakpoints.m}px){
    background-attachment: inherit;
    height: 35vh;
    
  }
  // p {
  //   font-size: 1.8vw;
  //   text-align: center;
  //   opacity: 1;
  //   text-transform: none;
  //   color: ${colorPalette.green};
  //   @media (max-width: ${breakpoints.m}px){
  //       font-size: 3vw;
  //   }
  //   @media (max-width: ${breakpoints.s}px){
  //       font-size: 4vw;
        
  //   }
  // }
`;

export const FooterContent = styled.div`
  position: relative;
  height: 50vh;
  width: 100%;
  background: ${colorPalette.green};
  @media (max-width: ${breakpoints.m}px){
    height: 55vh;
  }
  p {
      margin: 0;
      color: ${colorPalette.background};
      letter-spacing: normal;
      padding-bottom: 10px;
  }
`;


export const FooterDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  padding: 54px 54px 0 54px;
  @media (max-width: ${breakpoints.m}px){
    flex-direction: column;
    padding: 24px 24px 0 24px;
    justify-content: flex-start;
    //height: 100%;
  }
`;

export const FooterDetailsWrapper = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: ${breakpoints.s}px){
    //flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const FooterDetailsOne = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Disclaimer = styled.div`
  width: 40%; /* Set width to 40% */
  text-align: left; /* Align text to the right */
  font-size: 14px;
  //color: ${colorPalette.background};
  margin-left: auto; /* Pushes the disclaimer to the far right */
  p {
  color: ${colorPalette.darkgrey};
  }
  @media (max-width: ${breakpoints.m}px){
    width: 70%;
    margin: 20px 0 50px 0;
    p {
     font-size: 8px;
    }
  }
`;


export const FooterCompany = styled.div`
  position: absolute;
  bottom: 3%;
  left: 3%;
  p {
    color: ${colorPalette.background};
    text-transform: uppercase;
  }
  @media (max-width: ${breakpoints.m}px){
    left: 4%;
  }
`;

export const FooterCredits = styled.div`
  position: absolute;
  bottom: 3%;
  right: 3%;
  p {
    color: ${colorPalette.background};
    text-align: right;
  }
  a {
    color: ${colorPalette.grey};
    text-transform: uppercase;
  }
  @media (max-width: ${breakpoints.m}px){
    right: 3%;
    width: 50%;
  }
`;
