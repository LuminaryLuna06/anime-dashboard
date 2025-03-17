import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

import getAnimeFullById from "../../api/hooks/getAnimeFullById";
import getAnimePictures from "../../api/hooks/getAnimePictures";
import getAnimeCharacters from "../../api/hooks/getAnimeCharacters";

import Button from "../../components/ui/Button";

import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function AnimePage() {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const { data: anime, isLoading } = getAnimeFullById(id);
  const { data: pictures } = getAnimePictures(id);
  const { data: characters } = getAnimeCharacters(id);
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
          <div className="md:w-[80%] mx-auto p-3 flex">
            <div className="flex flex-col">
              <div className=" relative w-[90%] md:w-[60%] mx-auto md:mx-0 text-gray-800 p-3">
                {pictures && (
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover rounded"
                    style={{
                      backgroundImage: `url(${pictures[1]?.webp?.large_image_url})`,
                    }}
                  ></div>
                )}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                  {/* Top */}
                  <div className="flex flex-col items-center md:flex-row md:items-start">
                    <img
                      src={anime?.images?.webp?.large_image_url}
                      alt="Top #1 anime image"
                      className="w-[250px] lg:w-1/5 object-cover"
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
                          <div className="mx-auto my-3">
                            <Button
                              content={"Watch Trailer"}
                              link={`/anime/${anime.mal_id}`}
                            />
                          </div>
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
              <div className=" md:w-[60%] mx-auto md:mx-0  text-gray-800 p-1 ">
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift  text-gray-200 tabs-xl">
                  <label className="tab">
                    <input type="radio" name="my_tabs_4" defaultChecked />
                    <InfoOutlinedIcon className="mr-1" />
                    Information
                  </label>
                  <div className="tab-content bg-base-100 border-base-300 p-6 animate-fadeIn">
                    <ul>
                      {info.map((info) => (
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
                  <div className="tab-content bg-base-100 border-base-300 p-6 animate-fadeIn"></div>

                  <label className="tab">
                    <input type="radio" name="my_tabs_4" />
                    <PeopleAltOutlinedIcon className="mr-1" />
                    Characters
                  </label>
                  <div className="tab-content bg-base-100 border-base-300 p-6 animate-fadeIn">
                    {characters?.map(
                      (character) => character.character.name + " "
                    )}
                  </div>

                  <label className="tab">
                    <input type="radio" name="my_tabs_4" />
                    <PlayArrowOutlinedIcon className="mr-1" />
                    Trailer
                  </label>
                  <div className="tab-content bg-base-100 border-base-300 p-6 animate-fadeIn">
                    <figure className="aspect-[16/9]">
                      <iframe
                        className="w-full h-full"
                        width="1044"
                        height="587"
                        src={anime?.trailer.embed_url}
                        title=""
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </>
      )}
    </>
  );
}

export default AnimePage;

// <>
//   <div className="w-full lg:w-[60%] md:w-[80%]  h-full mx-auto mt-5">
//     <figure className="aspect-[16/9]">
//       <iframe
//         className="w-full h-full"
//         width="1044"
//         height="587"
//         src={anime?.trailer.embed_url}
//         title=""
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//       ></iframe>
//     </figure>

//     <div className="flex flex-col gap-3 my-5 px-2">
//       <h1 className="text-3xl font-bold">{anime?.title}</h1>
//       <p className="text-lg font-thin text-left">
//         {anime?.aired?.from
//           ? new Date(anime.aired.from).getFullYear()
//           : "unknown"}
//         &nbsp; - &nbsp;
//         {anime?.episodes ?? "N/A"} eps &nbsp; - ⭐ {anime?.score}
//         &nbsp; - 🏆 top #{anime?.rank}
//       </p>
//       <div className="flex flex-row gap-2">
//         {anime?.genres?.map((genre, index) => (
//           <div
//             key={index}
//             className="badge border-pink-400 text-pink-400 badge-outline"
//           >
//             {genre.name}
//           </div>
//         )) || (
//           <div className="badge badge-secondary badge-outline">N/A</div>
//         )}
//       </div>
//       <p className="font-thin mt-3 text-left">{anime?.synopsis}...</p>
//     </div>
//   </div>
// </>
