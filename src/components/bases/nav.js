export const nav = () => {
  const navBar = document.getElementById('nav');
  navBar.innerHTML = `<nav class="navBar" id="navBar">
    <div class="iconContainer" id="homeIconContainer">
       <a href="/initiation" onclick="route()">
       <i id="homeIcon" class="fa-solid fa-paper-plane"></i>
       </a> 
    </div>
    <div class="iconContainer" id="homeIconContainer">
       <a href="/" onclick="route()">
        <i id="homeIcon" class="fa fa-home" aria-hidden="true"></i>
       </a> 
    </div>
    <div class="iconContainer" id="trainingsIconContainer">
       <a href="/training" onclick="route()">
        <i id="trainingsIcon" class="fa-solid fa-person-running"></i>
       </a>
    </div>
    <div class="iconContainer" id="feedingIconContainer">
       <a href="/feeding" onclick="route()">
        <i id="feedingIcon" class="fa-solid fa-apple-whole"></i>  
       </a>
    </div>
    <div class="iconContainer" id="closeIconContainer">
        <a href="/close" onclick="route()">
            <i id="closeIcon" class="fa fa-window-close" aria-hidden="true"></i>
        </a>
    </div>

    </nav>`;
};
