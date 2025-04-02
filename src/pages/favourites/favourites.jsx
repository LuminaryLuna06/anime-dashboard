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
        console.log(favouritesArray);
        setFavourites(favouritesArray);
      } catch (error) {
        console.log("Error fetching collection: ", error);
      }
    };
    getFavourites();
  }, []);

  return (
    <div className="w-[70%] mx-auto h-[100vh]">
      <h1 className="mb-0">Your Favourite Lists: </h1>
      <Suspense fallback={<SliderCardSkeleton cards={6} />}>
        <LazySlider props={favourites} />
      </Suspense>
    </div>
  );
}

function delay(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 700);
  }).then(() => promise);
}

export default Favourites;
