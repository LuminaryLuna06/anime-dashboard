import React from "react";

function Club({ club }) {
  return (
      <a href={club.url}>
        <div className="my-3  flex border rounded gap-5 ">
          <img
            src={club.images.jpg.image_url}
            alt=""
            className="object-cover h-40 w-40"
          />
          <div className="p-3 flex flex-col justify-center">
            <h2 className="font-bold text-3xl">{club.name}</h2>
            <p className="text-sm text-gray-300">
              Member: {club.members.toLocaleString()} <br />
              Category: {club.category} <br />
              Created: {club.created.slice(0, 10)}
              <br />
              Accessible: {club.access}
            </p>
          </div>
        </div>
      </a>
  );
}

export default Club;
