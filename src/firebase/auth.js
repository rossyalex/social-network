import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut, app,
} from './firebaseImports.js';

const provider = new GoogleAuthProvider();

// Iniciar sesión con Ventana de Google
export const accessGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((response) => {
      const { user: { accessToken, email, uid } } = response;
      localStorage.setItem('uid', uid);
      localStorage.setItem('token', accessToken);
      localStorage.setItem('email', email);
      // console.log('Result signInPopup', result);
      // // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // console.log('Credenciales', credential);
      // // const token = credential.accessToken;
      // // The signed-in user info.
      // const user = result.user;
      // console.log(user);
      window.location.href = '/';
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
    window.location.href = '/signin';
  } catch (e) {
    // console.error(e);
  }
};
