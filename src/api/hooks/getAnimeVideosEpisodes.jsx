import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getAnimeVideosEpisodes(id, enable) {
  return ({} = useQuery({
    queryKey: ["anime-episodes", id],
    queryFn: async () => {
      return await http
        .get(`/anime/${id}/videos/episodes`)
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
    priority: "low",
    enabled: !!enable,
    retry: 5,
    retryDelay: 2000,
  }));
}

export default getAnimeVideosEpisodes;
