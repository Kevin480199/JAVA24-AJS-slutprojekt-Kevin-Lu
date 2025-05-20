// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// Login
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL43uYVq_oFyqmYcakiSxRONJql1GUn2Y",
  authDomain: "avancerad-js-ae72e.firebaseapp.com",
  databaseURL: "https://avancerad-js-ae72e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "avancerad-js-ae72e",
  storageBucket: "avancerad-js-ae72e.firebasestorage.app",
  messagingSenderId: "671481333033",
  appId: "1:671481333033:web:7527f022d563cacfb5a338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
export const auth = getAuth(app);
export const scrumRef = ref(database, '/ScrumBoard')