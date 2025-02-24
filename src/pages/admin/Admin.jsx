import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";
import Clubs from "./components/Clubs/Clubs";
import InfoCard from "./components/InfoCard";
import { useAuth } from "../../context/authContext";
import Login from "../../components/auth/login";

function Admin() {
  const {isAdmin} = useAuth();

  window.scrollTo(0, 0);

  return (
    <>
      {isAdmin ? (
        <>
          <InfoCard />
          <Clubs />
          <UserList />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Admin;
