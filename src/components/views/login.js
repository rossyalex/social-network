/* eslint-disable eol-last */

export const login = () => `<div class="card"><img id="logoRunners" src="../../img/logo1.png" alt="Logo applicación">
        <h1>Inicio de sesión</h1>
        <form class="buttonsWrapper" action="" method="post">
            <label for="email">Correo electrónico</label>
            <input id="emailLogIn" type="email" placeholder="Ingresa tu email">
            <label for="password">Contraseña</label>
            <input id="passwordLogIn" type="password" placeholder="********">
            <i class="far fa-eye" id="togglePassword"></i>
            <p id="errorLogin" class="error-message hide">Verifique sus datos y vuelva a intentar.</p>
            <p id="createAccount" class="error-message hide">Por favor crearse una cuenta.</p>
            <div class="container-buttons">
                 <button type="button" class="button" id="login"><span>Ingresar</span></button>
            </div>
            <button id="linkWithGoogle" type="button" class="button"><img src="../../img/google.png" alt="Logo Google" id="linkgoogleImg"/><span>Iniciar sesión con Google</span></button>
            
        </form>
        </div>`;