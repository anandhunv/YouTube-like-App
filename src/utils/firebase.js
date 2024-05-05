// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FIREBASE_API_KEY } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "utube-1c6ce.firebaseapp.com",
  projectId: "utube-1c6ce",
  storageBucket: "utube-1c6ce.appspot.com",
  messagingSenderId: "841338193191",
  appId: "1:841338193191:web:c33eedc90a187462725502",
  measurementId: "G-J4Y106L55V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);