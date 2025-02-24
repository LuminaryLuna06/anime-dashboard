import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getTopAnime(page) {
  return ({} = useQuery({
    queryKey: ["top-anime", page],
    queryFn: async () => {
      return await http
        .get(`/top/anime`, { params: { page, limit: 24 } })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getTopAnime;
