// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzT-Ox1reqaJf2BD5_TJpBF-Va1SN7t_k",
  authDomain: "gatotips-productos.firebaseapp.com",
  projectId: "gatotips-productos",
  storageBucket: "gatotips-productos.appspot.com",
  messagingSenderId: "658914816022",
  appId: "1:658914816022:web:4255dbdd117f9e6644c537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =  getFirestore(app);