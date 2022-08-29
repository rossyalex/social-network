import { save } from '../firebase/firebaseConfig.js';

export const logic = () => {
  const buttonRegisterUser = document.getElementById('registerUser');
  const myLogicApp = 'Ok';
  // Si existe un botón en el renderizado entonces agrega evento
  if (buttonRegisterUser) {
    buttonRegisterUser.addEventListener('click', registerFirestore);
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
    alert(`Te has registrado exitosamente ${data}`);
  }).catch((e) => {
    console.error(e);
    alert('Reintenta de nuevo');
  });

  return saveUser;
}
