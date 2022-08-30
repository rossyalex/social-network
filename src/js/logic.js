import { save } from '../firebase/firebaseConfig.js';
import { accessGoogle, outGoogle } from '../firebase/auth.js';

export const logic = () => {
  const buttonRegisterUser = document.getElementById('registerUser');
  const signInGoogle = document.getElementById('linkWithGoogle');
  const buttonOutGoogle = document.getElementById('outGoogle');
  console.log(buttonOutGoogle);
  const myLogicApp = 'Ok';
  // Si existe un botón en el renderizado entonces agrega evento
  if (buttonRegisterUser) {
    buttonRegisterUser.addEventListener('click', registerFirestore);
  }

  if (signInGoogle) {
    signInGoogle.addEventListener('click', signInFunctionGoogle);
  }

  if (buttonOutGoogle) {
    buttonOutGoogle.addEventListener('click', outGoogle);
  }

  return myLogicApp;
};

function registerFirestore() {
  let saveUser = '';
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const repeatPassword = document.getElementById('repeatpassword').value;

  const user = {
    email,
    password,
    repeatPassword,
  };
  save(user).then((data) => {
    saveUser = data;
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('repeatpassword').value = '';
    alert(`Te has registrado exitosamente ${data}`);
  }).catch((e) => {
    console.error(e);
    alert('Reintenta de nuevo');
  });

  return saveUser;
}

function signInFunctionGoogle() {
  accessGoogle();
}
