import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase Config

const firebaseConfig = {
  // apiKey: "AIzaSyB5-fIbY5oStv9hQZf47Gb8cIim14DLeuw",
  apiKey: import.meta.env.VITE_API_KEY || "mock_key",
  authDomain: "minvoicer0.firebaseapp.com",
  projectId: "minvoicer0",
  storageBucket: "minvoicer0.appspot.com",
  messagingSenderId: "793270075282",
  appId: "1:793270075282:web:152d6d0a77b4879c43cb4b",
};

// Init App

export const app = initializeApp(firebaseConfig);

// DataBase Init

export const db = getFirestore(app);
