import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("NqgJjaKnCfWUWzFPU9Dd")
  .collection("cart")
  .doc("0p2lky0FU2fsgwlxR3YY");

firestore.doc("/users/NqgJjaKnCfWUWzFPU9Dd/cart/0p2lky0FU2fsgwlxR3YY");

firestore.collection("/users/NqgJjaKnCfWUWzFPU9Dd/cart");
