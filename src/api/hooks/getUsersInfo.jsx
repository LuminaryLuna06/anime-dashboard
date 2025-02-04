import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../config/http";

function getUsersInfo() {
  return ({} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      return await http
        .get("/users")
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
    },
    staleTime: 1000 * 60 * 5,
  }));
}

export default getUsersInfo;
