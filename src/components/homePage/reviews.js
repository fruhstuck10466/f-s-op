// src/components/Reviews.js
import React from "react";
import { ReviewsSection, Title, ReviewsContainer, ReviewCard, ReviewImage, ReviewText }from "../../styles/reviewStyles"

import reviewImg from "../../assets/images/rating.png"; // Replace with the path to the circular image you want to use

const reviews = [
  "As a key supplier of cleaning agents, detergents, disinfectants, and sanitisers to government hospitals and healthcare facilities, we prioritise quality and reliability. Our partnership with FAHOLO® Chemicals Ltd. has been exemplary, their consistent performance and exceptional service have surpassed our expectations across the board.",
  "Their product range is consistently reliable and meets the high standards required by our clients. Quality control is thorough, and each delivery reflects attention to detail. The pricing structure also offers strong value, especially on bulk orders, allowing us to remain competitive without compromising on quality.",
  "FAHOLO® Chemicals Ltd.’s team is highly knowledgeable, responsive, and professional, always addressing our needs promptly. Their support has been instrumental in helping us meet client demands with confidence. We highly recommend them and look forward to continued collaboration."
];

const Reviews = () => {
  return (
    <ReviewsSection>
      <Title>
        <h1>Testimonials</h1>
      </Title>
      <ReviewsContainer>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <ReviewImage>
            <img src={reviewImg} alt="review thumbnail"/>
            </ReviewImage>
            {/* <ReviewImage src={reviewImg} alt="Reviewer" /> */}
            <ReviewText><p>{review}</p></ReviewText>
          </ReviewCard>
        ))}
      </ReviewsContainer>
    </ReviewsSection>
  );
};

export default Reviews;
