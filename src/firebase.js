// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS_k_CgHFBcWOmxGVJ3JCseABGjnMLvpM",
  authDomain: "mayaya-dentals.firebaseapp.com",
  projectId: "mayaya-dentals",
  storageBucket: "mayaya-dentals.appspot.com",
  messagingSenderId: "1030342234482",
  appId: "1:1030342234482:web:df12593d7ab4356d2ccdeb",
  measurementId: "G-G9229VBPQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);