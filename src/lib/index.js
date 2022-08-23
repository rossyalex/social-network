/*// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};*/

//import { loadPartialConfigAsync } from "@babel/core";
import { initiation } from "../components/views/initiation.js";
import { create } from "../components/views/create.js";
import { login } from "../components/views/login.js";
import { home } from "../components/views/home.js";
import { training } from "../components/views/training.js";
import { feeding } from "../components/views/feeding.js";
import { notFound } from "../components/views/error404.js";

export const routes = {
  "/initiation": initiation(), 
  "/create": create(),
  "/login": login(),
  "/": home(),
  "/training": training(),
  "/feeding": feeding(),
  "/error404": notFound() 
};