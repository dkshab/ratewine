import React from "react";
import Review from "./Review";
import AddReview from "./AddReview";

const Reviews = ({ reviews }) => {
  return (
    <section>
      <AddReview />
      {reviews.map(review => (
        <Review {...review} id={review.id} key={review.id} />
      ))}
    </section>
  );
};

export default Reviews;
