import { routes } from "../lib/index.js";

export const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

export const handleLocation = async () => {
    const app = document.getElementById("root");
    const path = window.location.pathname;
    app.innerHTML = routes[path] || routes[404];
};