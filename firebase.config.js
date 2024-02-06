// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOHINqnoSNqFdaiz9NRUI73LEftDuH8Es",
  authDomain: "guestbook-a0a5d.firebaseapp.com",
  projectId: "guestbook-a0a5d",
  storageBucket: "guestbook-a0a5d.appspot.com",
  messagingSenderId: "403103727260",
  appId: "1:403103727260:web:5b81c28e37e97f0a9d3759",
  measurementId: "G-GVEHS39GMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GithubAuthProvider();

export {auth, provider}