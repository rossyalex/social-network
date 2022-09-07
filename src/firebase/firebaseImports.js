// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,

// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

import config from './config.js';

const app = initializeApp(config);
const provider = new GoogleAuthProvider(app);
// Inicializa DB de Firestore
const db = getFirestore(app);
// Inicializa la autenticación de usuarios
const auth = getAuth(app);

export {
  app,
  auth,
  provider,
  db,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  collection,
  addDoc,
  Timestamp,
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,

};
