// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzYkXtAUOvlmFwr1OkIYLd567XgoCNaNI",
  authDomain: "ms-manufacturing.firebaseapp.com",
  projectId: "ms-manufacturing",
  storageBucket: "ms-manufacturing.appspot.com",
  messagingSenderId: "368840510386",
  appId: "1:368840510386:web:0c6618f5358b1151a432ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;