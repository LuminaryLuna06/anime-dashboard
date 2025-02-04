import React, { useState, useEffect } from "react";
import SearchAnime from "./components/SearchAnime";
import TopAnime from "./components/TopAnime";

function Animes() {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="w-[95%] mx-auto">
        {/* Search anime */}
        <SearchAnime />

        {/* Top Anime Of All Time */}
        <TopAnime />
      </div>
    </>
  );
}

export default Animes;
