export const nav = () => {
  const navBar = document.getElementById('nav');
  navBar.innerHTML = `<nav class="navBar" id="navBar">
    <div class="iconContainer" id="homeIconContainer">
       <a href="/" onclick="route()">
        <i class="fa fa-home icon" aria-hidden="true"></i>
       </a> 
    </div>
    <div class="iconContainer" id="trainingsIconContainer">
       <a href="/training" onclick="route()">
        <i class="fa-solid fa-person-running icon"></i>
       </a>
    </div>
    <div class="iconContainer" id="feedingIconContainer">
       <a href="/feeding" onclick="route()">
        <i class="fa-solid fa-apple-whole icon"></i>  
       </a>
    </div>
    <div class="iconContainer" id="closeIconContainer">
        <button id="outGoogle" type="button">
            <i class="fa fa-window-close icon" aria-hidden="true"></i>
        </button>
    </div>

    </nav>`;
};



