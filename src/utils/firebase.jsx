// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZLa8VA2rlT1tzEXGKIc34zmcz5sRgKw0",
  authDomain: "netflixx-gpt-95ce9.firebaseapp.com",
  projectId: "netflixx-gpt-95ce9",
  storageBucket: "netflixx-gpt-95ce9.firebasestorage.app",
  messagingSenderId: "248445777683",
  appId: "1:248445777683:web:17012f6e683e62d77f0ce6",
  measurementId: "G-FVCEC51Y6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export {  signOut };

