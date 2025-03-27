import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getSeason(option, seasonY) {
  return ({} = useQuery({
    queryKey: [`season-${seasonY}`, option],
    queryFn: async () => {
      const data = await http
        .get(`/seasons/${seasonY}`, {
          params: option,
        })
        .then((res) => res.data)
        .catch((err) => console.log(err));

      const uniqueAnimes = Array.from(
        new Set(data.data.map((anime) => anime.mal_id))
      ).map((mal_id) => data.data.find((anime) => anime.mal_id === mal_id));
      const pagination = data.pagination;
      return [uniqueAnimes, pagination];
    },
    staleTime: 1000 * 60 * 5,
    priority: "high",
    retry: 3,
    retryDelay: 2000,
    suspense: true,
    keepPreviousData: false,
  }));
}

export default getSeason;
