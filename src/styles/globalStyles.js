import styled from "styled-components";

export const breakpoints = {
    xs: 320,
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
}

export const colorPalette = {
    background: "#FFF",
    text: "#000",
    green: "#2C7147",
    lightgreen: "#80ed99",
    red: "#FF0000",
    lightred: "#EC3234",
    blue: "#295D91",
    grey: "#F2F2F2",
    darkgrey: "#B9B7B7",
    brown: "#DAD7CD",
    babyblue: "#001E50",
}

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 0 40px;
    width: auto;
    height: 100%;
    @media (max-width: ${breakpoints.l}px) {
        padding: 0 20px;
      }
`

export const BtnStyle = styled.div`
    height: 60px;
    width: 250px;
    margin-top: 1rem;
    @media (max-width: ${breakpoints.l}px) {
      height: 52px;
      width: 220px;
    }
    @media (max-width: ${breakpoints.m}px) {
      height: 52px;
      width: 200px;
    }
    @media (max-width: ${breakpoints.s}px) {
      margin-bottom: 20%;
      width: 70%;
    }
    @media (max-width: ${breakpoints.xs}px) {
        height: 48px;
        width: 200px;
      }
a {
    text-decoration: none;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      transform-origin: center;
      border: none;
      outline: none;
      background: ${colorPalette.green};
      span {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: ${colorPalette.background};
      }
      &:hover {
        transition: 0.2s ease-in-out;
        border: 1px solid ${colorPalette.text};
        background: ${colorPalette.background};
        span {
          color: ${colorPalette.text};
        }
      }
    }
  }
`

export const BtnStyleOne = styled.div`
    height: 55px;
    width: 250px;
    margin-top: 1rem;
    @media (max-width: ${breakpoints.xl}px) {
      height: 52px;
      width: 100%;
    }
    @media (max-width: ${breakpoints.s}px) {
      height: 48px;
      width: 100%;
    }
    @media (max-width: ${breakpoints.xs}px) {
        height: 40px;
        width: 100%;
      }
a {
    text-decoration: none;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      transform-origin: center;
      border: 1px solid ${colorPalette.text};
      border-radius: 100px;
      outline: none;
      background: none;
      span {
        font-size: 0.9rem;
        text-transform: uppercase;
        color: ${colorPalette.text};
        @media (max-width: ${breakpoints.s}px) {
          font-size: 0.8rem;
        }
        @media (max-width: ${breakpoints.xs}px) {
          font-size: 0.6rem;
        }
      }
      &:hover {
        transition: 0.2s ease-in-out;
        border: none;
        background: ${colorPalette.green};
        span {
          color: ${colorPalette.background};
        }
      }
    }
  }
`