import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCIdEL37v1cJsiK3Sk2P9wPTVhe6yZBh3I",
  authDomain: "vclone-5a34d.firebaseapp.com",
  projectId: "vclone-5a34d",
  storageBucket: "vclone-5a34d.firebasestorage.app",
  messagingSenderId: "342955101650",
  appId: "1:342955101650:web:07d4b9bc489f92d37b4c0b",
  measurementId: "G-NB5XY3YBS0"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);