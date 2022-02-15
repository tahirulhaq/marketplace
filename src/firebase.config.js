// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdcZ2chKWYSwt-cK1_1V4Kk0QFhszqHO0",
  authDomain: "house-marketplace-app-6900e.firebaseapp.com",
  projectId: "house-marketplace-app-6900e",
  storageBucket: "house-marketplace-app-6900e.appspot.com",
  messagingSenderId: "775344634479",
  appId: "1:775344634479:web:1b0185e8ffe2407677eb9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()