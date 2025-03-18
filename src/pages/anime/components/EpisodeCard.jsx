import React from "react";

function EpisodeCard({ link, title, episode }) {
  return (
    <div className="card card-side bg-base-200 shadow-sm my-3 p-3">
      <img src={link} alt="Movie" className="w-48 h-24"/>
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
