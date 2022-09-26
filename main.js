import { handleLocation, route } from './js/router.js';

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
