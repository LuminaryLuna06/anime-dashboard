import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';

function InfoCard() {
  return (
    <div className="md:w-[80%] mx-auto flex md:flex-row flex-col gap-4 justify-center mt-6 ">
      <div className="flex w-[300px] bg-slate-800 h-28 gap-3 justify-center items-center rounded-lg hover:border-pink-300 hover:border">
        <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">
          {/* <svg
            fill="#000000"
            width="50px"
            height="50px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M735.385 336.094c218.24 0 395.977 177.624 395.977 395.976v113.137c0 121.96-56.568 229.78-143.57 302.526 94.13 13.916 187.354 34.959 278.315 64.6 122.414 39.825 204.664 155.676 204.664 288.159v200.364l-26.814 16.63c-148.434 92.32-392.017 202.515-708.572 202.515-174.795 0-439.76-35.186-708.685-202.514L0 1700.856v-189.39c0-140.629 89.264-263.042 221.973-304.79 85.418-26.7 172.533-46.498 260.327-59.509-86.55-72.746-142.891-180.339-142.891-301.96V732.07c0-218.352 177.623-395.976 395.976-395.976ZM1183.405 0c218.24 0 395.976 177.624 395.976 395.977v113.136c0 121.96-56.568 229.893-143.57 302.526 94.13 13.916 187.241 35.072 278.316 64.6 122.413 40.051 204.663 155.79 204.663 288.272v200.364l-26.7 16.631c-77.612 48.31-181.81 101.03-308.183 140.742v-21.723c0-181.696-113.589-340.766-282.727-395.75a1720.133 1720.133 0 0 0-111.553-32.244c35.751-69.805 54.871-147.416 54.871-227.29V732.104c0-250.483-182.036-457.975-420.414-500.175C886.762 95.487 1023.656 0 1183.404 0Z"
              fill-rule="evenodd"
            />
          </svg> */}
          <PeopleIcon fontSize="large" color="primary" />
        </div>
        <div>
          <span className="text-sm text-gray-400">Users</span>
          <h2 className="font-bold text-3xl">123,456</h2>
        </div>
      </div>
      <div className="flex w-[300px] bg-slate-800 h-28 gap-3 justify-center items-center rounded-lg hover:border-pink-300 hover:border">
        <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">
          {/* <svg
            width="50px"
            height="50px"
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M388.9 597.4c-135.2 0-245.3-110-245.3-245.3s110-245.3 245.3-245.3 245.3 110 245.3 245.3-110.1 245.3-245.3 245.3z m0-405.3c-88.2 0-160 71.8-160 160s71.8 160 160 160 160-71.8 160-160-71.8-160-160-160z"
              fill="#3688FF"
            />
            <path
              d="M591.3 981.3H186.5c-76.6 0-138.8-62.3-138.8-138.8V749c0-130.6 106.2-236.9 236.9-236.9h208.8c130.6 0 236.9 106.3 236.9 236.9v93.5c-0.2 76.5-62.4 138.8-139 138.8zM284.5 597.4c-83.6 0-151.5 68-151.5 151.5v93.5c0 29.5 24 53.5 53.5 53.5h404.8c29.5 0 53.5-24 53.5-53.5v-93.5c0-83.6-68-151.5-151.6-151.5H284.5z"
              fill="#3688FF"
            />
            <path
              d="M847.2 938.6c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c29.5 0 53.5-24 53.5-53.5v-93.5c0-83.6-68-151.5-151.6-151.5h-14.3c-19.8 0-37-13.6-41.5-32.9-4.5-19.3 4.8-39.1 22.5-48 54.8-27.3 88.9-82.1 88.9-143.1 0-88.2-71.8-160-160-160-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c135.2 0 245.3 110 245.3 245.3 0 57.8-19.9 111.9-54.9 154.8 88.3 34.6 151 120.6 151 220.9v93.5c0 76.6-62.3 138.8-138.9 138.8z"
              fill="#5F6379"
            />
          </svg> */}
          <OnlinePredictionIcon fontSize="large" color="primary" />
        </div>
        <div>
          <span className="text-sm text-gray-400">Onlines</span>
          <h2 className="font-bold text-3xl">123,456</h2>
        </div>
      </div>
      <div className="flex w-[300px] bg-slate-800 h-28 gap-3 justify-center items-center rounded-lg hover:border-pink-300 hover:border">
        <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">
          {/* <svg
            fill="#000000"
            width="70px"
            height="70px"
            viewBox="-3 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>group</title>
            <path d="M20.906 20.75c1.313 0.719 2.063 2 1.969 3.281-0.063 0.781-0.094 0.813-1.094 0.938-0.625 0.094-4.563 0.125-8.625 0.125-4.594 0-9.406-0.094-9.75-0.188-1.375-0.344-0.625-2.844 1.188-4.031 1.406-0.906 4.281-2.281 5.063-2.438 1.063-0.219 1.188-0.875 0-3-0.281-0.469-0.594-1.906-0.625-3.406-0.031-2.438 0.438-4.094 2.563-4.906 0.438-0.156 0.875-0.219 1.281-0.219 1.406 0 2.719 0.781 3.25 1.938 0.781 1.531 0.469 5.625-0.344 7.094-0.938 1.656-0.844 2.188 0.188 2.469 0.688 0.188 2.813 1.188 4.938 2.344zM3.906 19.813c-0.5 0.344-0.969 0.781-1.344 1.219-1.188 0-2.094-0.031-2.188-0.063-0.781-0.188-0.344-1.625 0.688-2.25 0.781-0.5 2.375-1.281 2.813-1.375 0.563-0.125 0.688-0.469 0-1.656-0.156-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.25-2.313 1.438-2.719 1-0.375 2.125 0.094 2.531 0.938 0.406 0.875 0.188 3.125-0.25 3.938-0.5 0.969-0.406 1.219 0.156 1.375 0.125 0.031 0.375 0.156 0.719 0.313-1.375 0.563-3.25 1.594-4.219 2.188zM24.469 18.625c0.75 0.406 1.156 1.094 1.094 1.813-0.031 0.438-0.031 0.469-0.594 0.531-0.156 0.031-0.875 0.063-1.813 0.063-0.406-0.531-0.969-1.031-1.656-1.375-1.281-0.75-2.844-1.563-4-2.063 0.313-0.125 0.594-0.219 0.719-0.25 0.594-0.125 0.688-0.469 0-1.656-0.125-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.219-2.313 1.406-2.719 1.031-0.375 2.156 0.094 2.531 0.938 0.406 0.875 0.25 3.125-0.188 3.938-0.5 0.969-0.438 1.219 0.094 1.375 0.375 0.125 1.563 0.688 2.75 1.313z"></path>
          </svg> */}
          <GroupsIcon fontSize="large" color="primary" />
        </div>
        <div>
          <span className="text-sm text-gray-400">Clubs</span>
          <h2 className="font-bold text-3xl">123,456</h2>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
