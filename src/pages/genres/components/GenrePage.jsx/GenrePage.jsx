import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardSkeleton from "../../../../components/ui/Skeleton/CardSkeleton";
import Cards from "../../../../components/ui/Cards/Cards";
import getAnimeByGenre from "../../../../api/hooks/getAnimeByGenre";
import Pagination from "../../../../components/ui/Pagination/Pagination";

function GenrePage() {
  window.scrollTo(0, 0);
  const [page, setPage] = useState(1);
  const { genreId, genreName } = useParams();
  const { data: animes, isLoading } = getAnimeByGenre(genreName, genreId, page);
  return (
    <div className="w-[95%] h-auto mx-auto">
      <div className="py-4 ">
        <div className="py-4">
          <h1 className="text-4xl">{genreName}</h1>
          <p className="text-md text-gray-400">Discover anime of your taste!</p>
        </div>

        <div className="flex flex-wrap items-start ">
          {isLoading ? (
            <CardSkeleton cards={24} />
          ) : (
            animes.map((anime) => <Cards key={anime.mal_id} props={anime} />)
          )}
        </div>
      </div>
      <Pagination page={page} setPage={setPage} totalPages={3} />
    </div>
  );
}

export default GenrePage;
