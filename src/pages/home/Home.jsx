import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Trending from "./components/Trending";
import UpcomingAnime from "./components/UpcomingAnime";
import Side from "../../components/layout/SideBar/Side";
import Loading from "../../components/layout/Loading";
import HeroSlider from "./components/HeroSlider";

const LazyHero = lazy(() => delay(import("./components/HeroSlider")));

function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <Suspense
        fallback={
          <div className="h-screen flex flex-col items-center justify-center bg-background z-50 text-text-secondary">
            <span className="loading loading-ring loading-xl"></span>
            <h1 className="text-2xl font-bold">Loading...</h1>
          </div>
        }
      >
        <LazyHero />
      </Suspense>

      {/* <HeroSlider /> */}
      <div className="mx-auto py-3 flex flex-col md:flex-row gap-3 w-[95%]">
        {/* Left */}
        <div className="flex flex-col md:w-[80%] lg:w-[75%]">
          <div>
            <Trending />
          </div>

          {/* Banner */}
          <div className="my-5">
            <Link key={48549} to={`/anime/48549`}>
              <img src="banner.avif" alt="Dr.Stone" />
            </Link>
          </div>
          <div>
            <UpcomingAnime />
          </div>
        </div>
        {/* Right */}
        <Side />
      </div>
    </>
  );
}

function delay(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
export default Home;
