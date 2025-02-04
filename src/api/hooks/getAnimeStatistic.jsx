import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getAnimeStatistic() {
  return ({} = useQuery({
    queryKey: ["Frieren Statistics"],
    queryFn: async () => {
      return await http
        .get("/anime/52991/statistics")
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getAnimeStatistic;
