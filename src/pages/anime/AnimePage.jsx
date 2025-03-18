import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import getAnimeFullById from "../../api/hooks/getAnimeFullById";
import getAnimePictures from "../../api/hooks/getAnimePictures";
import getAnimeCharacters from "../../api/hooks/getAnimeCharacters";
import getAnimeVideosEpisodes from "../../api/hooks/getAnimeVideosEpisodes";

import EpisodeCard from "./components/EpisodeCard";
import AnimeRecommend from "./components/AnimeRecommend";

import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Side from "../../components/layout/SideBar/Side";

function AnimePage() {
  window.scrollTo(0, 0);

  const [shouldFetch, setShouldFetch] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldFetch(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const { id } = useParams();
  const { data: anime, isLoading } = getAnimeFullById(id);
  const { data: pictures } = getAnimePictures(id);
  const { data: characters } = getAnimeCharacters(id, shouldFetch);
  const { data: episodes } = getAnimeVideosEpisodes(id, shouldFetch);
  const [more, setMore] = useState(false);
  function handleMore() {
    setMore(!more);
  }
  const info = [
    {
      id: 1,
      title: "Schedule",
      content: "01/01/2025",
    },
    {
      id: 2,
      title: "Status",
      content: anime?.status + " - Episode " + anime?.episodes,
    },
    {
      id: 3,
      title: "Genres",
      content: anime?.genres.map((genre) => genre.name + ", "),
    },
    {
      id: 4,
      title: "Members",
      content: anime?.members.toLocaleString(),
    },
    {
      id: 5,
      title: "Studio",
      content: anime?.studios[0]?.name || "",
    },
    {
      id: 6,
      title: "Year",
      content: anime?.year,
    },
  ];

  return (
    <>
      {isLoading ? (
        <div className="h-[100vh] animate-pulse"></div>
      ) : (
        <>
          <div className="lg:w-[85%] mx-auto py-3 flex flex-col md:flex-row gap-3">
            {/* Left */}
            <div className="flex flex-col md:w-[80%] lg:w-[75%]">
              {/* Info */}
              <div className=" relative  mx-auto md:mx-0 text-gray-800 p-3">
                {pictures && (
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover rounded"
                    style={{
                      backgroundImage: `url(${pictures[1]?.webp?.large_image_url})`,
                    }}
                  ></div>
                )}
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10">
                  {/* Top */}
                  <div className="flex flex-col items-center md:flex-row md:items-start">
                    <img
                      src={anime?.images?.webp?.large_image_url}
                      alt="Top #1 anime image"
                      className="w-[250px]  object-cover"
                    />
                    <div className="p-3 ">
                      <h1 className="text-pink-400">{anime?.title}</h1>
                      <h2 className=" text-gray-100 text-xl font-semibold text-center md:text-left">
                        {anime?.title_english}
                      </h2>
                      {more ? (
                        <div>
                          <p className="text-[14px] text-gray-300 font-semibold">
                            {anime?.synopsis}
                          </p>
                          <button
                            onClick={handleMore}
                            className="text-pink-400"
                          >
                            Less
                          </button>
                        </div>
                      ) : (
                        <>
                          <p className="text-[14px] text-gray-300 font-semibold">
                            {anime?.synopsis?.slice(0, 200)}...
                          </p>

                          <button
                            onClick={handleMore}
                            className="text-pink-400"
                          >
                            Read more
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <hr className="my-3" />
                  {/* Bot */}
                  <div className="flex md:w-[450px] lg:w-[600px] bg-gradient-to-r from-gray-800  text-gray-200">
                    {/* Score */}
                    <div className="text-center my-4 mx-3 ">
                      <p className="bg-pink-400 rounded text-white text-sm p-1">
                        SCORE
                      </p>
                      <h1 className="text-2xl text-white text-center">
                        {anime.score}
                      </h1>
                      <p className="text-[10px] text-gray-300">
                        {anime.scored_by?.toLocaleString()} users
                      </p>
                    </div>

                    {/* Ranking */}
                    <div className="flex gap-5 items-center text-xl border border-gray-500 pl-5 lg:pr-16 pr-4">
                      <h2>
                        Ranked <span className="font-bold">#{anime.rank}</span>{" "}
                      </h2>
                      <h2>
                        Popularity{" "}
                        <span className="font-bold">#{anime.popularity}</span>
                      </h2>
                      <h2>
                        Favorites{" "}
                        <span className="font-bold">
                          {anime.favorites?.toLocaleString()}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className=" md:w-[95%] mx-auto md:mx-0  text-gray-800 p-1 ">
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift  text-gray-200 tabs-xl">
                  <label className="tab">
                    <input type="radio" name="my_tabs_4" defaultChecked />
                    <InfoOutlinedIcon className="mr-1" />
                    Information
                  </label>
                  <div className="tab-content bg-base-100 border-base-300 p-6 animate-fadeIn">
                    <ul>
                      {info &&
                        info.map((info) => (
                          <li className="text-gray-300 p-1" key={info.id}>
                            <AddCircleOutlineIcon className="text-pink-200" />
                            <span className=" text-gray-200 font-semibold">
                              {info.title}:
                            </span>{" "}
                            {info.content}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <label className="tab ">
                    <input type="radio" name="my_tabs_4" />
                    <InfoOutlinedIcon className="mr-1" />
                    Episodes
                  </label>
                  <div className="tab-content bg-base-100 border-base-300 p-6 animate-fadeIn">
                    {episodes &&
                      episodes.map((ep) => (
                        <EpisodeCard
                          link={ep.images.jpg.image_url}
                          title={ep.title}
                          episode={ep.episode}
                          key={ep.title}
                        />
                      ))}
                  </div>

                  <label className="tab">
                    <input type="radio" name="my_tabs_4" />
                    <PeopleAltOutlinedIcon className="mr-1" />
                    Characters
                  </label>

                  <div className="tab-content bg-base-100 border-base-300 p-6 animate-fadeIn">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {characters &&
                        characters.slice(0, 15).map((character, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center"
                          >
                            <img
                              src={character.character.images.webp.image_url}
                              alt=""
                              className="rounded-full h-[100px] w-[100px] object-cover"
                            />
                            <h2 className="mt-2 text-center">
                              {character.character.name}
                            </h2>
                          </div>
                        ))}
                    </div>
                  </div>

                  <label className="tab">
                    <input type="radio" name="my_tabs_4" />
                    <PlayArrowOutlinedIcon className="mr-1" />
                    Trailer
                  </label>
                  <div className="tab-content bg-base-100 border-base-300 p-6 animate-fadeIn">
                    {anime && (
                      <figure className="aspect-[16/9]">
                        <iframe
                          className="w-full h-full"
                          width="1044"
                          height="587"
                          src={`${anime?.trailer.embed_url}?autoplay=0`}
                          title=""
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </figure>
                    )}
                  </div>
                </div>
              </div>

              {/* Recommend */}
              <AnimeRecommend id={id} />
            </div>

            {/* Right */}
            <Side />
          </div>
        </>
      )}
    </>
  );
}

export default AnimePage;
