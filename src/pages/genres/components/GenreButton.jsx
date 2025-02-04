import React from "react";
import { Link } from "react-router-dom";

function GenreButton({ id, name }) {
  return (
    <Link to={`/genres/${id}/${name}`} className="my-5">
      <button className="border-2 rounded-lg py-3 px-6  border-pink-300 hover:bg-pink-300 font-semibold w-full">
        {name}
      </button>
    </Link>
  );
}

export default GenreButton;
