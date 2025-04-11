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
    autoplay: true,
    autoplaySpeed: 8000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="h-[95vh] md:h-auto lg:h-[95vh] bg-SoloLeveling bg-no-repeat bg-cover">
          <div className="h-[95vh] md:h-auto lg:h-[95vh] bg-gradient-to-t md:bg-gradient-to-l from-black/100 md:via-black/80 via-black/60 to-transparent flex flex-row-reverse">
            <div className="flex flex-col justify-end md:justify-center z-10 md:w-[40%] max-w-4xl text-left px-4 py-10 text-white ">
              {/* Title */}
              <div className="flex justify-center">
                <img
                  src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-Logo.png"
                  alt=""
                  className="md:w-[60%] w-[80%]"
                />
              </div>

              {/* Description */}
              <p className="mt-4 text-lg text-gray-200 leading-relaxed hidden md:block">
                They say whatever doesn’t kill you makes you stronger, but
                that’s not the case for the world’s weakest hunter, Sung Jinwoo.
                After being brutally slaughtered by monsters in a high-ranking
                dungeon, Jinwoo came back with the System, a program only he
                could see, that’s leveling him up in every way.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex items-center justify-center space-x-4">
                <Button content={"Watch Now"} link={"/anime/58567"} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[95vh] md:h-auto lg:h-[95vh] bg-Shangrila bg-center bg-cover md:bg-right md:bg-contain bg-no-repeat">
          <div className=" h-[95vh] md:h-auto lg:h-[95vh] bg-gradient-to-t md:bg-gradient-to-r from-black/100 md:via-black/90 via-black/70 to-transparent flex md:w-2/3">
            <div className="md:bg-gradient-to-r md:from-black/100 md:via-black/90 md:to-transparent flex flex-col justify-end md:justify-center z-10 md:w-1/2 max-w-4xl text-left px-4 py-10 text-white ">
              {/* Title */}
              <div className="flex justify-center">
                <img
                  src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/CurationAssets/Shangri-La%20Frontier/SEASON%202/ULTRA-WIDE/ShangriLaFrontier-S2-KV1-Logo-EN.png"
                  alt=""
                  className="md:w-[60%] w-[80%]"
                />
              </div>

              {/* Description */}
              <p className="mt-4 text-lg text-gray-200 leading-relaxed hidden md:block">
                Ever since Rakurou "Sunraku" Hizutome started to play the
                extremely popular virtual reality game Shangri-La Frontier, he
                has truly fallen in love with it. Sunraku has quickly made a big
                name for himse...
              </p>

              {/* Buttons */}
              <div className="mt-6 flex items-center justify-center space-x-4">
                <Button content={"Watch Now"} link={"/anime/58572"} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[95vh] md:h-auto lg:h-[95vh] bg-Rezero bg-center bg-cover md:bg-right md:bg-contain bg-no-repeat">
          <div className="h-[95vh] md:h-auto lg:h-[95vh] bg-gradient-to-t md:bg-gradient-to-r from-black/100 md:via-black/90 via-black/70 to-transparent flex md:w-2/3">
            <div className="md:bg-gradient-to-r md:from-black/100 md:via-black/90 md:to-transparent flex flex-col justify-end md:justify-center z-10 md:w-1/2 max-w-4xl text-left px-4 py-10 text-white ">
              {/* Title */}
              <div className="flex justify-center">
                <img
                  src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/CurationAssets/ReZERO/SEASON%203/ULTRA-WIDE/ReZero-S3C1-KV1-UW-Logo-ENG.png"
                  alt=""
                  className="md:w-[60%] w-[80%]"
                />
              </div>

              {/* Description */}
              <p className="mt-4 text-lg text-gray-200 leading-relaxed hidden md:block">
                One year after the events at the Sanctuary, Subaru Natsuki
                trains hard to better face future challenges. The peaceful days
                come to an end when Emilia receives an invitation to a meeting
                in the Waterga...
              </p>

              {/* Buttons */}
              <div className="mt-6 flex items-center justify-center space-x-4">
                <Button content={"Watch Now"} link={"/anime/54857"} />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HeroSlider;
