/* eslint-disable import/no-unresolved */
/* eslint-disable eol-last */
import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

import {
  initializeApp,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';

import {
  getFirestore, addDoc, collection, getDocs, query, where,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

export {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut,
};

export {
  initializeApp,
};

export {
  getFirestore, addDoc, collection, getDocs, query, where,
};
