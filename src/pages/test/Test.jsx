import React, { useEffect } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../../context/authContext";

function Test() {
  const { currentUser } = useAuth();
  useEffect(() => {
    const fetchCollection = async () => {
      try {
        // Replace 'your-collection-name' with the name of your Firestore collection
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          if (doc.id === currentUser.uid) {
            console.log("User data:", doc.data().favourites[0]);
          }
        });
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };

    fetchCollection();
  }, []);

  return <div>Test</div>;
}

export default Test;
