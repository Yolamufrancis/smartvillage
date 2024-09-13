// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-71528.firebaseapp.com",
  projectId: "mern-71528",
  storageBucket: "mern-71528.appspot.com",
  messagingSenderId: "577387710570",
  appId: "1:577387710570:web:86cd0834d6b5fae22f2213"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);