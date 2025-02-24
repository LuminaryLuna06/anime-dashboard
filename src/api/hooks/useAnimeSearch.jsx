import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function useAnimeSearch(query, page) {
  return useQuery({
    queryKey: ["search-anime", query, page],
    queryFn: async () => {
      if (!query) return null;

      return await http
        .get("/anime", {
          params: {
            sfw: true,
            q: `${query}`,
            limit: 24,
            page,
          },
        })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
}

export default useAnimeSearch;
