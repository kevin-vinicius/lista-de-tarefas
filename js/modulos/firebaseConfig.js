// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Isso é opcional, se você não planeja usar Analytics, pode remover essa linha.

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBURb5EqXDRRbh0VoQJQXN_uRXH0xq0hu0",
  authDomain: "lista-de-tarefas-e0218.firebaseapp.com",
  projectId: "lista-de-tarefas-e0218",
  storageBucket: "lista-de-tarefas-e0218.appspot.com",
  messagingSenderId: "243985028478",
  appId: "1:243985028478:web:346bac44adb2aef6becf2f",
  measurementId: "G-CTN26DKC2Z" // Isso também é opcional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Isso é opcional
