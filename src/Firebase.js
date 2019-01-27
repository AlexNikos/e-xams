import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDX3wEj5fy6qEziamKqmyZryxFn3mRV2Zg",
  authDomain: "e-xams.firebaseapp.com",
  databaseURL: "https://e-xams.firebaseio.com",
  projectId: "e-xams",
  storageBucket: "e-xams.appspot.com",
  messagingSenderId: "264572969600"
};

firebase.initializeApp(config);

export const databaseRef = firebase.database();
export const authRef = firebase.auth();
