import { motion } from "framer-motion";
import styled from "styled-components";
import { colorPalette, breakpoints } from "./globalStyles"

export const TopBanner = styled.div`
  height: 32px;
  width: 100%;
  background: ${colorPalette.red};
  color: #fff;
  font-size: 13px;

  @media (max-width: ${breakpoints.m}px) {
    height: 28px;
    font-size: 12px;
  }
`;

export const TopBannerInner = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderWrap = styled.div`
    position: fixed;
    height: 85px;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    transition: top 0.3s;
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
    background-color: white;
    border-bottom: 0.2px solid black;
`

export const Logo = styled.div`
    display: flex;
    position: relative; 
    padding-left: 40px;
    width: 100%;
    @media (max-width: ${breakpoints.l}px){
        padding-left: 20px; 
    }
`

export const LogoImg = styled.div`
    margin-right: 20px;
    @media (max-width: ${breakpoints.s}px){
        margin-right: 10px;
    }
    a {
        display: flex;
        align-items: center;
    img {
        width: 100px;
        height: 100%;
        @media (max-width: ${breakpoints.s}px){
        width: 80px;
    }
    }
    p {
        text-transform: uppercase;
        }
    }
`
export const LogoText = styled.div`
    display: flex;
    align-items: center;
    a {
        position: relative;
        padding-left: 24px;
        @media (max-width: ${breakpoints.l}px){
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

export const LogoLink = styled.div`
    position: relative; 
    margin-left: 12px;
    @media (max-width: ${breakpoints.m}px) {
        margin-left: 8px;
        }
    @media (max-width: ${breakpoints.s}px) {
        margin-left: 4px;
        img {
            width: 100%;
            height: 30px;
        }
    }
`

export const HamburgerMenu = styled(motion.div)`
    cursor: pointer;
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
        height: 2px;
        width: 40px;
        background: ${colorPalette.text};
        margin-bottom: 5px;
        &:last-child{
            margin-bottom: 0px;
        }
    }
`