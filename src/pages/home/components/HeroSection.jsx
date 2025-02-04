import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

const HeroSection = () => {
  return (
    <div className="relative md:h-screen h-[600px] flex items-center justify-center bg-gradient-to-r from-black to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          // src="https://preview.redd.it/official-solo-leveling-season-2-key-visual-wallpaper-v0-goqp4kgqh3pd1.png?width=2048&format=png&auto=webp&s=5dc245787247215e52960a373440db0069014811"
          src="hero.webp"
          alt="Hero Background"
          className="object-cover w-full h-full opacity-50 object-left"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center z-10 max-w-4xl text-center px-4 text-white ">
        {/* Title */}
        <div className="flex justify-center">
          <img
            src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-Logo.png"
            alt=""
            className="md:w-[60%] w-[80%]"
          />
        </div>

        {/* Description */}
        <p className="mt-4 text-lg leading-relaxed">
          They say whatever doesn’t kill you makes you stronger, but that’s not
          the case for the world’s weakest hunter, Sung Jinwoo. After being
          brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo
          came back with the System, a program only he could see, that’s
          leveling him up in every way.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex items-center justify-center space-x-4">
          <Button content={"Watch Trailer"} link={"/anime/58567"} />
          <button className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v16l7-5 7 5V3z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
