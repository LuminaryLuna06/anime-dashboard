import React, { useState, useEffect } from "react";
import getSeason from "../../api/hooks/getSeason";
import Side from "../../components/layout/SideBar/Side";
import CardSkeleton from "../../components/ui/Skeleton/CardSkeleton";
import Cards from "../../components/ui/Cards/Cards";
import Pagination from "../../components/ui/Pagination/Pagination";

function Season() {
  const [page, setPage] = useState(1);
  const [seasonY, setSeasonY] = useState("2025/summer");
  const [search, setSearch] = useState("");
  const [option, setOption] = useState({
    sfw: true,
    page,
  });
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
    }));
    setPage(1);
  }, [seasonY]);
  const handleChange = (e) => {
    const selected = JSON.parse(e.target.value);
    setOption((prev) => ({
      ...prev,
      ...selected,
    }));
  };

  const handleChangeURL = (e) => {
    const selected = e.target.value;
    setSeasonY(selected);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const selected = `${e.target.year.value}/${e.target.season.value}`;
    setSeasonY(selected);
  };
  const yearSeason = [
    {
      year: 2025,
      seasons: ["winter", "spring", "fall"],
    },
    {
      year: 2024,
      seasons: ["winter", "fall"],
    },
  ];
  console.log(search);

  const { data: seasons, isLoading } = getSeason(option, seasonY);
  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="SUMMER 2025"
          value={`2025/summer`}
          onChange={handleChangeURL}
          defaultChecked
        />
        {yearSeason.map((item, index) => {
          return item.seasons.map((i, index) => (
            <input
              key={`${item.year}-${i}`}
              type="radio"
              name="my_tabs_6"
              className="tab"
              value={`${item.year}/${i}`}
              onChange={handleChangeURL}
              aria-label={`${i.toUpperCase()} ${item.year}`}
            />
          ));
        })}
        <form
          htmlFor="season"
          className="flex justify-center items-center"
          onSubmit={handleSearch}
        >
          <label htmlFor="season" className="mx-2">
            Choose season
          </label>

          <select name="season" id="season">
            <option value=""></option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="fall">Fall</option>
          </select>
          <label htmlFor="" className="mx-2">
            Enter year:{" "}
          </label>
          <input type="number" name="year" />
          <button className="p-1 bg-pink-300 rounded mx-2" type="submit">
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
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="TV"
          value='{"filter": "tv"}'
          onChange={handleChange}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="ONA"
          value='{"filter": "ona"}'
          onChange={handleChange}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Movie"
          value='{"filter": "movie"}'
          onChange={handleChange}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Special"
          value='{"filter": "special"}'
          onChange={handleChange}
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
