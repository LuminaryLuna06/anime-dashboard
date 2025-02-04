import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ClubSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div className="my-3  flex border rounded gap-5" key={index}>
        <img src="placeholder.jpg" alt="" className="object-cover h-40 w-40" />
        <div className="p-3 justify-center block">
          <h2 className="font-bold text-3xl block">
            Club name
          </h2>
          <p className="text-sm text-gray-300">
            <Skeleton  count={4}/> 
            
          </p>
        </div>
      </div>
    ));
}

export default ClubSkeleton;
