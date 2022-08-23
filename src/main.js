/*// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();*/

import { nav } from './components/bases/nav.js';
import { handleLocation, route } from './js/router.js';

window.onpopstate = handleLocation;
window.route = route;

nav();

handleLocation();
