import React, { useState } from "react";
import getSeason from "../../api/hooks/getSeason";
import Side from "../../components/layout/SideBar/Side";

function Season() {
  const [option, setOption] = useState({
    sfw: true,
  });
  const [seasonY, setSeasonY] = useState("2025/summer");
  const handleChange = (e) => {
    const selected = JSON.parse(e.target.value);
    setOption((prev) => ({
      ...prev,
      ...selected,
    }));
  };
  const handleChangeURL = (e) => {
    const selected = JSON.parse(e.target.value);
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

  const { data: seasons, isLoading } = getSeason(option, seasonY);
  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Summer 2025"
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
      {isLoading ? (
        <div className="h-[100vh]"></div>
      ) : (
        <div className="lg:w-[85%] mx-auto py-3 flex flex-col md:flex-row gap-3">
          {/* Left */}

          {/* Right */}
          {/* <Side /> */}
        </div>
      )}
    </>
  );
}

export default Season;
