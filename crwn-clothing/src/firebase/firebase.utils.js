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
  const userRef = await firestore.doc(`/users/golu`);

   const snapShot = await userRef.get();

   console.log(snapShot.data);

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

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {

  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);


  //group all the calls to firebase into one big request
  const firestoreBatch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); 
    console.log(newDocRef);
    firestoreBatch.set(newDocRef, obj); 
  })

  return await firestoreBatch.commit();

}

export const convertCollectionsSnapshotToMap=collections=>{
  const transfirmedCOllection=collections.map( doc=>{


    const {title,items}=doc.data();

    return {
      id:doc.id, 
      title,
      items,
      routeName:encodeURI(title.toLowerCase())
    }
  }
  
  )
  //console.log(transfirmedCOllection);
 return transfirmedCOllection.reduce((acc,collection)=>{
    acc[collection.title.toLowerCase()]=collection;
    return acc;
  },{});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
