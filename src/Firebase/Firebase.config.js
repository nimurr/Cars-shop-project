// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBciI64AZto3u3qjPkER-SUIcEitlJPWY8",
  authDomain: "carshop-with-backend.firebaseapp.com",
  projectId: "carshop-with-backend",
  storageBucket: "carshop-with-backend.appspot.com",
  messagingSenderId: "741078846264",
  appId: "1:741078846264:web:144105ebf9fa21e3d94fcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;