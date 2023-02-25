// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDkSFJpWoOizbCj6L5DmLW7Fw9nICg0RPc",
    authDomain: "todo-app-cpx.firebaseapp.com",
    projectId: "todo-app-cpx",
    storageBucket: "todo-app-cpx.appspot.com",
    messagingSenderId: "471206720122",
    appId: "1:471206720122:web:8a0c5596018385d19b81c3",
    measurementId: "G-PSXTY3ELPR"
  };

const firebaseApp = firebase.initializeApp({firebaseConfig});

const db = firebaseApp.firestore();

export default db;