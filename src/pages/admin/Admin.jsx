import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";
import Clubs from "./components/Clubs/Clubs";
import InfoCard from "./components/InfoCard";
import { useAuth } from "../../context/authContext";
import Login from "../../components/auth/login";

function Admin() {
  const { userLoggedIn, currentUser, isAdmin} = useAuth();
  // const [isAdmin, setIsAdmin] = useState(false);
  // useEffect(() => {
  //   const checkUserAdmin = async () => {
  //     const result = await checkAdmin(currentUser);
  //     setIsAdmin(result);
  //     console.log("Is admin:", result);
  //   };
  //   if (currentUser) {
  //     checkUserAdmin();
  //   }
  // }, [currentUser]);
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
