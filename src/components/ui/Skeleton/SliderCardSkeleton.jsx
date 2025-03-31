import React from "react";
import Slider from "react-slick";
import "../Cards/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSkeleton from "./CardSkeleton";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

function SliderCardSkeleton({ cards }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-4 m-auto">
      <Slider {...settings} className="lg:h-[400px] h-[300px]">
        {Array(cards)
          .fill(0)
          .map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:w-[30%] lg:w-[15%] w-[45%] relative container p-2"
            >
              <div className="aspect-[2/3] flex justify-center items-center p-3 h-full  animate-pulse bg-gray-700">
                <ImageOutlinedIcon className="m-auto" fontSize="large" />
              </div>
              <div className="my-2">
                <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
                <div className="h-4 w-1/2 bg-gray-300 rounded-full mb-4"></div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default SliderCardSkeleton;
