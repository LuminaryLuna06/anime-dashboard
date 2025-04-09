import { useState, useEffect } from "react";

const Loading = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a loading delay
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000); // Adjust time as needed

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  return (
    <>
      <div className="navbar justify-between bg-[#23252b] text-neutral-content h-5 sticky top-0 z-20">
        <div className="navbar-start">
          <div className="h-10 w-52 lg:w-60 bg-gray-700 mx-5 animate-pulse"></div>
        </div>
        <div className="md:navbar-center gap-5 hidden md:flex">
          <div className="h-5 w-20 lg:w-28 bg-gray-700 animate-pulse"></div>
          <div className="h-5 w-20 lg:w-28 bg-gray-700 animate-pulse"></div>
          <div className="h-5 w-20 lg:w-28 bg-gray-700 animate-pulse"></div>
          <div className="h-5 w-20 lg:w-28 bg-gray-700 animate-pulse"></div>
        </div>
        <div className="navbar-end gap-5">
          <div className="h-10 w-60 bg-gray-700 animate-pulse hidden lg:block"></div>
          <div className="h-10 w-16 bg-gray-700 animate-pulse"></div>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center justify-center bg-black z-50 text-gray-300">
        <span className="loading loading-ring loading-xl"></span>
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    </>
  );
};

//   return null;
// };

export default Loading;
