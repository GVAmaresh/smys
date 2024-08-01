import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  deleteUser
} from "firebase/auth";
import { auth, provider } from "./firebase";

export const getSignin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (user.metadata.creationTime === user.metadata.lastSignInTime) {
      await deleteUser(user);
      throw new Error(
        "Sign-up is not allowed. Please use an existing Google account."
      );
    }
    console.log("Sign-in successful");
  } catch (error) {
    console.error("Sign-in failed:", error);
    throw error;
  }
};

export const getSignup = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("Sign-up successful");
  } catch (error) {
    console.error("Sign-up failed:", error);
    throw error;
  }
};

export const getVerified = () => {
  return new Promise((resolve) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user)  {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};
