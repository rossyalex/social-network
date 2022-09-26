import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut, app,
} from './firebaseImports.js';
import { routeString } from '../js/router.js';

const provider = new GoogleAuthProvider();

// Iniciar sesión con Ventana de Google
export const accessGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((response) => {
      const { user: { accessToken, email, uid } } = response;
      localStorage.setItem('uid', uid);
      localStorage.setItem('token', accessToken);
      const mailModified = email.split('@')[0];
      localStorage.setItem('email', mailModified);
      routeString('/');
    })
    .catch((error) => {
      console.log(error);
    });
};

// Cerrar sesión
export const logout = async () => {
  const auth = getAuth(app);
  try {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('uid');
    routeString('/signin');
  } catch (e) {
    // console.error(e);
  }
};
