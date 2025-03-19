import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getSeason() {
  return ({} = useQuery({
    queryKey: ["season-now"],
    queryFn: async () => {
      return await http
        .get("/seasons/now")
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
