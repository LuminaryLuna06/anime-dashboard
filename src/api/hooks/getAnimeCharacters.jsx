import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getAnimeCharacters(id) {
  return ({} = useQuery({
    queryKey: ["characters", id],
    queryFn: async () => {
      return await http
        .get(`/anime/${id}/characters`)
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getAnimeCharacters;
