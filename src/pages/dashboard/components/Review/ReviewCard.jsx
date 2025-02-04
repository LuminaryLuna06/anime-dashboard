import React from "react";

function ReviewCard({ props }) {
  return (
    <div className="flex flex-col my-5 border border-pink-300 p-3">
      <div className="flex flex-row gap-3 my-3">
        <img
          src={props?.user?.images?.webp?.image_url}
          alt=""
          className="h-[50px]"
        />
        <h2 className="font-bold text-xl">{props?.user?.username}</h2>
      </div>
      <div>
        <p className="text-left">{props?.review?.slice(0, 500)}...</p>
      </div>
    </div>
  );
}

export default ReviewCard;
