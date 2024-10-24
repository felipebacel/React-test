// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import  ReactNativeAsyncStorage  from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFB_xB9lEqJkIzxjxh9wVVjxj8yyrxa0g",
  authDomain: "react-ratings.firebaseapp.com",
  projectId: "react-ratings",
  storageBucket: "react-ratings.appspot.com",
  messagingSenderId: "922729975321",
  appId: "1:922729975321:web:06e987c82375a5c51d2488"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
 initializeAuth(FIREBASE_APP,{
  persistence:getReactNativePersistence(ReactNativeAsyncStorage)
 })
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);