import React from "react";

function CharacterCard({ link, name }) {
  return (
    <div className="text-center">
        <img src={link} alt="" className="rounded-full h-[100px] w-[100px] object-cover"/>
        <h2 className="">{name}</h2>
    </div>

);
}

export default CharacterCard;
