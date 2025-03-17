import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getAnimePictures(id) {
  return ({} = useQuery({
    queryKey: ["picture", id],
    queryFn: async () => {
      return await http
        .get(`/anime/${id}/pictures`)
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getAnimePictures;
