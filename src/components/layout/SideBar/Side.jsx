// import React from "react";
// import Button from "../../ui/Button";
// import getRandomAnime from "../../../api/hooks/getRandomAnime";

// function Side() {
//   const { data: random } = getRandomAnime();

//   return (
//     <div className="md:w-[20%] lg:w-[25%] flex flex-col">
//       {/* Random */}
//       <div className="w-full bg-base-100 p-2 rounded">
//         <h2 className="text-xl font-semibold my-2">Anime for today</h2>
//         <hr className="my-2" />
//         {random && (
//           <Button content={"Random Anime"} link={`/anime/${random.mal_id}`} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Side;

import React, { useState, useEffect } from "react";
import Button from "../../ui/Button";
import getRandomAnime from "../../../api/hooks/getRandomAnime";
import getWatchRecentEpisodes from "../../../api/hooks/getWatchRecentEpisodes";
import { Link } from "react-router-dom";

function Side() {
  const [shouldFetch, setShouldFetch] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldFetch(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const { data: random } = getRandomAnime(shouldFetch);
  const { data: recents } = getWatchRecentEpisodes();

  return (
    <div className="md:w-[20%] lg:w-[25%] flex flex-col gap-2">
      {/* Random */}
      <div className="w-full bg-base-100 p-2 rounded">
        <h2 className="text-xl font-semibold my-2">Anime for today</h2>
        <hr className="my-2" />
        {random && (
          <Button link={`/anime/${random.mal_id}`} content={"Random Anime"} />
        )}
      </div>
      {/* Anime moi cap nhat */}
      <div className="w-full bg-base-100 p-2 rounded">
        <h2 className="text-xl font-semibold my-2">New Episodes</h2>
        <hr className="my-2" />
        <ul>
          {recents &&
            recents.map((recent, index) => (
              <li key={index} className="flex justify-between p-2 bg-base-200 my-2">
                <Link
                  to={`/anime/${recent.entry.mal_id}`}
                  className="text-pink-700 hover:text-pink-500 transition-all duration-500"
                >
                  {recent.entry.title}...
                </Link>
                <p>{recent.episodes[0].mal_id}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Side;
