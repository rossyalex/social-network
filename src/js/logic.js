import {
  accessGoogle, logout,
} from '../firebase/auth.js';

// eslint-disable-next-line import/no-cycle
import { logInPath, register, userActive } from './auth.js';
import { createClickPost, getAllPosts } from './homeDom.js';
import { createClickPostTraining } from './trainingDom.js';
import { createClickPostFeeding } from './feedingDom.js';

function singInPath() { window.location.href = '/login'; }
function registerPath() { window.location.href = '/register'; }

/**
 * Funcion para manejar errores con class hide
 * @param inputId
 */
export function handleError(inputId) {
  const inputError = document.getElementById(inputId);
  inputError.classList.remove('hide');
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
  const passInputs = ['password'];
  eyes.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      const idInput = passInputs[i];
      toggle(e, idInput);
      // Primera iteración toggle(e, 'password');
    });
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
  const home = document.getElementById('home');
  const feeding = document.getElementById('feeding');
  const training = document.getElementById('training');
  // console.log(buttonOutGoogle);
  // Si existe un botón en el renderizado entonces agrega evento
  if (buttonRegisterUser) {
    toggleEyeRegister();
    // Registro de usuario al hacer click
    buttonRegisterUser.addEventListener('click', async () => {
      const email = document.getElementById('email').value;
      const pass = document.getElementById('password').value;
      const response = await register(email, pass);
      if (response) {
        // eslint-disable-next-line no-shadow
        const { user: { accessToken, uid } } = response;
        localStorage.setItem('uid', uid);
        localStorage.setItem('token', accessToken);
        localStorage.setItem('email', email);
        window.location.href = '/';
      }
    });
  }

  if (signInGoogle) {
    signInGoogle.addEventListener('click', signInFunctionGoogle);
  }

  if (buttonOutGoogle) {
    buttonOutGoogle.addEventListener('click', logout);
  }

  if (signInView) {
    signInView.addEventListener('click', singInPath);
  }

  if (registerView) {
    registerView.addEventListener('click', registerPath);
  }

  if (buttonLogIn) {
    const emailInput = document.getElementById('emailLogIn');
    const passInput = document.getElementById('passwordLogIn');
    buttonLogIn.addEventListener('click', async () => {
      const response = await logInPath(emailInput.value, passInput.value);
      if (response) {
        const { user: { accessToken, email, uid } } = response;
        localStorage.setItem('uid', uid);
        localStorage.setItem('token', accessToken);
        // Obtiene solo la primera parte del correo
        const mailModified = email.split('@')[0];
        localStorage.setItem('email', mailModified);
        window.location.href = '/';
      }
    });
    const togglePassword = document.getElementById('togglePassword');
    togglePassword.addEventListener('click', (e) => {
      toggle(e, 'passwordLogIn');
    });
  }

  if (home) {
    userActive();
    createClickPost();
    // Renderizar todos los posts
    getAllPosts();
  }

  if (feeding) {
    userActive();
    createClickPostFeeding();
    getAllPosts();
  }

  if (training) {
    userActive();
    createClickPostTraining();
    getAllPosts();
  }

  return true;
};
