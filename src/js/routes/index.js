/* // aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
}; */

// import { loadPartialConfigAsync } from "@babel/core";
import { signin } from '../../components/views/signin.js';
import { register } from '../../components/views/register.js';
import { login } from '../../components/views/login.js';
import { home } from '../../components/views/home.js';
import { training } from '../../components/views/training.js';
import { feeding } from '../../components/views/feeding.js';
import { notFound } from '../../components/views/error404.js';

export const routes = {
  '/signin': signin(),
  '/register': register(),
  '/login': login(),
  '/': home(),
  '/training': training(),
  '/feeding': feeding(),
  '/logout': '<h1>Cierre de sesión</h1>',
  error404: notFound(),
};
