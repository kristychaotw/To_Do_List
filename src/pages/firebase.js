// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-OjWSLCF0xZlXb5Xp9odbZB7rCOn9ThI",
  authDomain: "my-todolist-project-27cc2.firebaseapp.com",
  projectId: "my-todolist-project-27cc2",
  storageBucket: "my-todolist-project-27cc2.appspot.com",
  messagingSenderId: "723261169042",
  appId: "1:723261169042:web:9d575839997e433df9354b",
  measurementId: "G-BLDTRLKXEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signup(email,password){
  createUserWithEmailAndPassword(auth, email, password);
}
