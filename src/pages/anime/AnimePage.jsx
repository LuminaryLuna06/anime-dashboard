import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { getDocs, doc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import setFav from "../../pages/favourites/components/setFav";

import getAnimeFullById from "../../api/hooks/getAnimeFullById";
import getAnimePictures from "../../api/hooks/getAnimePictures";
import getAnimeCharacters from "../../api/hooks/getAnimeCharacters";
import getAnimeVideosEpisodes from "../../api/hooks/getAnimeVideosEpisodes";

import EpisodeCard from "./components/EpisodeCard";
import AnimeRecommend from "./components/AnimeRecommend";

import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import Side from "../../components/layout/SideBar/Side";

const getFav = async (userId, animeId) => {
  try {
    const data = await getDocs(collection(db, "users", userId, "favourites"));
    let isAdded = false;
    data.forEach((doc) => {
      if (doc.data().uid === animeId) {
        isAdded = true;
      }
    });
    return isAdded;
  } catch (error) {
    console.log(error);
  }
};

function AnimePage() {
  window.scrollTo(0, 0);

  const [shouldFetch, setShouldFetch] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldFetch(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const { currentUser } = useAuth();
  const { id } = useParams();
  const { data: anime, isLoading } = getAnimeFullById(id);
  const { data: characters, isLoading: isCharacterLoading } =
    getAnimeCharacters(id, shouldFetch);
  const { data: episodes, isLoading: isEpisodeLoading } =
    getAnimeVideosEpisodes(id, shouldFetch);
  const [more, setMore] = useState(false);
  function handleMore() {
    setMore(!more);
  }
  const currentEpisode = episodes && episodes[0] && episodes[0].episode || "--";
  const limitEpisode = anime?.episodes  === null ? "--" : anime?.episodes;
  const info = [
    {
      id: 1,
      title: "Schedule",
      content: anime?.aired.string,
    },
    {
      id: 2,
      title: "Status",
      content: anime?.status + " - " + currentEpisode + "/" + limitEpisode,
    },
    {
      id: 3,
      title: "Genres",
      content: anime?.genres.map((genre) => genre.name.toString()).join(", "),
    },
    {
      id: 4,
      title: "Themes",
      content: anime?.themes.map((theme) => theme.name.toString()).join(", "),
    },
    {
      id: 5,
      title: "Members",
      content: anime?.members.toLocaleString(),
    },
    {
      id: 6,
      title: "Studio",
      content: anime?.studios[0]?.name || "",
    },
    {
      id: 7,
      title: "Year",
      content: anime?.year,
    },
    {
      id: 8,
      title: "Duration",
      content: anime?.duration,
    },
    {
      id: 9,
      title: "Type",
      content: anime?.type,
    },
  ];
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const checkIfAdded = async () => {
      if (anime && currentUser) {
        const isAdded = await getFav(currentUser.uid, anime.mal_id);
        setAdded(isAdded);
      }
    };
    checkIfAdded();
  }, [anime, currentUser]);
  const handleAddToFavourites = () => {
    if (anime && currentUser) {
      setFav(anime, currentUser.uid);
      setAdded(true); // Update the state to reflect the change
    }
  };
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
                {anime && (
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover rounded"
                    style={{
                      backgroundImage: `url(${anime.images.webp.large_image_url})`,
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
                      <h1 className="text-blossoms-200">{anime?.title}</h1>
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
                            className="text-blossoms-200"
                          >
                            Read more
                          </button>
                        </>
                      )}
                      {/* {anime && currentUser && added ? (
                        <button
                          className="px-4 py-2 my-2 rounded bg-pink-300 text-pink-800 hover:bg-pink-700 hover:text-gray-200 transition-all duration-300 block"
                          onClick={() => {
                            setFav(anime, currentUser.uid);
                            setAdded(true);
                          }}
                        >
                          Add To Favourites <BookmarkBorderOutlinedIcon />
                        </button>
                      ) : (
                        <button className="px-4 py-2 my-2 rounded bg-pink-300 text-pink-800 hover:bg-pink-700 hover:text-gray-200 transition-all duration-300 block">
                          Added To Favourites <BookmarkBorderOutlinedIcon />
                        </button>
                      )} */}
                      {added ? (
                        <button
                          className="px-4 py-2 my-2 rounded bg-gray-300 text-gray-800 block"
                          disabled
                        >
                          Added To Favourites <BookmarkBorderOutlinedIcon />
                        </button>
                      ) : (
                        <button
                          className="px-4 py-2 my-2 rounded bg-blossoms-200 text-pink-800 hover:bg-pink-700 hover:text-gray-200 transition-all duration-300 block"
                          onClick={handleAddToFavourites}
                        >
                          Add To Favourites <BookmarkBorderOutlinedIcon />
                        </button>
                      )}
                    </div>
                  </div>
                  <hr className="my-3" />
                  {/* Bot */}
                  <div className="flex md:w-[450px] lg:w-[600px] bg-gradient-to-r from-gray-800  text-gray-200">
                    {/* Score */}
                    {anime && (
                      <div className="text-center my-4 mx-3 ">
                        <p className="bg-blossoms-200 rounded text-white text-sm p-1">
                          SCORE
                        </p>
                        <h1 className="text-2xl text-white text-center">
                          {anime.score}
                        </h1>
                        <p className="text-[10px] text-gray-300">
                          {anime.scored_by?.toLocaleString()} users
                        </p>
                      </div>
                    )}

                    {/* Ranking */}
                    {anime && (
                      <div className="flex gap-5 items-center text-xl border border-gray-500 pl-5 lg:pr-16 pr-4">
                        <h2>
                          Ranked{" "}
                          <span className="font-bold">#{anime.rank}</span>{" "}
                        </h2>
                        <h2>
                          Popularity{" "}
                          <span className="font-bold">#{anime.popularity}</span>
                        </h2>
                        <h2>
                          Favorites{" "}
                          <span className="font-bold">
                            {anime?.favorites?.toLocaleString()}
                          </span>
                        </h2>
                      </div>
                    )}
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
                            <InfoOutlinedIcon className="text-blossoms-100 mx-1" />
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
                    <ImportContactsIcon className="mr-1" />
                    Episodes
                  </label>
                  <div className="tab-content bg-base-100 border-base-300 p-6 animate-fadeIn">
                    {isEpisodeLoading
                      ? "Loading..."
                      : episodes?.map((ep) => (
                          <EpisodeCard
                            link={ep.images.jpg.image_url}
                            title={ep.title}
                            episode={ep.episode}
                            key={ep.title}
                            url={`/anime/${id}/episodes/${ep.mal_id}`}
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
                      {isCharacterLoading
                        ? "No data"
                        : characters?.slice(0, 15).map((character, index) => (
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
                    {anime && anime?.trailer.embed_url ? (
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
                    ) : (
                      "No data"
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
