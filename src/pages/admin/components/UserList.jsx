import axios from "axios";
import React, { useEffect, useState } from "react";
import getUsersInfo from "../../../api/hooks/getUsersInfo";
function UserList() {
  const { data: users, isLoading } = getUsersInfo();
  return (
    <>
      {isLoading ? (
        <div className="h-[100vh]"></div>
      ) : (
        <>
          <div className="w-[80%] mx-auto my-4 flex">
            <h1 className="font-bold text-3xl">User Information</h1>
          </div>
          <div className="md:w-[80%] w-[95%] mx-auto border rounded my-4">
            <table className="table">
              <thead>
                <tr className="text-white">
                  <th>User</th>
                  <th>Email</th>
                  <th className="hidden md:block">Last online</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr className="hover:bg-gray-500" key={index}>
                    <div>
                      <a
                        href={`https://myanimelist.net/profile/${user.username}`}
                      >
                        <td>
                          <div className="flex items-center gap-3">
                            <img
                              src={user.images.webp.image_url}
                              alt=""
                              className="rounded-full object-cover w-10 h-10"
                            />
                            {user.username}
                          </div>
                        </td>
                      </a>
                    </div>

                    <td>handsomeuser@gmail.com</td>
                    <td>
                      <div className="hidden md:block">
                        {user.last_online.slice(0, 10)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default UserList;
