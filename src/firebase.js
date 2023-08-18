// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA8fVHz_LaTRcVJwwoUOJ_cwt2lGgn5pg",
  authDomain: "mayaya-dental-studios.firebaseapp.com",
  projectId: "mayaya-dental-studios",
  storageBucket: "mayaya-dental-studios.appspot.com",
  messagingSenderId: "520538432280",
  appId: "1:520538432280:web:33317f6b4dbd46d561b46d"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebase);
export default firebase;

