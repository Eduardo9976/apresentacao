import Menu from "./modules/menu.js";
import visibility from "./modules/visibility.js";
import Visibility from "./modules/visibility.js";

const menu = new Menu(".fa-bars").init();
const tecnologiasAimate = new Visibility("#tecnologias", ".imgsTecnologias").init();
const contatosAnimate = new Visibility("#contatos").init();