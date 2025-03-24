import React from "react";
import { useParams } from "react-router-dom";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import getAnimeEpisodesById from "../../../api/hooks/getAnimeEpisodesById";

function EpisodePage() {
  const { id, epId } = useParams();
  const { data: episode, isLoading } = getAnimeEpisodesById(id, epId);
  return (
    <>
      {isLoading && <div className="h-[100vh]"></div>}

      <div className="h-[100vh] flex items-center flex-col">
        <div className="lg:h-[700px] lg:w-[1200px] md:h-[500px] md:w-[900px] h-[300px] w-[500px] bg-gray-500 my-3 flex items-center justify-center">
          <PlayCircleOutlinedIcon fontSize="large" />
        </div>
        {episode && (
          <div className="flex flex-col mx-10 lg:w-2/3">
            <h1>
              Episode {epId}: {episode.title}
            </h1>
            <p className="text-gray-400">{episode.synopsis || "No data"}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default EpisodePage;
