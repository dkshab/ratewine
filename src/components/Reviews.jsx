import React, { useContext } from "react";
import Review from "./Review";
import AddReview from "./AddReview";
import { ReviewsContext } from "../providers/ReviewsProvider";

const Reviews = () => {
  const reviews = useContext(ReviewsContext);
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
