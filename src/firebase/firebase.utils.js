import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAo2WgboWgg4_jsS0Gh6ita7ABhJs2-40c",
    authDomain: "my-shop-781ef.firebaseapp.com",
    databaseURL: "https://my-shop-781ef.firebaseio.com",
    projectId: "my-shop-781ef",
    storageBucket: "my-shop-781ef.appspot.com",
    messagingSenderId: "439496247438",
    appId: "1:439496247438:web:9135b4ec4a97d2323a61df",
    measurementId: "G-KNXMMTNPZ9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;