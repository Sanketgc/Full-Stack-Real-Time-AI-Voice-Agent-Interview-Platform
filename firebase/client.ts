import { getApp, getApps,initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjEvdSmFi4xb2NhHq5RqsFr5L2x9xHEv0",
  authDomain: "ai-voice-interview-platf-f68a6.firebaseapp.com",
  projectId: "ai-voice-interview-platf-f68a6",
  storageBucket: "ai-voice-interview-platf-f68a6.firebasestorage.app",
  messagingSenderId: "644565471151",
  appId: "1:644565471151:web:1589dc4eac388335d9a95a",
  measurementId: "G-TD4TDTKT4V"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);