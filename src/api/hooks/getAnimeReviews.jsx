import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getAnimeReviews() {
  return ({} = useQuery({
    queryKey: ["Frieren Reviews"],
    queryFn: async () => {
      return await http
        .get("/anime/52991/reviews")
        .then((res) => res.data.data.slice(0,3))
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getAnimeReviews;
