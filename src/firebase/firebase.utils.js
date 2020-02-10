import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAjDi6fogmzDt2ZHLLjDvhUvEdedpNPLsU",
  authDomain: "online-store-db-6fbbd.firebaseapp.com",
  databaseURL: "https://online-store-db-6fbbd.firebaseio.com",
  projectId: "online-store-db-6fbbd",
  storageBucket: "online-store-db-6fbbd.appspot.com",
  messagingSenderId: "555779756420",
  appId: "1:555779756420:web:6b085eca56695a2dfc4dd1",
  measurementId: "G-GY85P9CFH9"
};




firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
