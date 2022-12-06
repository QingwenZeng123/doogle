// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwhKSzQjKM1jWNeEMVKptyci4Gi5erD4s",
  authDomain: "doggle-97a0c.firebaseapp.com",
  projectId: "doggle-97a0c",
  storageBucket: "doggle-97a0c.appspot.com",
  messagingSenderId: "246482248516",
  appId: "1:246482248516:web:3dfbef9909968f2cb9ed11",
  measurementId: "G-R5ZPFY4J0H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
