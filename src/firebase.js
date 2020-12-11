import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-auth';
import 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC9Ga6P3Ec5Q6AcJTf8w6thAX7ZUY6IjXo',
  authDomain: 'fooxy-40f30.firebaseapp.com',
  databaseURL: 'https://fooxy-40f30.firebaseio.com',
  projectId: 'fooxy-40f30',
  storageBucket: 'fooxy-40f30.appspot.com',
  messagingSenderId: '1006155714687',
  appId: '1:1006155714687:web:f3a72084e2fe169dbf2f4a',
  measurementId: 'G-MW5WMD7SSH',
};
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { fb, db };
