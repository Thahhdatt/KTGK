// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL88MqI9qZXtBIwb6O6rsHgLW3Dx60jq8",
  authDomain: "ktgk-b6d8b.firebaseapp.com",
  projectId: "ktgk-b6d8b",
  storageBucket: "ktgk-b6d8b.appspot.com",
  messagingSenderId: "798621485351",
  appId: "1:798621485351:web:76c1a385331a1415390102",
  measurementId: "G-XGD9EVMLZV"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };