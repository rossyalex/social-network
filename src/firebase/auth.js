import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
// eslint-disable-next-line import/named
import { app } from './firebaseConfig.js';

const provider = new GoogleAuthProvider();

// Iniciar sesión con Ventana de Google
export const accessGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('Result signInPopup', result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log('Credenciales', credential);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // window.location.href = '/';
    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode);
      console.log(errorMessage);
    });
};

// Cerrar sesión
export const outGoogle = async () => {
  const auth = getAuth(app);
  try {
    await signOut(auth);
    console.log('Te has deslogueado exitosamente');
  } catch (e) {
    console.error(e);
  }
};
