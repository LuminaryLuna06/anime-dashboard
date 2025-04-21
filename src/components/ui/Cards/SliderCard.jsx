import React from "react";
import Slider from "react-slick";
import "./style.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderCard({ props }) {
  const truncateTitle = (title, maxLength) => {
    if (title?.length > maxLength) {
      return `${title?.slice(0, maxLength)}...`;
    }
    return title;
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="p-4 m-auto">
      <Slider {...settings} className="lg:h-[500px] h-[400px]">
        {props &&
          props.map((anime) => (
            <div
              className="flex flex-col md:w-[30%] lg:w-[15%] w-[45%]   relative container animate-fadeIn p-2"
              key={anime.mal_id || anime.uid}
            >
              <Link
                key={anime?.mal_id}
                to={`/anime/${anime?.mal_id || anime.uid}`}
              >
                <div className="aspect-[2/3] flex">
                  <img
                    src={anime?.images?.webp.large_image_url || anime.image}
                    alt=""
                    className="aspect-[2/3] object-cover"
                  />
                </div>
                <div className="overlay">
                  <div className="text flex-col">
                    <p className="font-bold text-text">
                      {truncateTitle(anime?.title, 50)}
                    </p>
                    {anime.score || anime.year ? (
                      <p className="text-sm text-text-secondary">
                        ⭐ {anime?.score || "--"} - 🗓 {anime?.year || "--"}
                      </p>
                    ) : null}
                    {anime.synopnis ? (
                      <p className="text-sm my-2">{`${anime?.synopsis?.slice(
                        0,
                        70
                      )}...`}</p>
                    ) : null}
                  </div>
                </div>
                <div className="my-2">
                  <h4 className="font-semibold text-text">
                    {truncateTitle(anime?.title, 50)}
                  </h4>
                  <p className="text-text-secondary/95">
                    ⭐ {anime?.score || "--"} - 🗓 {anime?.year || "--"}
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default SliderCard;
