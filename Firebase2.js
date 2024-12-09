// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlSuTtLIFOjN2OeTv8eaMLpZUw8oCYb7Y",
  authDomain: "swiggy-76d76.firebaseapp.com",
  projectId: "swiggy-76d76",
  storageBucket: "swiggy-76d76.firebasestorage.app",
  messagingSenderId: "830215637387",
  appId: "1:830215637387:web:2bd1cb3ee281dc3f2fc78e",
  measurementId: "G-VR66YY6NN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);