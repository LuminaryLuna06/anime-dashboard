import React, { useEffect, useState } from "react";
import getTopAnimeFilter from "../../api/hooks/getTopAnimeFilter";
import { Link, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Side from "../../components/layout/SideBar/Side";

function TopAnime() {
  const [option, setOption] = useState({
    sfw: true,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const selected = JSON.parse(e.target.value);
    setOption((prev) => ({
      ...prev,
      ...selected,
    }));
  };

  const { data, isLoading } = getTopAnimeFilter(option);
  window.scrollTo(0, 0);

  return (
    <>
      <div className="tabs tabs-border w-[90%] mx-auto">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="All Anime"
          value='{"type": "", "filter": ""}'
          onChange={handleChange}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Top Airing"
          value='{"type": "", "filter": "airing"}'
          onChange={handleChange}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Top Upcoming"
          value='{"type": "", "filter": "upcoming"}'
          onChange={handleChange}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Top TV Series"
          value='{"type": "tv", "filter": ""}'
          onChange={handleChange}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Top Movies"
          value='{"type": "movie", "filter": ""}'
          onChange={handleChange}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Most Favorited"
          value='{"type": "", "filter": "favorite"}'
          onChange={handleChange}
        />
      </div>
      {isLoading ? (
        <div className="h-[100vh] lg:w-[85%]"></div>
      ) : (
        <div className="lg:w-[85%] mx-auto py-3 flex flex-col md:flex-row gap-3">
          {/* Left */}
          <div className="overflow-x-auto flex flex-col md:w-[80%] lg:w-[75%] mx-auto animate-fadeIn">
            <h1>Top anime series</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Title</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((anime, index) => (
                    <tr
                      key={index}
                      onClick={() => {
                        navigate(`/anime/${anime.mal_id}`);
                      }}
                      className="cursor-pointer hover:bg-gray-900"
                    >
                      <th className="text-4xl">{index + 1}</th>
                      <td className="font-bold text-xl">
                        <div className="flex">
                          <img
                            src={anime.images.webp.large_image_url}
                            alt=""
                            className="h-28 w-20 object-cover"
                          />
                          <div className="p-3">
                            <h2>{anime.title}</h2>
                            <p className="text-sm font-normal text-gray-400">
                              {anime.type} ({anime.episodes} eps)
                            </p>
                            <p className="text-sm font-normal text-gray-400">
                              {anime.year || "NaN"}
                            </p>
                            <p className="text-sm font-normal text-gray-400">
                              {anime.members} members
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="font-bold text-xl ">
                        <div className="flex items-center">
                          <StarIcon className="text-yellow-400" />
                          {anime.score}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* Right */}
          <Side />
        </div>
      )}
    </>
  );
}

export default TopAnime;
