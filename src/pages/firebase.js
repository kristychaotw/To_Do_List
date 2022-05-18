import { useState, useEffect } from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

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

export default getFirestore();

export function signup(email,password){
  return createUserWithEmailAndPassword(auth, email, password)
}

export function logout(){
  return signOut(auth)
}

export function login(email,password){
  return signInWithEmailAndPassword(auth, email, password);
}

// Custom Hook

export function useAuth(){
  const [ currentUser, setCurrentUser] = useState();

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, user =>{ setCurrentUser(user)})
    return unsub
  },[currentUser])

  return currentUser
}