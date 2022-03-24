import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCKK6NflcVmo9Cp8SVKzf9dlAn_PBHEqGg",
  authDomain: "react-crown-cloth.firebaseapp.com",
  projectId: "react-crown-cloth",
  storageBucket: "react-crown-cloth.appspot.com",
  messagingSenderId: "921471415656",
  appId: "1:921471415656:web:da4fa1e5cc79249bf712dd",
  measurementId: "G-VPVJ7NHB83",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = await firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);
 
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
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
