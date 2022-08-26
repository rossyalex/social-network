import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAef9OfO4JYalkU__zuIfMITVkT4ZlPfcY",
    authDomain: "runnerlovers.firebaseapp.com",
    projectId: "runnerlovers",
    storageBucket: "runnerlovers.appspot.com",
    messagingSenderId: "608285600466",
    appId: "1:608285600466:web:266e3bba070ee672835b0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const db = firebase.firestore();

export default db;