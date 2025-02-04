import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getAnimeById(id) {
  return ({} = useQuery({
    queryKey: [`${id}`],
    queryFn: async () => {
      return await http
        .get(`/anime/${id}`)
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getAnimeById;
