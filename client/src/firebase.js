// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-85417.firebaseapp.com",
  projectId: "mern-auth-85417",
  storageBucket: "mern-auth-85417.appspot.com",
  messagingSenderId: "428884803293",
  appId: "1:428884803293:web:026aa36b29f8b48847a534",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
