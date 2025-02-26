import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import SideBar from "../../components/layout/SideBar/SideBar";
import Dashboard from "../dashboard/Dashboard"

function Admin() {
  const { isAdmin } = useAuth();

  window.scrollTo(0, 0);

  return (
    <div className="flex">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default Admin;
