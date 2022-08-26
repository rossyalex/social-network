import { save } from '../../firebase/firebaseConfig.js';

export const register = () => {
  const root = document.getElementById('root');
  const formRegister = `<div class="card"><img id="logoRunners" src="../../img/logo1.png" alt="Logo applicación">
    <h1>Crear Usuario</h1>
    <form class="buttonsWrapper" action="" method="post">
    <label for="email">Correo electrónico</label>
    <input  id="email"class="user" type="text" placeholder="Ingresa tu email...">
    <label for="password">Contraseña</label>
    <input  id="password"class="user" type="password">
    <label for="repeatpassword">Repetir contraseña</label>
    <input  id="repeatpassword" class="user" type="password">
    <button type="button" id="registerUser">Registrate</button>
    <button id="linkWithGoogle" type="button" class="button"><img src="../../img/google.png" alt="Logo Google" id="linkgoogleImg"/>Vincular Cuenta con Google</button> 
    </form>
    </div>`;
  root.innerHTML = formRegister;
  console.log(root);
  const buttonRegisterUser = document.getElementById('registerUser');

  let saveUser = '';

  buttonRegisterUser.addEventListener('click', () => {
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
      console.log(data);
      alert(`Te has registrado exitosamente ${data}`);
    }).catch((e) => {
      console.log(e.message);
      alert('Reintenta de nuevo');
    });
  });

  return saveUser;
};

// onclick="save({first: 'Rossy', last: 'Perez', born: 1995})"
