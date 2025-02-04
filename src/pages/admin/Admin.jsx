import React from "react";
import UserList from "./components/UserList";
import Clubs from "./components/Clubs/Clubs";
import InfoCard from "./components/InfoCard";

function Admin() {
  window.scrollTo(0, 0);

  return (
    <>
      <InfoCard />
      <Clubs />
      <UserList />
    </>
  );
}

export default Admin;
