import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqqj_uoJNYIOk-RCz_j-gHOct-rwgss4Y",
  authDomain: "catalog-pdf-builder.firebaseapp.com",
  projectId: "catalog-pdf-builder",
  storageBucket: "catalog-pdf-builder.firebasestorage.app",
  messagingSenderId: "741826511726",
  appId: "1:741826511726:web:ec0edf3382fbe4dc69377f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
