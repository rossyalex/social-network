export const nav = () => {
    const createNav = document.createElement('div')
    createNav.classList.add('containeNav')
    createNav.innerHTML = `<nav>
    <ul class="nav-list">
        <li><a href="/" onclick="route()">Home</a></li>
        <li><a href="/about" onclick="route()">About</a></li>
        <li><a href="/contact" onclick="route()">Contact</a></li>
    </ul>
</nav>`

    return createNav
}