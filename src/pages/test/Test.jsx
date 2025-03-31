import React, { useEffect } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs, setDoc, getDoc, doc } from "firebase/firestore";
import { useAuth } from "../../context/authContext";

function Test() {
  const { currentUser } = useAuth();
  const setFavourites = async (anime) => {
    try {
      await setDoc(doc(db, "users", currentUser.uid, "favourites", anime.uid), {
        title: anime.title,
        image: anime.images.webp.large_image_url,
      });
    } catch (error) {
      console.error("Error creating collection:", error);
    }
  };
  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "users", currentUser.uid, "favourites")
        );
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
        await setDoc(
          doc(db, "users", currentUser.uid, "favourites", "0123456"),
          {
            title: "One Piece",
            id: "0123456",
          }
        );
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };

    fetchCollection();
  }, []);

  return <div>Test</div>;
}

export default Test;
