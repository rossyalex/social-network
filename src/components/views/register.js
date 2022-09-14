/* eslint-disable eol-last */

export const register = () => `<div class="card"><img class="runnergirl" src="/img/logogif3.gif" alt="Logo Runner en movimiento">
    <h1>Crear Usuario</h1>
    <form class="buttonsWrapper" action="" method="post">
          <label for="email">Correo electrónico</label>
          <input  id="email" class="user" type="text" placeholder="Ingresa tu email">
          <label for="password">Contraseña</label>
          <input id="password" class="user" type="password" placeholder="********">
          <i class="far fa-eye passwordEye"></i><br>
          <p id="errorInfo" class="error-message hide">Verifique sus datos y vuelva a intentar</p>
          <p id="errorUserCreated" class="error-message hide">Usuario ya registrado</p>
          <p id="errorUserPass" class="error-message hide">Contraseña debe tener mínimo 6 caracteres</p>
        <div class="container-buttons">
         <button type="button" class="button" id="registerUser"><span>Registrate</span></button>
        </div>
        <button id="linkWithGoogle" type="button" class="button"><span><img src="../../img/google.png" alt="Logo Google" id="linkgoogleImg"/></span><span>Vincular Cuenta con Google</span></button>
    <!-- <button id="outGoogle" type="button">Logout</button> -->
    </form>
    </div>`;
