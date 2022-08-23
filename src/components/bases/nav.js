export const nav = () => {
    const createNav = document.createElement('div')
    createNav.classList.add('navContainer')
    createNav.innerHTML = 
    `<nav>

         <ul class="nav-list">
             <li><a href="/" onclick="route()"><i class="fa-solid fa-house"></i></a></li>
             <li><a href="/about" onclick="route()">About</a></li>
            <li><a href="/contact" onclick="route()">Contact</a></li>
          </ul>
    </nav>`


}




/*export const nav = () => {
    const createNav = document.createElement('div')
    createNav.classList.add('containeNav')
    createNav.innerHTML = `<nav class="container-nav">
    <div class="nav-post">
        <div class="icon-nav">
        <i class="fa-solid fa-house"></i>
        </div>
        <div class="icon-nav">
        <i class="fa-solid fa-calendar-days"></i>
        </div>
        <div class="icon-nav">
        <i class="fa-solid fa-bell"></i>
        </div>
    </div>
</nav>`

    return createNav
}*/