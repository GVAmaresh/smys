import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

let analytics = null;
export let auth = null;

if (typeof window !== "undefined") {
  const { getAnalytics } = require("firebase/analytics");
  analytics = getAnalytics(app);

  const { getAuth } = require("firebase/auth");
  auth = getAuth(app);
}

export const useFirebase = () => {
  useEffect(() => {
    try {
      if (!analytics) {
        analytics = getAnalytics(app);
      }
    } catch (error) {
      console.error("Error initializing Firebase Analytics:", error);
    }
  }, []);
};
