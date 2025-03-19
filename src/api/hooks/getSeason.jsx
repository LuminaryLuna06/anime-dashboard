import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getSeason(option, year, season) {
  return ({} = useQuery({
    queryKey: [`season`, option],
    queryFn: async () => {
      return await http
        .get(`/seasons/${year}/${season}`, {
          params: option,
        })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
    priority: "high",
    retry: 3,
    retryDelay: 2000,
  }));
}

export default getSeason;
