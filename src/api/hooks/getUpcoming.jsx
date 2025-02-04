import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getUpcoming(option) {
  return ({} = useQuery({
    queryKey: ["upcoming"],
    queryFn: async () => {
      return await http
        .get("/seasons/upcoming", {
          params: option,
        })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
      // return await axios
      //   .get(`${import.meta.env.VITE_API_BASEURL}/anime`)
      //   .then((res) => res.data.data)
      //   .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getUpcoming;
