import Menu from './modules/menu.js'
import Visibility from './modules/visibility.js'

const menu = new Menu('.fa-bars').init()
const servicosAnimate = new Visibility('#servicos').init()
const tecnologiasAimate = new Visibility(
  '#tecnologias',
  '.imgsTecnologias'
).init()
const timeLine = new Visibility('#timeLine').init()
const contatosAnimate = new Visibility('#contatos').init()
