import React from "react";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.css";

function Cards({ props }) {
  return (
    <div className="flex flex-col md:w-[30%] lg:w-[15%] w-[45%] mx-auto py-2 relative container animate-fadeIn">
      <Link key={props?.mal_id} to={`/anime/${props?.mal_id}`}>
        <div className="aspect-[2/3] flex">
          <img
            src={props?.images.webp.large_image_url}
            alt=""
            className="aspect-[2/3] object-cover"
          />
        </div>
        <div className="overlay">
          <div className="text flex-col">
            <p className="font-bold">{props?.title}</p>
            <p className="text-sm">
              ⭐ {props?.score} - {props?.episodes} Episodes
            </p>
            <p className="text-sm my-2">{`${props?.synopsis.slice(
              0,
              150
            )}...`}</p>
          </div>
        </div>
        <div className="my-2">
          <h4 className="font-semibold">{props?.title}</h4>
          <p>
            ⭐ {props?.score} - 🗓 {props?.year}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
