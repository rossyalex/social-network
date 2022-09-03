import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { get } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js';
import { getFirestore, addDoc, doc, collection, getDoc, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyAef9OfO4JYalkU__zuIfMITVkT4ZlPfcY',
  authDomain: 'runnerlovers.firebaseapp.com',
  projectId: 'runnerlovers',
  storageBucket: 'runnerlovers.appspot.com',
  messagingSenderId: '608285600466',
  appId: '1:608285600466:web:266e3bba070ee672835b0b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const save = async (user) => {
  try {
    console.log(user);
    const docRef = await addDoc(collection(db, 'users'), user);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
    return e;
  }
};

export const getUser = async (email) => {
  console.log(email);
  const userRef = collection(db, 'users');
  const q = query(userRef, where("email", "==", email));
  const executeQuery = await getDocs(q);
  return executeQuery;
//   const usersRef = firebase
//   .firestore()
//   .collection("users");

// usersRef
//   .get()
//   .then((results) => {
//     const data = results.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     console.log("Toda la data de users ", data); 
//     // [ { id: 'glMeZvPpTN1Ah31sKcnj', titulo: 'El gran Gatsby' } ]
//   });
  
}

export {
  app
};

