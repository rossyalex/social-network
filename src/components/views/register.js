export const register = () => `<div class="card"><img id="logoRunners" src="../../img/logo1.png" alt="Logo applicación">
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
    <button id="outGoogle" type="button">Logout</button> 
    </form>
    </div>`;

