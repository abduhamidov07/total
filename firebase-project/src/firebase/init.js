// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLbyQIfT0JQyconhjApS_6loe-EoWEWfI",
  authDomain: "myfirstproject-c96ea.firebaseapp.com",
  projectId: "myfirstproject-c96ea",
  storageBucket: "myfirstproject-c96ea.appspot.com",
  messagingSenderId: "1047257759553",
  appId: "1:1047257759553:web:e5f66f5536df0968c86bc0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFireStore();
export default db;