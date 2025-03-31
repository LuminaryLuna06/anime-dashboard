import React, { useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
const setFav = async (anime, currentUser) => {
  try {
    await setDoc(
      doc(db, "users", currentUser, "favourites", `${anime.mal_id}`),
      {
        uid: anime.mal_id,
        title: anime.title,
        image: anime.images.webp.large_image_url,
      }
    );
    // await setDoc(doc(db, "users", currentUser, "favourites", "1234567"), {
    //   uid: "1234567",
    //   title: "Omg anime",
    // });
    console.log("Anime added to favourites: ", anime.title);
  } catch (error) {
    console.error("Error creating collection:", error);
  }
};

export default setFav;
