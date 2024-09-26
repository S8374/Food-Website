// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLRpI3NgveyYAHfvN8DxsPosQx7tuGQ_Q",
  authDomain: "food-website-1ff20.firebaseapp.com",
  projectId: "food-website-1ff20",
  storageBucket: "food-website-1ff20.appspot.com",
  messagingSenderId: "1017346963710",
  appId: "1:1017346963710:web:737656120497f50c6a8daf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
export default auth ;