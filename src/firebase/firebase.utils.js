import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDB6wHY523PeZJ5utltjM3kvFaY9-ZYTbs",
  authDomain: "ecmr-db.firebaseapp.com",
  databaseURL: "https://ecmr-db.firebaseio.com",
  projectId: "ecmr-db",
  storageBucket: "ecmr-db.appspot.com",
  messagingSenderId: "425269483195",
  appId: "1:425269483195:web:d2d590d4a6a9beeb677b9e",
  measurementId: "G-CN463WSHN3",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(" error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
