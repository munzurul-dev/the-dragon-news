// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Evv-iZAnNPef8-Bd0mqfVHr0FaHYtGQ",
  authDomain: "dragon-news-stared.firebaseapp.com",
  projectId: "dragon-news-stared",
  storageBucket: "dragon-news-stared.firebasestorage.app",
  messagingSenderId: "736439811069",
  appId: "1:736439811069:web:d6b0ef2aa5cd175c7e3794"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;