import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlpVPRW4Sh6ZY-yZ-ymI9FIPCQRla35aA",
  authDomain: "re-com.firebaseapp.com",
  databaseURL: "https://re-com.firebaseio.com",
  projectId: "re-com",
  storageBucket: "re-com.appspot.com",
  messagingSenderId: "747706809603",
  appId: "1:747706809603:web:e049314fcc5e378e557d36",
  measurementId: "G-CG7YJHNDP8"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
