import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

// function getAnime(option) {
//   return ({} = useQuery({
//     queryKey: ["animes", option],
//     queryFn: async () => {
//       return await http
//         .get("/anime", {
//           params: option
//         })
//         .then((res) => res.data.data)
//         .catch((err) => console.log(err));
//     },
//     staleTime: 1000 * 60 * 5,
//   }));
// }

// export default getAnime;
function getAnime(option) {
  return useQuery({
    queryKey: ["animes", option],
    queryFn: async () => {
      const data = await http
        .get("/anime", {
          params: option,
        })
        .then((res) => res.data.data)
        .catch((err) => {
          console.log(err);
          return [];
        });

      // Use Set to filter out duplicate anime entries based on mal_id
      const uniqueAnimes = Array.from(
        new Set(data.map((anime) => anime.mal_id))
      ).map((mal_id) => data.find((anime) => anime.mal_id === mal_id));

      return uniqueAnimes;
    },
    staleTime: 1000 * 60 * 5,
  });
}

export default getAnime;