// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAkgSJgsDSmbpU__-6jW32JxylxOE0-E48",
  authDomain: "far-in-jim.firebaseapp.com",
  projectId: "far-in-jim",
  storageBucket: "far-in-jim.appspot.com",
  messagingSenderId: "252490233814",
  appId: "1:252490233814:web:ab6891e1cc9a65136ad677",
  measurementId: "G-0PE6XY4119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log (db);

export { db };

