/* // Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction(); */

import { nav } from './components/bases/nav.js';
import { handleLocation, route } from './js/router.js';
import { save } from './firebase/firebaseConfig.js';
import { register } from './components/views/register.js';

window.onpopstate = handleLocation;
window.route = route;

const pathUrl = window.location.pathname;
console.log(pathUrl);
const urlsValid = ['/', '/training', '/feeding'];
urlsValid.forEach((url) => {
  if (url === pathUrl) {
    nav();
  }
});

register();

handleLocation();
