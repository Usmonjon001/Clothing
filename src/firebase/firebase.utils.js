import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDUARCOELJ6uUdpwMZTM3yUvvZEPAIenvc",
  authDomain: "clothing-d4206.firebaseapp.com",
  projectId: "clothing-d4206",
  storageBucket: "clothing-d4206.appspot.com",
  messagingSenderId: "465534800631",
  appId: "1:465534800631:web:0ef8e72eede815078239f2",
  measurementId: "G-3Z5HCTE7WY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;







