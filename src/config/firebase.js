// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9hiGVjQ9a0LoOugaU5HD6sCIqmPMSceY",
  authDomain: "livly-palette.firebaseapp.com",
  projectId: "livly-palette",
  storageBucket: "livly-palette.appspot.com",
  messagingSenderId: "617952136010",
  appId: "1:617952136010:web:13bcc95d617b6e76eb8fb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)