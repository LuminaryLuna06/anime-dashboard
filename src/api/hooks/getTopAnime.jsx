import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getTopAnime(option) {
  return ({} = useQuery({
    queryKey: ["top-anime"],
    queryFn: async () => {
      return await http
        .get(`/top/anime`, { params: option })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getTopAnime;
