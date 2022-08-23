export const create = () => {
    const creation = document.getElementById('root');
    creation.innerHTML = `<div id="wrapper"> <img src="/src/img/logo1.png" alt="Logo applicación"></img>
    <h1>Crear Usuario</h1>
    <form action="" method="post">
    <label for="email">Correo electrónico</label>
    <input class="user"></input>
    <label for="password">Contraseña</label>
    <input class="user"></input>
    <label for="repeatpass">Repetir contraseña</label>
    <input class="user"></input>
    <button>Registrate</button>
    <button id="linkWithGoogle" type="button" className="linkButton">Vincular Cuenta con Google <img src="/src/img/google.png" alt="Logo Google" id="LinkgoogleImg"></img></button>
    <button id="linkWithApple" type="button" className="linkButton">Vincular Cuenta con Apple <img src="/src/img/apple.png" alt="Logo Apple" id="LinkappleImg"></img></button>
    </form>
    </div>`
    ;
}
