import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div key={index} className="flex flex-col md:w-[30%] lg:w-[15%] w-[45%] mx-auto py-2 relative container">
        
        <img src="" alt="" className="aspect-[2/3]" />

        <div className="my-2">
          <Skeleton count={2} />
        </div>
      </div>
    ));
}

export default CardSkeleton;
