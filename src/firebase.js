import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIcaqzA5iQ47wCY65cNfiNtFl41aGcrNc",
  authDomain: "chat-762e4.firebaseapp.com",
  projectId: "chat-762e4",
  storageBucket: "chat-762e4.appspot.com",
  messagingSenderId: "233206544627",
  appId: "1:233206544627:web:ea1b858dd2eb816e159f86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
