import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getRandomAnime(enable) {
  return ({} = useQuery({
    queryKey: ["random"],
    queryFn: async () => {
      return await http
        .get(`/random/anime`)
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
    priority: "low",
    enabled: !!enable,
  }));
}

export default getRandomAnime;
