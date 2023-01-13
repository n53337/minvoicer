import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "minvoicer0.firebaseapp.com",
  projectId: "minvoicer0",
  storageBucket: "minvoicer0.appspot.com",
  messagingSenderId: "793270075282",
  appId: "1:793270075282:web:152d6d0a77b4879c43cb4b",
};

export const app = initializeApp(firebaseConfig);
