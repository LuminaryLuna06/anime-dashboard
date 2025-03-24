import React, { useEffect, useState } from "react";
import getAnime from "../../api/hooks/getAnime";
import Cards from "../../components/ui/Cards/Cards";
import Pagination from "../../components/ui/Pagination/Pagination";
import CardSkeleton from "../../components/ui/Skeleton/CardSkeleton";

import genres from "../../assets/genres";
import types from "../../assets/type";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import WhatshotIcon from "@mui/icons-material/Whatshot";

function AnimeFilter({
  initialFilters = {
    q: "",
    type: "",
    genres: [],
    start_date: "",
    end_date: "",
  },
  initialOption = {
    limit: 12,
    sfw: true,
    page: 1,
  },
  totalPages = 3,
  query,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(initialOption.page);
  const [filters, setFilters] = useState(initialFilters);
  const [option, setOption] = useState(initialOption);

  useEffect(() => {
    setOption((prevOption) => ({
      ...prevOption,
      page: page,
    }));
  }, [page]);
  useEffect(() => {
    setOption((prevOption) => ({
      ...prevOption,
      q: query,
      page: 1,
    }));
    setPage(1);
  }, [query]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        genres: checked
          ? [...prev.genres, Number(value)]
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
      start_date: year ? `${year}-01-01` : "",
      end_date: year ? `${year}-12-31` : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOption((prevOption) => ({
      ...prevOption,
      ...filters,
      genres: filters.genres.join(","),
    }));
    setPage(1);
  };

  function handleSort(sort) {
    setOption((prevOption) => ({
      ...prevOption,
      order_by: "title",
      sort: sort,
    }));
  }
  console.log(option);
  const { data: animes, isLoading } = getAnime(option);
  return (
    <>
      <div className="md:flex md:justify-between mx-5">
        <h1>Use filter for better result!</h1>
        <div className="flex justify-center items-center">
          <button
            className="border-2 rounded-lg py-3 px-6  border-pink-300 hover:bg-pink-300 font-semibold items-center"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Filter
          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" w-[80%] mx-auto bg-white rounded-lg my-2">
          <form
            action=""
            className="flex flex-col md:flex-row text-gray-800 p-2"
          >
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
            <div className="flex flex-col w-full gap-5 p-2">
              {/* Type Selection */}
              <fieldset className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2">
                <legend className="text-xl font-semibold">Type:</legend>
                <label key={"all"} className="px-2">
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
              <fieldset className="grid lg:grid-cols-4 grid-cols-3">
                <legend className="text-xl font-semibold">Genres:</legend>
                {genres.map((genre) => (
                  <label className="mx-2 flex" key={genre.name}>
                    <input
                      type="checkbox"
                      name="genres"
                      value={genre.mal_id}
                      checked={filters.genres.includes(genre.mal_id)}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    {` ${genre.name}`}
                  </label>
                ))}
              </fieldset>
              {/* Year Selection */}
              <fieldset className=" grid grid-cols-3">
                <legend className="text-xl font-semibold">Release Year:</legend>
                <label className="mx-2">
                  <input
                    type="radio"
                    name="year"
                    value=""
                    checked={filters.start_date === ""} // No year selected
                    onChange={handleYearChange}
                  />
                  {` All`}
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
      <div>
        <div className="flex flex-wrap items-start mx-auto">
          {isLoading ? (
            // <div className="h-[100vh]">
            <CardSkeleton cards={12} />
          ) : (
            // </div>
            animes.map((anime) => <Cards key={anime.mal_id} props={anime} />)
          )}
        </div>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </>
  );
}

export default AnimeFilter;
