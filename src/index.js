import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { BrowserRouter } from "react-router-dom"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

console.log("test");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
