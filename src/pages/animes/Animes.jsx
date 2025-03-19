import React, { useState, useEffect } from "react";
import SearchAnime from "./components/SearchAnime";
import TopAnime from "./components/TopAnime";
import AnimeFilter from "../../components/function/AnimeFilter";
import Side from "../../components/layout/SideBar/Side";

function Animes() {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="lg:w-[85%] mx-auto py-3 flex flex-col md:flex-row gap-3">
        {/* Left */}
        <div className="flex flex-col md:w-[80%] lg:w-[80%]">
          {/* Filter anime */}
          <AnimeFilter />

          {/* Top Anime Of All Time */}
          <TopAnime />
        </div>
        {/* Right */}
        <Side />
      </div>
    </>
  );
}

export default Animes;
