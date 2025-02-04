import styled from "styled-components";
import {breakpoints} from "./globalStyles"

export const ReviewsSection = styled.div`
  margin: 80px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  @media (max-width: ${breakpoints.m}px) {
     width: 100%;
  }
`

export const ReviewImage = styled.div`
  img {
    width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  }
`

export const ReviewText = styled.div`
  text-align: justify;
  font-size: 16px;
  color: #333;
`
