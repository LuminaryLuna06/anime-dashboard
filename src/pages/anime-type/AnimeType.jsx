import React, { useState } from "react";
import getAnime from "../../api/hooks/getAnime";
import Cards from "../../components/ui/Cards/Cards";
import Button from "../../components/ui/Button";
import Pagination from "../../components/ui/Pagination/Pagination";
import CardSkeleton from "../../components/ui/Skeleton/CardSkeleton";
function AnimeType() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [option, setOption] = useState({ limit: 9, sfw: true, type: "TV" });
  const { data: animes, isLoading } = getAnime(option);
  console.log(option);
  function handleSort(sort) {
    setOption((prevOption) => ({
      ...prevOption,
      order_by: "title",
      sort: sort,
    }));
  }

  function handleSubmit() {
    setOption({ limit: 6, sfw: true });
  }
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
        <div className="h-[500px] w-[80%] mx-auto bg-white">
          <form action="" className="flex text-black">
            {/* Left */}
            <div className="w-[200px] flex flex-col">
              <h2>Sort by</h2>
              <button onClick={() => handleSort("asc")}>Asc Title </button>
              <button onClick={() => handleSort("desc")}>Desc Title</button>
              <button
                onClick={() => {
                  setOption((prevOption) => ({
                    ...prevOption,
                    order_by: "members",
                    sort: "desc",
                  }));
                }}
              >
                Most View
              </button>
              <button
                onClick={() => {
                  setOption((prevOption) => ({
                    ...prevOption,
                    status: "airing",
                    order_by: "start_date",
                    sort: "desc",
                  }));
                }}
              >
                Newest
              </button>
            </div>
            {/* Right */}
            <div className="flex flex-col w-full">
              <div className="h-[100px] bg-red-600">
                <h2>Type</h2>
                <div>
                  <input type="checkbox" name="TV" id="" />
                  <label htmlFor="">TV</label>
                </div>
              </div>
              <div className="h-[100px] bg-blue-600"></div>
              <div className="h-[100px] bg-green-600"></div>
              <button onClick={() => handleSubmit()}>Sort Anime</button>
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
