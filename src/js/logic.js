import {
  save, getUser,
} from '../firebase/firebaseConfig.js';
import {
  accessGoogle, outGoogle,
} from '../firebase/auth.js';

function singInPath() { window.location.href = '/login'; }
function registerPath() { window.location.href = '/register'; }

async function logInPath() {
  const emailInput = document.getElementById('emailLogIn');
  const passInput = document.getElementById('passwordLogIn');

  const errorLogin = document.getElementById('errorLogin');
  const email = emailInput.value;
  const pass = passInput.value;

  // Valido inputs diferentes o vacío
  if (email === '') {
    // Ingresa tu correo error
    errorLogin.classList.add('hide');
    errorLogin.classList.remove('hide');
    return;
  }
  if (pass === '') {
    // Ingresa tu contraseña
    errorLogin.classList.add('hide');
    errorLogin.classList.remove('hide');
    return;
  }

  // Esta parte obtiene al usuario desde Firestore
  const response = await getUser(email);

  let user = null;

  response.forEach((doc) => {
    user = doc.data();
  });

  // Validamos si existe el usuario
  if (user) {
    const { password, name } = user; // Esto viene de Firestore
    if (password !== pass) {
      errorLogin.classList.add('hide');
      errorLogin.classList.remove('hide');
      return;
    }
    // Guardo el nombre
    localStorage.setItem('name', name);

    // If localStorage.getItem('name') != null
    window.location.href = '/';
  } else {
    // Mostrar error de que no existe el usuario
    const createAccount = document.getElementById('createAccount');
    createAccount.classList.add('hide');
    createAccount.classList.remove('hide');
  }
}

/**
 * Función para cambiar el ojo y ocultar/mostrar password
 * @param e
 * @param inputId
 */
export function toggle(e, inputId) {
  const inputPassword = document.getElementById(inputId);
  const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  inputPassword.setAttribute('type', type);
  e.target.classList.toggle('fa-eye-slash');
}

/**
 * Función para mostrar/ocultar password
 */
function toggleEyeRegister() {
  const eyes = document.querySelectorAll('.passwordEye');
  const passInputs = ['password', 'repeatPassword'];
  eyes.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      const idInput = passInputs[i];
      toggle(e, idInput);
      // Primera iteración toggle(e, 'password');
      // Segunda iteracion toggle(e, repeatPassword);
    });
  });
}

async function registerFirestore() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const repeatPassword = document.getElementById('repeatPassword').value;
  const errorInfo = document.getElementById('errorInfo');

  const response = await getUser(email);

  let userResponse = null;

  response.forEach((doc) => {
    userResponse = doc.data();
  });

  // Mensaje de error usuario ya creado
  if (userResponse) {
    const errorUserCreated = document.getElementById('errorUserCreated');
    errorUserCreated.classList.add('hide');
    errorUserCreated.classList.remove('hide');
    return;
  }

  const user = {
    name,
    email,
    password,
    repeatPassword,
  };

  // Mensaje de error registro
  if (user.name === '') {
    errorInfo.classList.add('hide');
    errorInfo.classList.remove('hide');
    window.location.href = '/register';
  }

  if (user.email === '') {
    errorInfo.classList.add('hide');
    errorInfo.classList.remove('hide');
    window.location.href = '/register';
  }

  if (user.password === '') {
    errorInfo.classList.add('hide');
    errorInfo.classList.remove('hide');
    window.location.href = '/register';
  }

  if (user.repeatPassword === '') {
    errorInfo.classList.add('hide');
    errorInfo.classList.remove('hide');
    window.location.href = '/register';
  }

  // Guardar la data
  save(user).then((data) => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('repeatPassword').value = '';
    console.log(data);
    // TODO Informar registro exitoso
    // alert(`Te has registrado exitosamente ${data}`);
    window.location.href = '/';
  }).catch((e) => {
    console.error(e);
    // TODO Informar error de volver a intentarlo
    // alert('Vuelve a intentarlo');
  });
}

function signInFunctionGoogle() {
  accessGoogle();
}

export const logic = () => {
  const buttonRegisterUser = document.getElementById('registerUser');
  const signInGoogle = document.getElementById('linkWithGoogle');
  const buttonOutGoogle = document.getElementById('outGoogle');
  const signInView = document.getElementById('initiation');
  const registerView = document.getElementById('create');
  const buttonLogIn = document.getElementById('login');
  // console.log(buttonOutGoogle);
  const myLogicApp = 'Ok';
  // Si existe un botón en el renderizado entonces agrega evento
  if (buttonRegisterUser) {
    toggleEyeRegister();
    buttonRegisterUser.addEventListener('click', registerFirestore);
  }

  if (signInGoogle) {
    signInGoogle.addEventListener('click', signInFunctionGoogle);
  }

  if (buttonOutGoogle) {
    buttonOutGoogle.addEventListener('click', outGoogle);
  }

  if (signInView) {
    signInView.addEventListener('click', singInPath);
  }

  if (registerView) {
    registerView.addEventListener('click', registerPath);
  }

  if (buttonLogIn) {
    buttonLogIn.addEventListener('click', logInPath);
    const togglePassword = document.getElementById('togglePassword');
    togglePassword.addEventListener('click', (e) => {
      toggle(e, 'passwordLogIn');
    });
  }

  return myLogicApp;
};
