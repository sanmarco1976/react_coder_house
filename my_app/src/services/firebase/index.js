
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWcBuYt6T1dto4OlPnAh9OY-4-l0u4jmg",
  authDomain: "felixa-2022.firebaseapp.com",
  projectId: "felixa-2022",
  storageBucket: "felixa-2022.appspot.com",
  messagingSenderId: "963557457459",
  appId: "1:963557457459:web:4f5b68d3ddcce9204a6d46"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)