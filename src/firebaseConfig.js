// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Zz8Yp7xjzoecX4whou5JrgO6bYP8FJU",
  authDomain: "doogle-bf5d0.firebaseapp.com",
  projectId: "doogle-bf5d0",
  storageBucket: "doogle-bf5d0.appspot.com",
  messagingSenderId: "539355114641",
  appId: "1:539355114641:web:780c9cdc830f4f92f5e330",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
