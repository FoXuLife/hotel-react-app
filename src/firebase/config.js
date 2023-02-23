
import { initializeApp } from "firebase/app";

import { collection, getDocs, getFirestore } from "firebase/firestore";
import 'firebase/auth'
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SEND_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};


export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const querySnapshot =  getDocs(collection(db, "favorite"));
querySnapshot.then(e=>{
    e.forEach((doc) => {
        console.log(doc.data().id);
      })
})