// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-GP9nR7jkvl1mWaCA4U3v3826nWiVG_c",
  authDomain: "image-gallery-login-auth.firebaseapp.com",
  projectId: "image-gallery-login-auth",
  storageBucket: "image-gallery-login-auth.appspot.com",
  messagingSenderId: "154918168291",
  appId: "1:154918168291:web:179a6a949e2f58ab5407d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;

