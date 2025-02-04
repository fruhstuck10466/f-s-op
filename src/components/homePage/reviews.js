// src/components/Reviews.js
import React from "react";
import { ReviewsSection, Title, ReviewsContainer, ReviewCard, ReviewImage, ReviewText }from "../../styles/reviewStyles"

import reviewImg from "../../assets/images/rating.png"; // Replace with the path to the circular image you want to use

const reviews = [
  "As a supplier of essential cleaning materials, detergents, disinfectants, and sanitizers to government hospitals and healthcare facilities, maintaining a high standard of quality and dependability is critical to our business. We are incredibly fortunate to work with FAHOLO®, which has consistently exceeded our expectations in every aspect of their service.",
  "Their product range is exceptional, each item we purchase, from detergents to high-grade disinfectants, performs effectively and reliably, aligning perfectly with the rigorous standards our clients demand. The quality control and thorough attention to detail are clearly evident, ensuring that we always receive products we can stand behind. Beyond the high quality, their pricing structure offers tremendous value, especially in bulk orders, allowing us to provide great deals to our distributors without compromising on quality.",
  "Their team is not only knowledgeable but also responsive and helpful, addressing any concerns with professionalism and speed. Working with FAHOLO has been a game-changer for us, allowing us to confidently fulfill our clients’ needs while upholding the highest standards. We highly recommend them to any business in need of top-notch cleaning supplies, and we look forward to a continued successful partnership!"
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
            <ReviewText><p>"{review}"</p></ReviewText>
          </ReviewCard>
        ))}
      </ReviewsContainer>
    </ReviewsSection>
  );
};

export default Reviews;
