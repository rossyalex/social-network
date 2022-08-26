import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

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
