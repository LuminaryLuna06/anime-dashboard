import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getAnimeByGenre(genreName, genreId, page) {
  return ({} = useQuery({
    queryKey: ["animes", genreName, page],
    queryFn: async () => {
      return await http
        .get("/anime", {
          params: {
            genres: `${genreId}`,
            min_score: 8,
            order_by: "rank",
            sfw: true,
            limit:24,
            page
          },
        })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
    priority: "high",

  }));
}

export default getAnimeByGenre;
