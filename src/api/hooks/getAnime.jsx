import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getAnime(option) {
  return ({} = useQuery({
    queryKey: ["animes", option],
    queryFn: async () => {
      return await http
        .get("/anime", {
          params: option,
        })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getAnime;
