import React from "react";
import { useNavigate } from "react-router-dom";

function EpisodeCard({ link, title, episode, url }) {
  const navigate = useNavigate();
  return (
    <div
      className="card card-side bg-base-200 shadow-sm my-3 p-3 hover:bg-gray-800 cursor-pointer"
      onClick={() => navigate(url)}
    >
      <img
        src={
          link ||
          "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        }
        alt="Movie"
        className="w-48 h-24 object-cover"
      />
      <div className="card-body">
        <h2 className="card-title">
          {episode}: {title}
        </h2>
        <p></p>
      </div>
    </div>
  );
}

export default EpisodeCard;
