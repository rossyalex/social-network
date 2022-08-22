/*// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};*/

import { home } from "../components/views/home.js";

export const routes = {
  "/": home(),
  /*"/about": about(),
  "/contact": contact(),
  404: notFound(),*/
};