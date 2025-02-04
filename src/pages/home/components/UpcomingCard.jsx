import React from "react";
import { Link } from "react-router-dom";

function UpcomingCard({ props }) {
  return (
    <div className="flex flex-col md:w-[30%] lg:w-[15%] w-[45%] mx-auto py-2 relative container animate-fadeIn">
      <Link key={props?.mal_id} to={`/anime/${props.mal_id}`}>
        <img
          src={props.images?.webp?.large_image_url}
          alt=""
          className="aspect-[2/3]"
        />
        <div className="overlay">
          <div className="text flex-col">
            <h4>{props.title}</h4>
          </div>
        </div>
        <div>
          <h4>{props.title}</h4>
        </div>
      </Link>
    </div>
  );
}

export default UpcomingCard;
