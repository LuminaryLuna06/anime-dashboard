import React, { useState, useEffect, useRef } from "react";
import getSeason from "../../api/hooks/getSeason";
import Side from "../../components/layout/SideBar/Side";
import CardSkeleton from "../../components/ui/Skeleton/CardSkeleton";
import Cards from "../../components/ui/Cards/Cards";
import Pagination from "../../components/ui/Pagination/Pagination";

function Season() {
  const [page, setPage] = useState(1);
  const [seasonY, setSeasonY] = useState("2025/summer");
  const [search, setSearch] = useState(false);
  const [option, setOption] = useState({
    sfw: true,
    page,
  });
  const [animeType, setAnimeType] = useState('{"filter": ""}');

  const seasonRef = useRef(null);
  const yearRef = useRef(null);

  useEffect(() => {
    setOption((prevOption) => ({
      ...prevOption,
      page: page,
    }));
  }, [page]);
  useEffect(() => {
    setOption((prevOption) => ({
      ...prevOption,
      page: 1,
      filter: "",
    }));
    setPage(1);
    setAnimeType('{"filter": ""}');
  }, [seasonY]);
  const handleChange = (e) => {
    const selected = JSON.parse(e.target.value);
    setOption((prev) => ({
      ...prev,
      ...selected,
    }));
    setAnimeType(e.target.value);
  };

  const handleChangeURL = (e) => {
    const selected = e.target.value;
    setSeasonY(selected);
    setSearch(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const selected = `${e.target.year.value}/${e.target.season.value}`;
    setSeasonY(selected);
    setSearch(true);
    seasonRef.current.value = "";
    yearRef.current.value = "";
  };
  const yearSeason = [
    {
      year: 2025,
      seasons: ["summer", "winter", "spring", "fall"],
    },
    {
      year: 2024,
      seasons: ["winter", "fall"],
    },
  ];
  const yearList = [
    {
      year: 2025,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2024,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2023,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2022,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2021,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2020,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2019,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2018,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2017,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2016,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2015,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2014,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2013,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2012,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2011,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2010,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2009,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2008,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2007,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2006,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2005,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2004,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2003,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2002,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2001,
      seasons: ["winter", "spring", "summer", "fall"],
    },
    {
      year: 2000,
      seasons: ["winter", "spring", "summer", "fall"],
    },
  ];
  const isSeasonYInYearSeason = yearSeason.some((item) =>
    item.seasons.some((season) => `${item.year}/${season}` === seasonY)
  );

  console.log(seasonY);

  const { data: seasons, isLoading } = getSeason(option, seasonY);
  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        {yearSeason.map((item) => {
          return item.seasons.map((i) => (
            <input
              key={`${item.year}-${i}`}
              type="radio"
              name="my_tabs_6"
              className="tab"
              value={`${item.year}/${i}`}
              onChange={handleChangeURL}
              aria-label={`${i.toUpperCase()} ${item.year}`}
              checked={seasonY === `${item.year}/${i}`}
            />
          ));
        })}
        {!isSeasonYInYearSeason && search && (
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            value={seasonY}
            onChange={handleChangeURL}
            aria-label={seasonY.split("/").reverse().join(" ").toUpperCase()}
            checked
          />
        )}
        <form
          htmlFor="season"
          className="flex justify-center items-center"
          onSubmit={handleSearch}
        >
          <label htmlFor="season" className="mx-2">
            Choose season
          </label>

          <select name="season" id="season" ref={seasonRef}>
            <option value="">All</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="fall">Fall</option>
          </select>

          <label htmlFor="year" className="mx-2">
            Choose year
          </label>

          <select name="year" id="year" ref={yearRef}>
            <option value="">All</option>
            {yearList.map((item, index) => (
              <option key={item.year} value={item.year}>
                {item.year}
              </option>
            ))}
          </select>

          {/* <label htmlFor="" className="mx-2">
            Enter year:{" "}
          </label>

          <input type="number" name="year" /> */}
          <button
            className="py-1 px-2 bg-pink-200 text-pink-800 text-sm font-semibold rounded mx-2"
            type="submit"
          >
            Go to
          </button>
        </form>
      </div>
      <div className="tabs tabs-border w-[90%] mx-auto">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="All"
          value='{"filter": ""}'
          onChange={handleChange}
          checked={animeType === '{"filter": ""}'}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="TV"
          value='{"filter": "tv"}'
          onChange={handleChange}
          checked={animeType === '{"filter": "tv"}'}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="ONA"
          value='{"filter": "ona"}'
          onChange={handleChange}
          checked={animeType === '{"filter": "ona"}'}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Movie"
          value='{"filter": "movie"}'
          onChange={handleChange}
          checked={animeType === '{"filter": "movie"}'}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Special"
          value='{"filter": "special"}'
          onChange={handleChange}
          checked={animeType === '{"filter": "special"}'}
        />
      </div>

      <div className="mx-auto py-3 flex flex-col md:flex-row gap-3 w-[95%]">
        {/* Left */}
        <div className="flex flex-col md:w-[80%] lg:w-[75%]">
          <div>
            <Pagination page={page} setPage={setPage} totalPages={3} />

            <div className="flex flex-wrap items-start mx-auto">
              {isLoading ? (
                // <div className="h-[100vh]">
                <CardSkeleton cards={12} />
              ) : (
                // </div>
                seasons.map((anime) => (
                  <Cards key={anime.mal_id} props={anime} />
                ))
              )}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={3} />
          </div>
        </div>
        {/* Right */}
        <Side />
      </div>
    </>
  );
}

export default Season;
