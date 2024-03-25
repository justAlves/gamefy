// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn6ezgfzq7Y0PKL07jjxtx21Ti_j5e4kI",
  authDomain: "gamefy-eb66e.firebaseapp.com",
  projectId: "gamefy-eb66e",
  storageBucket: "gamefy-eb66e.appspot.com",
  messagingSenderId: "1006289657167",
  appId: "1:1006289657167:web:bb1d216d966a6db0a9793a",
  measurementId: "G-RGX3QJ95FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);

export const useFirebase = () => {
    return {db, auth, storage}
};