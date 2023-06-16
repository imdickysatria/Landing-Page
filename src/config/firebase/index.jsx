// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Mk246NeppHcvOGSi6lCow1nQwipcamk",
  authDomain: "belajarreact-4a188.firebaseapp.com",
  projectId: "belajarreact-4a188",
  storageBucket: "belajarreact-4a188.appspot.com",
  messagingSenderId: "37837186031",
  appId: "1:37837186031:web:56a55188a539fffed08c1a",
  measurementId: "G-05F3DK7HXC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
