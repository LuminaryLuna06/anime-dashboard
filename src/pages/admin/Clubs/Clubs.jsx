import React from "react";
import SideBar from "../../../components/layout/SideBar/SideBar";
import ClubList from "../components/Clubs/ClubList";
function Clubs() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        <ClubList />
      </div>
    </div>
  );
}

export default Clubs;
