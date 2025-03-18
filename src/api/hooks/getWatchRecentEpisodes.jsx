import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getWatchRecentEpisodes() {
  return ({} = useQuery({
    queryKey: ["recent"],
    queryFn: async () => {
      return await http
        .get("https://api.jikan.moe/v4/watch/episodes")
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
    priority: "low",
  }));
}

export default getWatchRecentEpisodes;
