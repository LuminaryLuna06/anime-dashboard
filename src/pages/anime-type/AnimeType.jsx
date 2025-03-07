import React, { useState } from "react";
import getAnime from "../../api/hooks/getAnime";
import Cards from "../../components/ui/Cards/Cards";

function AnimeType() {
  const [option, setOption] = useState({limit:5, type:"OVA"});
  const { data: animes, isLoading } = getAnime(option);
  function handleClick(t) {
    setOption({type:t})
  }
  return (
    <>
      <button onClick={() => handleClick("TV")}>Type TV</button>
      {animes?.map((anime) => (
        <Cards key={anime.mal_id} props={anime} />
      ))}
    </>
  );
}

export default AnimeType;
