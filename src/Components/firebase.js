
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBYSTMUFABNj44Tetn4zgZYQmt9FSmNOo0",
  authDomain: "typerit-1132d.firebaseapp.com",
  projectId: "typerit-1132d",
  storageBucket: "typerit-1132d.appspot.com",
  messagingSenderId: "681179521948",
  appId: "1:681179521948:web:0499695f4bd276b4f15e59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  const db = firebase.firestore();

const db = getFirestore();


  const storage = getStorage(app);
export  {db, storage}
export default app