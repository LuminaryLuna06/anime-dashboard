import React, { useState, useEffect } from "react";
import SearchAnime from "./components/SearchAnime";
import TopAnime from "./components/TopAnime";
import AnimeFilter from "../../components/function/AnimeFilter";

function Animes() {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="w-[95%] mx-auto">
        {/* Filter anime */}
        <AnimeFilter />

        {/* Top Anime Of All Time */}
        <TopAnime />
      </div>
    </>
  );
}

export default Animes;
