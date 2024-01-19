// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeIjSJ9m_qFLg5v2eOKmRbhejnXr_ol0o",
  authDomain: "airbnb-light.firebaseapp.com",
  projectId: "airbnb-light",
  storageBucket: "airbnb-light.appspot.com",
  messagingSenderId: "400459694930",
  appId: "1:400459694930:web:8b1963003c17d22b3c308b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
