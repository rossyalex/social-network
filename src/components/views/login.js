export const login = () => `<div class="card"><img id="logoRunners" src="../../img/logo1.png" alt="Logo applicación">
        <h1>Inicio de sesión</h1>
        <form class="buttonsWrapper" action="" method="post">
            <label for="email">Correo electrónico</label>
            <input id="emailLogIn" type="email" placeholder="Ingresa tu email">
            <label for="password">Contraseña</label>
            <input id="passwordLogIn" type="password" placeholder="********">
            <p id="errorLogin" class="error-message hide">Verifique sus datos y vuelva a intentar</p>
            <button type="button" class="button" id="login">Ingresar</button>
        </form>
        </div>`;
