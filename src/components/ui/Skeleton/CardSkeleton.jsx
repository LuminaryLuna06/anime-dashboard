import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div
        key={index}
        className="flex flex-col md:w-[30%] lg:w-[15%] w-[45%] relative container animate-pulse m-2"
      >
        <div className="aspect-[2/3] flex justify-center items-center p-3 h-full bg-gray-500">
          <ImageOutlinedIcon className="m-auto" fontSize="large" />
        </div>
        <div className="my-2">
          <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded-full mb-4"></div>
        </div>
      </div>
    ));
}

export default CardSkeleton;
