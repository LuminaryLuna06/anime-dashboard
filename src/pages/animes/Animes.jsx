import React, { useState, useEffect, Suspense, lazy } from "react";
import SearchAnime from "./components/SearchAnime";
import TopAnime from "./components/TopAnime";
import AnimeFilter from "../../components/function/AnimeFilter";
import Side from "../../components/layout/SideBar/Side";
import Loading from "../../components/layout/Loading";
import CardSkeleton from "../../components/ui/Skeleton/CardSkeleton";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AnimeFilter2 from "../../components/function/AnimeFilter2";

const LazyAnime = lazy(() => import("../../components/function/AnimeFilter"));

function Animes() {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="lg:w-[85%] mx-auto py-3 flex flex-col md:flex-row gap-3">
        {/* Left */}
        <div className="flex flex-col md:w-[80%] lg:w-[75%]">
          {/* Filter anime */}
          <Suspense
            fallback={
              <div>
                <div className="md:flex md:justify-between mx-5">
                  <div className="">
                    <h1>Use filter for better result!</h1>
                    <div className="flex gap-4">
                      <h2 className="font-semibold text-xl text-gray-400">
                        There are
                      </h2>
                      <div className="h-5 w-28 bg-gray-400 animate-pulse"></div>{" "}
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="border-2 rounded-lg py-3 px-6  border-pink-300 hover:bg-pink-300 font-semibold items-center">
                      Filter <FilterAltOutlinedIcon />
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-8 w-96 bg-gray-400 animate-pulse my-7"></div>
                </div>
                <div className="flex flex-wrap items-start mx-auto">
                  <CardSkeleton cards={12} />
                </div>
              </div>
            }
          >
            {/* <LazyAnime /> */}
            {/* <AnimeFilter /> */}
            <AnimeFilter2 />
          </Suspense>

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
