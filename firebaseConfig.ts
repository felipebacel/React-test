import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQHjECWdYI6LpRReII0qkCq91Az9SuiaU",
  authDomain: "rnauthmovies.firebaseapp.com",
  projectId: "rnauthmovies",
  storageBucket: "rnauthmovies.firebasestorage.app",
  messagingSenderId: "233748138511",
  appId: "1:233748138511:web:6315d2ea994a877fe8b17a"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
