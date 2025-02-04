import axios from "axios";
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import getAnimeReviews from "../../../../api/hooks/getAnimeReviews";

function Reviews() {
  const { data: reviews, isLoading } = getAnimeReviews();
  return (
    <>
      <div className="border border-gray-700 p-4">
        <h1 className="font-bold text-3xl">Reviews</h1>
        {reviews?.map((review, index) => (
          <ReviewCard key={index} props={review} />
        ))}
      </div>
    </>
  );
}

export default Reviews;
