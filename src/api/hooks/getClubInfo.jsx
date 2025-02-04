import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getClubInfo() {
  return ({} = useQuery({
    queryKey: ["clubs"],
    queryFn: async () => {
      return await http
        .get("/clubs", {
          params: {limit:4},
        })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getClubInfo;
