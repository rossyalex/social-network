// eslint-disable-next-line import/no-cycle
import { handleError } from './logic.js';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from '../firebase/firebaseImports.js';

/**
 * Función para login con email y password
 * @param email
 * @param pass
 * @return {Promise<*>}
 */
// eslint-disable-next-line consistent-return
export async function logInPath(email, pass) {
  try {
    return await signInWithEmailAndPassword(auth, email, pass);
  } catch (e) {
    // eslint-disable-next-line default-case
    switch (e.message) {
      case 'Firebase: Error (auth/invalid-email).':
        handleError('createAccount');
        break;
      case 'Firebase: Error (auth/user-not-found).':
        handleError('createAccount');
        break;
      case 'Firebase: Error (auth/wrong-password).':
        handleError('errorLogin');
        break;
      case 'Firebase: Error (auth/internal-error).':
        handleError('errorLogin');
        break;
    }
  }
}

/**
 * Función para registrar usuarios
 * @param email
 * @param pass
 * @return Promise<*>
 */
// eslint-disable-next-line consistent-return
export async function register(email, pass) {
  try {
    return await createUserWithEmailAndPassword(auth, email, pass);
  } catch (e) {
    // eslint-disable-next-line default-case
    switch (e.message) {
      case 'Firebase: Error (auth/invalid-email).':
        handleError('errorInfo');
        break;
      case 'Firebase: Error (auth/email-already-in-use).':
        handleError('errorUserCreated');
        break;
      case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
        handleError('errorUserPass');
        break;
      case 'Firebase: Error (auth/missing-email).':
        handleError('errorInfo');
        break;
      case 'Firebase: Error (auth/internal-error).':
        handleError('errorInfo');
        break;
    }
  }
}

export function userActive() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log('No esta logueado');
      window.location.href = '/signin';
    }
  });
}
