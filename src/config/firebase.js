// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "XXXXXXXXX",
  authDomain: "XXXXXXXXX.firebaseapp.com",
  projectId: "livly-palette",
  storageBucket: "XXXXXXXXX.appspot.com",
  messagingSenderId: "XXXXXXXXX",
  appId: "1:XXXXXXXXX:web:XXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
