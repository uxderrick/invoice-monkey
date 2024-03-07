/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyCOwadFIXyThLpT-8GZiUtHr6ORoZHYS-A",
  authDomain: "invoice-monkey-ux.firebaseapp.com",
  projectId: "invoice-monkey-ux",
  storageBucket: "invoice-monkey-ux.appspot.com",
  messagingSenderId: "106782685252",
  appId: "1:106782685252:web:2bfaa2d40677d3151e6411",
  measurementId: "G-Z8HX5FWYT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//export the db
export { db };
export { app };
export { firebaseConfig };

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result.user);
      window.localStorage.setItem("token", result.user.accessToken);
      // console.log(import.meta.env.VITE_FIREBASE_API_KEY);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const useAuth = () => {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  return user;
};

//sign out
export const signOutWithGoogle = () => {
  signOut(auth)
    .then(() => {
      // console.log("signed out");
    })
    .catch((error) => {
      console.log(error);
    });
};
