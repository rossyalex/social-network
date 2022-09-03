import { save, getUser } from '../firebase/firebaseConfig.js';
import { accessGoogle, outGoogle } from '../firebase/auth.js';

function singInPath() {window.location.href = '/login'};
function registerPath() {window.location.href = '/register'};
async function logInPath() {
  const emailInput = document.getElementById('emailLogIn');
  const passInput = document.getElementById('passwordLogIn');
  const email = emailInput.value;
  const pass = passInput.value;

  if(email == '') {
    // Ingresa tu correo error
    console.log('Ingresa correo');
    return;
  }
  if (pass == '') {
    // Ingresa tu contraseña
    console.log('Ingresa contraseña');
    return;
  }

  const response = await getUser(email);

  let user = null;

  response.forEach((doc) => {
    user = doc.data();
  })
  console.log('Usuario', user);

  if (user) {
    const { email } = user;
    console.log('Existe el usuario', email);
    window.location.href = '/'
  } else {
    // Mostrar error de que no existe el usuario
    console.log('El usuario no existe en la BD');
  }

  //console.log('Desde logic', query);

  // Valido inputs diferentes a vacío

  // const userFb = getUser -> {email: '...', password: '...'}

  // userFb.password === passwordInput

  // Valido de que exista en mi base de datos Firestore

  // Contraseña buena pero correo incorrecto

  // Si existe pero la contraseña no es igual darle error "Contraseña invalida"

  // window.location.href = '/'

  // IF todo esta bien then -> window.location.href = '/'
};

function toggle(e) {
  const inputPassword = document.getElementById('passwordLogIn');
  const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  inputPassword.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
}

export const logic = () => {
  const buttonRegisterUser = document.getElementById('registerUser');
  const signInGoogle = document.getElementById('linkWithGoogle');
  const buttonOutGoogle = document.getElementById('outGoogle');
  const signInView = document.getElementById('initiation');
  const registerView = document.getElementById('create');
  const buttonLogIn = document.getElementById('login');
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

  if (signInView) {
    signInView.addEventListener('click', singInPath);
  }

  if (registerView) {
    registerView.addEventListener('click', registerPath);
  }

  if (buttonLogIn) {
    buttonLogIn.addEventListener('click', logInPath);
    const togglePassword = document.getElementById('togglePassword');
    togglePassword.addEventListener('click', toggle);
  }

  return myLogicApp;
};

function registerFirestore() {
  let saveUser = '';
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let repeatPassword = document.getElementById('repeatpassword').value;

  const user = {
    email,
    password,
    repeatPassword,
  };

  //vista login
  // if (user.emailLogIn === '') {
  //   errorLogin.classList.add('hide');
  //   errorLogin.classList.remove('hide');
  //   window.location.href = '/login';
  // } else {
  //
  //   window.location.href = '/';
  // };

  // if ( user.passwordLogIn === '') {
  //   errorLogin.classList.add('hide');
  //   errorLogin.classList.remove('hide');
  //   window.location.href = '/login';
  // } else {
  //   window.location.href = '/';
  // };

  // Mensaje de error registro
  if (user.email === '') {
    errorInfo.classList.add('hide');
    errorInfo.classList.remove('hide');
    window.location.href = '/register';
  } else  {saveUser};

  if (user.password === '') {
    errorInfo.classList.add('hide');
    errorInfo.classList.remove('hide');
    window.location.href = '/register';
  } else  {saveUser}

  if (user.repeatPassword === '') {
    errorInfo.classList.add('hide');
    errorInfo.classList.remove('hide');
    window.location.href = '/register';
  } else  {saveUser};

  save(user).then((data) => {
    saveUser = data;
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('repeatpassword').value = '';
    alert(`Te has registrado exitosamente ${data}`);
    window.location.href = '/';

  }).catch((e) => {
    console.error(e);
    alert('Vuelve a intentarlo');
  });

  return saveUser;
}

function signInFunctionGoogle() {
  accessGoogle();
}

