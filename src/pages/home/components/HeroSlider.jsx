import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../../components/ui/Button";

function HeroSlider() {
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="h-[100vh] bg-[url(hero.webp)]">
          <div className="h-[100vh] bg-gradient-to-l from-black/100 via-black/80 to-transparent flex flex-row-reverse">
            <div className="flex flex-col justify-center z-10 w-[50%] max-w-4xl text-left px-4 text-white ">
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
                They say whatever doesn’t kill you makes you stronger, but
                that’s not the case for the world’s weakest hunter, Sung Jinwoo.
                After being brutally slaughtered by monsters in a high-ranking
                dungeon, Jinwoo came back with the System, a program only he
                could see, that’s leveling him up in every way.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex items-center justify-center space-x-4">
                <Button content={"Watch Now"} link={"/anime/58567"} />
                {/* <button className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-4 rounded-lg">
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
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100vh] bg-[url(hero.webp)]">
          <div className="h-[100vh] bg-gradient-to-r from-black/100 via-black/80 to-transparent flex">
            <div className="flex flex-col justify-center z-10 w-[50%] max-w-4xl text-left px-4 text-white ">
              {/* Title */}
              <div className="flex justify-center">
                <img
                  src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/CurationAssets/Shangri-La%20Frontier/SEASON%202/ULTRA-WIDE/ShangriLaFrontier-S2-KV1-Logo-EN.png"
                  alt=""
                  className="md:w-[60%] w-[80%]"
                />
              </div>

              {/* Description */}
              <p className="mt-4 text-lg leading-relaxed">
                They say whatever doesn’t kill you makes you stronger, but
                that’s not the case for the world’s weakest hunter, Sung Jinwoo.
                After being brutally slaughtered by monsters in a high-ranking
                dungeon, Jinwoo...
              </p>

              {/* Buttons */}
              <div className="mt-6 flex items-center justify-center space-x-4">
                <Button content={"Watch Now"} link={"/anime/58567"} />
                {/* <button className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-4 rounded-lg">
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
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <img src={baseUrl + "/abstract03.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/abstract04.jpg"} />
        </div> */}
      </Slider>
    </div>
  );
}

export default HeroSlider;
