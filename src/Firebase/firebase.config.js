// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDpPpmQOMkXi-nptSyBJINfZcRks403t4",
  authDomain: "email-authentication-d9ead.firebaseapp.com",
  projectId: "email-authentication-d9ead",
  storageBucket: "email-authentication-d9ead.appspot.com",
  messagingSenderId: "669681913645",
  appId: "1:669681913645:web:1a5310a0809a114dd44da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;