import { routes } from "../lib/index.js";

export const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

export const handleLocation = async () => {
    const root = document.getElementById("root");
    const path = window.location.pathname;
    root.innerHTML = routes[path] || routes[404];
};