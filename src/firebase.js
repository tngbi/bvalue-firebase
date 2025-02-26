// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHDqcxfHEOw2E8vMg9-Ro-aAVpusQcOR4",
  authDomain: "bvalue-data-scientist.firebaseapp.com",
  databaseURL: "https://bvalue-data-scientist-default-rtdb.firebaseio.com",
  projectId: "bvalue-data-scientist",
  storageBucket: "bvalue-data-scientist.firebasestorage.app",
  messagingSenderId: "337049350975",
  appId: "1:337049350975:web:e6d0f8ca325aa8bf8b198a",
  measurementId: "G-14BKBBWTDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);