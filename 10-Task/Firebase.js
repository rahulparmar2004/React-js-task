// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeau1nk8YnoTdnshxlwOqn8rTGsu1REhg",
  authDomain: "rahul-3630a.firebaseapp.com",
  databaseURL: "https://rahul-3630a-default-rtdb.firebaseio.com",
  projectId: "rahul-3630a",
  storageBucket: "rahul-3630a.firebasestorage.app",
  messagingSenderId: "823450552432",
  appId: "1:823450552432:web:7533d06a2fce902e0a0cb5",
  measurementId: "G-SCFHMZFKYZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);