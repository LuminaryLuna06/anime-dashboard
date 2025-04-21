import React, { useEffect, useState, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import getAnime from "../../api/hooks/getAnime";
import Cards from "../../components/ui/Cards/Cards";
import CardSkeleton from "../../components/ui/Skeleton/CardSkeleton";
import Pagination2 from "../ui/Pagination/Pagination2";

import genres from "../../assets/genres";
import types from "../../assets/type";

import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

function AnimeFilter2() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({});
  const [subFilters, setSubFilters] = useState({
    q: params.get("q") || "",
    type: params.get("type") || "",
    genres: params.get("genres")
      ? params.get("genres").split(",").map(Number)
      : [],
    start_date: params.get("start_date") || "",
    end_date: params.get("end_date") || "",
    sfw: true,
    page: Number(params.get("page")) || 1,
    order_by: params.get("order_by") || "",
    sort: params.get("sort") || "",
  });
  const [page, setPage] = useState(Number(params.get("page")) || 1);
  // Chay khi url thay doi
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const newFilters = {
      q: params.get("q") || "",
      type: params.get("type") || "",
      genres: params.get("genres") || "",
      start_date: params.get("start_date") || "",
      end_date: params.get("end_date") || "",
      sfw: true,
      page: Number(params.get("page")) || 1,
      order_by: params.get("order_by") || "",
      sort: params.get("sort") || "",
    };
    setFilters(newFilters);
    const newSubFilters = {
      q: params.get("q") || "",
      type: params.get("type") || "",
      genres: params.get("genres")
        ? params.get("genres").split(",").map(Number)
        : [],
      start_date: params.get("start_date") || "",
      end_date: params.get("end_date") || "",
      sfw: true,
      page: Number(params.get("page")) || 1,
      order_by: params.get("order_by") || "",
      sort: params.get("sort") || "",
    };
    setSubFilters(newSubFilters);
    const urlPage = Number(params.get("page")) || 1;
    if (urlPage !== page) {
      setPage(urlPage);
    }
    setIsOpen(true); //-------->
  }, [location.search]);
  // Chuyen trang
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.set("page", page);
    navigate({ search: params.toString() }, { replace: true });
  }, [page]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setSubFilters((prev) => ({
        ...prev,
        genres: checked
          ? [...prev.genres, Number(value)]
          : prev.genres.filter((id) => id !== Number(value)),
      }));
    } else {
      setSubFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleYearChange = (e) => {
    const year = e.target.value;

    setSubFilters((prev) => ({
      ...prev,
      start_date: year ? `${year}-01-01` : "",
      end_date: year ? `${parseInt(year) + 1}-06-30` : "",
    }));
  };

  const handleSubmit = (e, newOption = null) => {
    if (e) e.preventDefault();
    const finalFilter = newOption || {
      ...subFilters,
      genres: subFilters.genres.join(","),
    };
    setPage(1);
    setIsOpen(false);

    const params = new URLSearchParams();
    Object.keys(finalFilter).forEach((key) => {
      if (finalFilter[key]) {
        params.append(key, finalFilter[key]);
      }
    });
    navigate({ search: params.toString() });
  };
  function handleSort(sort) {
    const newOption = {
      ...subFilters,
      order_by: "title",
      sort: sort,
    };
    handleSubmit(null, newOption);
  }

  const { data, isLoading } = getAnime(filters);
  const uniqueAnimes = data && data[0];
  const pagination = data && data[1];

  return (
    <>
      <div className="md:flex md:justify-between mx-5 text-text">
        <div className="">
          <h1>Use filter for better result!</h1>
          {pagination ? (
            <h2 className="font-semibold text-xl text-text-secondary">
              There are {pagination.items.total} results
            </h2>
          ) : (
            <div className="h-6 w-48 animate-pulse bg-background-secondary"></div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <button
            className="rounded-lg py-3 px-6 hover:border-2 hover:border-border text-text bg-background-secondary hover:bg-background font-semibold items-center transition-all duration-300"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Filter <FilterAltOutlinedIcon />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" md:w-[100%] lg:w-[80%] mx-auto border border-border rounded-lg my-2">
          <form
            action=""
            className="flex flex-col md:flex-row p-2 accent-accent"
            onSubmit={handleSubmit}
          >
            {/* Left */}
            <div className="w-[200px] flex flex-col p-2 font-semibold">
              <h2 className="font-semibold text-xl text-center text-text">
                Sort by
              </h2>
              <button
                className="text-left bg-background-secondary p-2 hover:text-text-active hover:bg-background border border-background-secondary hover:border-border transition-all duration-300 rounded-md my-1"
                onClick={() => handleSort("asc")}
              >
                <TrendingUpIcon />
                Asc Title
              </button>
              <button
                className="text-left bg-background-secondary p-2 hover:text-text-active hover:bg-background border border-background-secondary hover:border-border transition-all duration-300 rounded-md my-1"
                onClick={() => handleSort("desc")}
              >
                <TrendingDownIcon />
                Desc Title
              </button>
              <button
                className="text-left bg-background-secondary p-2 hover:text-text-active hover:bg-background border border-background-secondary hover:border-border transition-all duration-300 rounded-md my-1"
                onClick={() => {
                  const newOption = {
                    ...subFilters,
                    order_by: "members",
                    sort: "desc",
                  };
                  handleSubmit(null, newOption);
                }}
              >
                <RemoveRedEyeIcon />
                Most View
              </button>
              <button
                className="text-left bg-background-secondary p-2 hover:text-text-active hover:bg-background border border-background-secondary hover:border-border transition-all duration-300 rounded-md my-1"
                onClick={(e) => {
                  e.preventDefault();
                  const newOption = {
                    ...subFilters,
                    order_by: "start_date",
                    sort: "desc",
                  };
                  handleSubmit(null, newOption);
                }}
              >
                <WhatshotIcon />
                Newest
              </button>
            </div>
            {/* Right */}
            <div className="flex flex-col w-full gap-5 p-2 text-text accent-blossoms-100">
              {/* Type Selection */}
              <fieldset className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2">
                <legend className="text-xl font-semibold">Type:</legend>
                <label key={"all"} className="px-2">
                  <input
                    className=""
                    type="radio"
                    name="type"
                    value={""}
                    checked={subFilters.type === ""}
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
                      checked={subFilters.type === type.value}
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
                      checked={subFilters.genres.includes(genre.mal_id)}
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
                    checked={subFilters.start_date === ""} // No year selected
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
                      checked={subFilters.start_date === `${year}-01-01`}
                      onChange={handleYearChange}
                    />
                    {` ${year}`}
                  </label>
                ))}
              </fieldset>
              {/* Submit Button */}
              <button
                className="text-text font-bold p-2 border border-background-secondary bg-background-secondary hover:bg-background hover:border-border transition-all duration-300 rounded-md my-1"
                type="submit"
              >
                Filter <TuneOutlinedIcon />
              </button>
            </div>
          </form>
        </div>
      )}

      <div>
        {isLoading ? (
          <div className="flex justify-center">
            <div className="h-8 w-96 bg-gray-400 animate-pulse my-7"></div>
          </div>
        ) : null}
        {pagination && pagination.items.total > 18 ? (
          <Pagination2
            currentPage={page}
            totalCount={pagination.items.total}
            pageSize={pagination.items.per_page}
            onPageChange={(page) => setPage(page)}
            siblingCount={0}
          />
        ) : null}

        <div className="flex flex-wrap items-start mx-auto bg-background-secondary p-3 rounded">
          {isLoading ? (
            <CardSkeleton cards={12} />
          ) : (
            uniqueAnimes.map((anime) => (
              <Cards key={anime.mal_id} props={anime} />
            ))
          )}
        </div>

        {pagination ? (
          <Pagination2
            currentPage={page}
            totalCount={pagination.items.total}
            pageSize={pagination.items.per_page}
            onPageChange={(page) => setPage(page)}
          />
        ) : (
          <div className="flex justify-center">
            <div className="h-8 w-96 bg-gray-400 animate-pulse my-7"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default AnimeFilter2;
