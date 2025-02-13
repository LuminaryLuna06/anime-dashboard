import React from "react";
import UserList from "./components/UserList";
import Clubs from "./components/Clubs/Clubs";
import InfoCard from "./components/InfoCard";
import { useAuth } from "../../context/authContext";
import Login from "../../components/auth/login";
function Admin() {
  const { userLoggedIn } = useAuth();
  window.scrollTo(0, 0);
  return (
    <>
      {userLoggedIn ? (
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
