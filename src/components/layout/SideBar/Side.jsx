import React, { useState, useEffect } from "react";
import Button from "../../ui/Button";
import getRandomAnime from "../../../api/hooks/getRandomAnime";
import getWatchRecentEpisodes from "../../../api/hooks/getWatchRecentEpisodes";
import { Link } from "react-router-dom";
import ShuffleIcon from "@mui/icons-material/Shuffle";

function Side() {
  const { data: recents } = getWatchRecentEpisodes();
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return `${title.slice(0, maxLength)}...`;
    }
    return title;
  };

  return (
    <div className="md:w-[20%] lg:w-[25%] flex flex-col gap-4 animate-fadeIn">
      <div>
        <img src="quangcao2.jpg" alt="Quang cao" />
      </div>
      {/* Anime moi cap nhat */}
      <div className="w-full bg-base-100 p-2 rounded">
        <h2 className="text-xl font-semibold my-2">New Episodes</h2>
        <hr className="my-2" />
        <ul>
          {recents &&
            recents.map((recent, index) => {
              const lastestEp = recent && recent.episodes[0].mal_id;
              return (
                <li
                  key={index}
                  className="flex justify-between p-2 bg-base-200 my-2"
                >
                  <Link
                    to={`/anime/${recent.entry.mal_id}/episodes/${lastestEp}`}
                    className="text-pink-500 hover:text-pink-300 transition-all duration-500"
                  >
                    {truncateTitle(recent.entry.title, 30)}
                  </Link>
                  <p>Ep {recent.episodes[0].mal_id}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <img src="quangcao.jpg" alt="" />
      </div>
    </div>
  );
}

export default Side;
