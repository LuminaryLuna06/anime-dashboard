import React, { useEffect, useState, Suspense, lazy } from "react";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useAuth } from "../../context/authContext";

import SliderCard from "../../components/ui/Cards/SliderCard";
import SliderCardSkeleton from "../../components/ui/Skeleton/SliderCardSkeleton";

const LazySlider = lazy(() =>
  delay(import("../../components/ui/Cards/SliderCard"))
);

function Favourites() {
  const { currentUser } = useAuth();
  const [favourites, setFavourites] = useState([]);
  console.log(currentUser);
  useEffect(() => {
    const getFavourites = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "users", currentUser.uid, "favourites")
        );
        const favouritesArray = [];
        querySnapshot.forEach((doc) => {
          favouritesArray.push(doc.data());
        });
        setFavourites(favouritesArray);
      } catch (error) {
        console.log("Error fetching collection: ", error);
      }
    };
    getFavourites();
  }, []);

  return (
    <div className="h-[1440px]">
      {/* <div className="lg:w-[80%] mx-auto">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/270/794/non_2x/abstract-gradient-shape-wavy-background-free-vector.jpg"
          alt=""
          className="h-[200px] w-full bg-cover"
        />
      </div> */}
      {/* Welcome User */}
      <div className="lg:w-[80%] md:w-[90%] h-[100vh] mx-auto flex md:flex-row flex-col my-5">
        {/* name of each tab group should be unique */}
        <div className="md:w-1/5  mx-auto">
          <div className="avatar">
            <div className="md:w-full w-48 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <div className="md:w-4/5 p-5">
          <h1>{currentUser.displayName}</h1>

          <div className="tabs tabs-box bg-transparent">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab font-bold my-2"
              aria-label="Info"
              defaultChecked
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <h2>User ID: {currentUser.uid}</h2>
              <h2>Joined at: {currentUser.metadata.creationTime}</h2>
            </div>

            <input
              type="radio"
              name="my_tabs_6"
              className="tab font-bold my-2"
              aria-label="Favourite list"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <h1 className="mb-0">Your Favourite Lists: </h1>
              <Suspense fallback={<SliderCardSkeleton cards={6} />}>
                <LazySlider props={favourites} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-[70%] mx-auto h-[100vh]">
        <h1 className="mb-0">Your Favourite Lists: </h1>
        <Suspense fallback={<SliderCardSkeleton cards={6} />}>
          <LazySlider props={favourites} />
        </Suspense>
      </div> */}
    </div>
  );
}

function delay(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 700);
  }).then(() => promise);
}

export default Favourites;
