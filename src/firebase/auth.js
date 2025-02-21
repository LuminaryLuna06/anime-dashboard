import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      role: "user",
    });
    console.log("User signed up: ", user.email);
    return user;
  } catch (error) {
    console.error("Error signing up: ", error);
  }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      role: "user",
    });
    console.log("User signed up: ", user.email);
    return user;
  } catch (error) {
    console.error("Error signing up: ", error);
  }
};

// export const checkAdmin = async (user) => {
//   try {
//     if (!user || !user.uid) {
//       console.log("Invalid user object:", user);
//       return false;
//     }

//     const userDoc = await getDoc(doc(db, "users", user.uid));
//     if (userDoc.exists()) {
//       const userData = userDoc.data();
//       console.log("User data:", userData);
//       if (userData.role === "admin") return true;
//       else return false;
//     }
//     else {
//       console.log("No user data found!");
//       return false;
//     }
//   } catch (error) {
//     console.error("Error checking admin role:", error);
//     return false;
//   }
// };

export const doSignOut = () => {
  return auth.signOut();
};

// export const doPasswordReset = (email) => {
//   return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser, password);
// };

// export const doSendEmailVerification = () => {
//   return sendEmailVerification(auth.currentUser, {
//     url: `${window.location.origin}/home`,
//   });
// };
