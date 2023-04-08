import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMEj_8GTIzvEWKxWd-TxA1qsAq4W-TeiM",
  authDomain: "social-media-app-3e515.firebaseapp.com",
  projectId: "social-media-app-3e515",
  storageBucket: "social-media-app-3e515.appspot.com",
  messagingSenderId: "1038416123413",
  appId: "1:1038416123413:web:83e66a07925259a58ae01c",
  measurementId: "G-51XP7ZEDT3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);