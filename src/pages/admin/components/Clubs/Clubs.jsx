import React, { useEffect, useState } from "react";
import Club from "./Club";
import axios from "axios";
import ClubSkeleton from "./ClubSkeleton";
import getClubInfo from "../../../../api/hooks/getClubInfo";

function Clubs() {
  const { data: clubs, isLoading } = getClubInfo();

  return (
    <>
      <div className="w-[95%] md:w-[80%] mx-auto my-5">
        <h1 className="font-bold text-3xl my-3">Clubs</h1>
        {isLoading ? (
          <ClubSkeleton cards={4} />
        ) : (
          clubs && clubs?.map((club, index) => <Club key={index} club={club} />)
        )}
      </div>
    </>
  );
}

export default Clubs;
