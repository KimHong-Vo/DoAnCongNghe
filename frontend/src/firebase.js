// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcaoWZG7RfYPc3N29FCEzsuSXhlRDA6YM",
  authDomain: "auth-dacn.firebaseapp.com",
  projectId: "auth-dacn",
  storageBucket: "auth-dacn.appspot.com",
  messagingSenderId: "827111433514",
  appId: "1:827111433514:web:b1f74a7d4c6349602bea53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);