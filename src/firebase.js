import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJaC_ox3Z_V2EU9oMZepYauKyUszzYoUo",
  authDomain: "whatsapp-mern-2735f.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-2735f.firebaseio.com",
  projectId: "whatsapp-mern-2735f",
  storageBucket: "whatsapp-mern-2735f.appspot.com",
  messagingSenderId: "109406992302",
  appId: "1:109406992302:web:34d8b271311ef20ef1ba3f",
  measurementId: "G-XYPBNHYTZL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth();
GoogleAuthProvider();
