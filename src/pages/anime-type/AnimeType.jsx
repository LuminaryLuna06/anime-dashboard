import React, { useState } from "react";
import getAnime from "../../api/hooks/getAnime";
import Cards from "../../components/ui/Cards/Cards";
import Button from "../../components/ui/Button";
import Pagination from "../../components/ui/Pagination/Pagination";
import CardSkeleton from "../../components/ui/Skeleton/CardSkeleton";

import genres from "../genres/assets/genres";
import types from "./assets/type";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import WhatshotIcon from "@mui/icons-material/Whatshot";

function AnimeType() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    type: "",
    genres: [],
    start_date: "",
    end_date: "",
  });

  const [option, setOption] = useState({
    limit: 12,
    sfw: true,
  });
  const { data: animes, isLoading } = getAnime(option);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        genres: checked
          ? [...prev.genres, Number(value)] // Convert value to number if mal_id is a number
          : prev.genres.filter((id) => id !== Number(value)),
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleYearChange = (e) => {
    const year = e.target.value;

    setFilters((prev) => ({
      ...prev,
      start_date: year ? `${year}-01-01` : "", // "YYYY-01" or empty
      end_date: year ? `${year}-12-31` : "", // "YYYY-12" or empty
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formatted Value:", filters);
    setOption((prevOption) => ({
      ...prevOption,
      ...filters,
      genres: filters.genres.join(","),
    }));
    console.log(option);
  };

  function handleSort(sort) {
    setOption((prevOption) => ({
      ...prevOption,
      order_by: "title",
      sort: sort,
    }));
  }

  console.log(option);

  return (
    <>
      <div>
        <button
          className="border-2 rounded-lg py-3 px-6  border-pink-300 hover:bg-pink-300 font-semibold"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Filter anime
        </button>
      </div>
      {isOpen && (
        <div className="h-[500px] w-[80%] mx-auto bg-white rounded-lg my-2">
          <form action="" className="flex text-gray-800 p-2">
            {/* Left */}
            <div className="w-[200px] flex flex-col p-2">
              <h2 className="font-semibold text-xl text-center">Sort by</h2>
              <button
                className="text-left bg-gray-200 p-2 hover:text-pink-800 hover:bg-pink-200 transition-all rounded-md my-1"
                onClick={() => handleSort("asc")}
              >
                <TrendingUpIcon />
                Asc Title
              </button>
              <button
                className="text-left bg-gray-200 p-2 hover:text-pink-800 hover:bg-pink-200 transition-all rounded-md my-1"
                onClick={() => handleSort("desc")}
              >
                <TrendingDownIcon />
                Desc Title
              </button>
              <button
                className="text-left bg-gray-200 p-2 hover:text-pink-800 hover:bg-pink-200 transition-all rounded-md my-1"
                onClick={() => {
                  setOption((prevOption) => ({
                    ...prevOption,
                    order_by: "members",
                    sort: "desc",
                  }));
                }}
              >
                <RemoveRedEyeIcon />
                Most View
              </button>
              <button
                className="text-left bg-gray-200 p-2 hover:text-pink-800 hover:bg-pink-200 transition-all rounded-md my-1"
                onClick={(e) => {
                  e.preventDefault();
                  setOption((prevOption) => ({
                    ...prevOption,
                    order_by: "start_date",
                    sort: "desc",
                  }));
                }}
              >
                <WhatshotIcon />
                Newest
              </button>
            </div>
            {/* Right */}
            <div className="flex flex-col w-full gap-5">
              {/* Type Selection */}
              <fieldset>
                <legend className="text-xl font-semibold">Type:</legend>
                <label key={"all"}>
                  <input
                    className=""
                    type="radio"
                    name="type"
                    value={""}
                    checked={filters.type === ""}
                    onChange={handleChange}
                  />
                  {" All"}
                </label>
                {types.map((type) => (
                  <label className="px-2" key={type.name}>
                    <input
                      type="radio"
                      name="type"
                      value={type.value}
                      checked={filters.type === type.value}
                      onChange={handleChange}
                    />
                    {` ${type.name}`}
                  </label>
                ))}
              </fieldset>
              {/* Genre Selection */}
              <fieldset>
                <legend className="text-xl font-semibold">Genres:</legend>
                {genres.map((genre) => (
                  <label className="mx-2" key={genre.name}>
                    <input
                      type="checkbox"
                      name="genres"
                      value={genre.mal_id}
                      checked={filters.genres.includes(genre.mal_id)}
                      onChange={handleChange}
                    />
                    {` ${genre.name}`}
                  </label>
                ))}
              </fieldset>
              {/* Year Selection */}
              <fieldset>
                <legend className="text-xl font-semibold">Release Year:</legend>
                <label>
                  <input
                    type="radio"
                    name="year"
                    value=""
                    checked={filters.start_date === ""} // No year selected
                    onChange={handleYearChange}
                  />
                  All
                </label>

                {[2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
                  <label className="mx-2" key={year}>
                    <input
                      type="radio"
                      name="year"
                      value={year}
                      checked={filters.start_date === `${year}-01-01`}
                      onChange={handleYearChange}
                    />
                    {` ${year}`}
                  </label>
                ))}
              </fieldset>
              {/* Submit Button */}
              <button
                className="bg-gray-200 p-2 hover:text-pink-800 hover:bg-pink-200 transition-all rounded-md my-1"
                onClick={handleSubmit}
              >
                Sort Anime
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="flex flex-wrap items-start ">
        {isLoading ? (
          <CardSkeleton cards={6} />
        ) : (
          animes.map((anime) => <Cards key={anime.mal_id} props={anime} />)
        )}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={3} />
    </>
  );
}

export default AnimeType;
