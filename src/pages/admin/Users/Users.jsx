import React from "react";
import SideBar from "../../../components/layout/SideBar/SideBar";
import UserList from "../components/UserList";
function Users() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        <UserList />
      </div>
    </div>
  );
}

export default Users;
