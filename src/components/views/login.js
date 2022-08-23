export const login = () => {
    const logIn = document.getElementById('root');
    logIn.innerHTML =
        `<h1>Inicio de sesión</h1>
        <form action="" method="post">
            <label for="email">Correo electrónico</label>
            <input type="email" placeholder="Ingresa tu email">
            <label for="password">Correo electrónico</label>
            <input type="password" placeholder="********">
            <button type="button">Ingresar</button>
        </form>`
}

