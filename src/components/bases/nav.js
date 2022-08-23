export const nav = () => {
    const createNav = document.createElement('div');
    createNav.classList.add('navContainer');
    createNav.appendChild(navBar);
    const root = document.getElementById('root');
    root.appendChild(createNav);
    const navBar = createNav.innerHTML = `<nav class="navBar" id="navBar">
    <div class="iconContainer" id="homeIconContainer">
       <i id="homeIcon" class="fa fa-home" aria-hidden="true" src=""></i>
    </div>
    <div class="iconContainer" id="trainingsIconContainer">
       <i id="trainingsIcon" class="fa-solid fa-person-running" src=""></i>
    </div>
    <div class="iconContainer" id="feedingIconContainer">
       <i id="feedingIcon" class="fa-solid fa-bottle-water" src=""></i>
    </div>
    <div class="iconContainer" id="closeIconContainer">
    <i id="closeIcon" class="fa fa-window-close" aria-hidden="true" src=""></i>
    </div>

    </nav>`

    return createNav();

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