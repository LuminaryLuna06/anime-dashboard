import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Trending from "./components/Trending";
import UpcomingAnime from "./components/UpcomingAnime";

function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <HeroSection />
      <Trending />

      {/* Banner */}
      <div className="my-5">
        <Link key={48549} to={`/anime/48549`}>
          <img src="banner.avif" alt="Dr.Stone" />
        </Link>
      </div>

      <UpcomingAnime />
    </>
  );
}

export default Home;
