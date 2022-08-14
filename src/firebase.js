import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAIPHPbnDNbCkvoWWCDvCPYIyajrSjcjMM",
  authDomain: "clone-b6811.firebaseapp.com",
  projectId: "clone-b6811",
  storageBucket: "clone-b6811.appspot.com",
  messagingSenderId: "430531454939",
  appId: "1:430531454939:web:d95c7e04b34c71b98ce9fe"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };