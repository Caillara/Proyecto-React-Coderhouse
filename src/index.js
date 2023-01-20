import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKT33UtclTtUOYhqzys_coSqINo25uqmw",
  authDomain: "proezasport-a9a0a.firebaseapp.com",
  projectId: "proezasport-a9a0a",
  storageBucket: "proezasport-a9a0a.appspot.com",
  messagingSenderId: "1060861236531",
  appId: "1:1060861236531:web:74bdf35781573dfdfd1a46",
  measurementId: "G-SWJ57J6YNQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
