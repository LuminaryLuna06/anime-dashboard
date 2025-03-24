import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getAnimeEpisodesById(id, epId) {
  return ({} = useQuery({
    queryKey: ["anime", id, "episodes", epId],
    queryFn: async () => {
      return await http
        .get(`/anime/${id}/episodes/${epId}`)
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
    priority: "high",
  }));
}

export default getAnimeEpisodesById;
