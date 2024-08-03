import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcBNh57eGXeuVD6iPmqeC4NIeFf9BP_a8",
    authDomain: "weboffers-c8c0d.firebaseapp.com",
    projectId: "weboffers-c8c0d",
    storageBucket: "weboffers-c8c0d.appspot.com",
    messagingSenderId: "913681164343",
    appId: "1:913681164343:web:ac4aa144d0060f217377b2",
    measurementId: "G-740DY2V805"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
