import React from "react";
import genres from "../assets/genres";
import GenreButton from "./GenreButton";

function GenresSelect() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center">Select genre</h1>
      <div className="text-gray-200 grid grid-cols-3 gap-4 lg:gap-6 my-6 lg:grid-cols-4 lg:w-[50%] md:w-[80%] w-[95%] mx-auto">
        {genres.map((genre) => (
          <GenreButton id={genre.mal_id} name={genre.name} key={genre.mal_id} />
        ))}
      </div>
    </>
  );
}

export default GenresSelect;
