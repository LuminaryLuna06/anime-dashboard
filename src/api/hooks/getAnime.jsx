import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

// export default getAnime;
function getAnime(option) {
  return useQuery({
    queryKey: ["animes", option],
    queryFn: async () => {
      const data = await http
        .get("/anime", {
          params: option,
        })
        .then((res) => res.data)
        .catch((err) => {
          console.log(err);
          return [];
        });

      const uniqueAnimes = Array.from(
        new Set(data.data.map((anime) => anime.mal_id))
      ).map((mal_id) => data.data.find((anime) => anime.mal_id === mal_id));
      const pagination = data.pagination;
      return [uniqueAnimes, pagination];
    },
    staleTime: 1000 * 60 * 5,
    priority: "high",
    retry: 5,
    retryDelay: 2000,
  });
}

export default getAnime;
