import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import SideBar from "../../components/layout/SideBar/SideBar";
import Users from "./Users/Users"

function Admin() {
  const { isAdmin } = useAuth();

  window.scrollTo(0, 0);

  return (
    <div className="flex">
      <SideBar />
    </div>
  );
}

export default Admin;
