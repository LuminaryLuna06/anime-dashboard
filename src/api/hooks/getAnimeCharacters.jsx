import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getAnimeCharacters(id, enable) {
  return ({} = useQuery({
    queryKey: ["characters", id],
    queryFn: async () => {
      return await http
        .get(`/anime/${id}/characters`, {
          params: {
            limit: 15,
          },
        })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
    priority: "low",
    enabled: !!enable,
  }));
}

export default getAnimeCharacters;
