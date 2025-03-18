import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getAnimeRecommendations(id) {
  return ({} = useQuery({
    queryKey: ["anime-recommend", id],
    queryFn: async () => {
      return await http
        .get(`/anime/${id}/recommendations`)
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getAnimeRecommendations;
