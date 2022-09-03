import { save, getUser } from '../firebase/firebaseConfig.js';
import { accessGoogle, outGoogle } from '../firebase/auth.js';

function singInPath() {window.location.href = '/login'};
function registerPath() {window.location.href = '/register'};
async function logInPath() {
  const emailInput = document.getElementById('emailLogIn');
  const passInput = document.getElementById('passwordLogIn');
  const email = emailInput.value;
  const pass = passInput.value;

  // Valido inputs diferentes a vacío 
  if(email == '') {
    // Ingresa tu correo error
    errorLogin.classList.add('hide');
    errorLogin.classList.remove('hide');
    //console.log('Ingresa correo');
    return;
  }
  if (pass == '') {
    // Ingresa tu contraseña
    errorLogin.classList.add('hide');
    errorLogin.classList.remove('hide');
    //console.log('Ingresa contraseña');
    return;
  }

  // Esta parte obtiene al usuario desde Firestore 
  const response = await getUser(email);

  let user = null;

  response.forEach((doc) => {
    user = doc.data();
  })
  
  // Validamos si existe el usuario
  if (user) {
    const { password, name } = user; // Esto viene de Firestore
    if (password != pass) {
      console.log('Contraseña erronea');
      return;
    }
    // Guardo el nombre
    localStorage.setItem('name', name);

    // If localStorage.getItem('name') != null 
    window.location.href = '/';
  } else {
    // Mostrar error de que no existe el usuario
    createAccount.classList.add('hide');
    createAccount.classList.remove('hide');
  }
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
  //console.log(buttonOutGoogle);
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
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let repeatPassword = document.getElementById('repeatpassword').value;

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
  } else  {saveUser};
  
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

  // Guardar la data
  save(user).then((data) => {
    saveUser = data;
    document.getElementById('name').value = '';
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

