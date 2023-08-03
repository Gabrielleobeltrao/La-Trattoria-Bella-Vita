const menuHamburguer = document.querySelector(".header__menu-hamburguer");
const menu = document.querySelector(".menunav");

var imgAtual = "/assents/menu-hamburguer-x.svg"
var imgAnterior = "/assents/menu-hamburguer.svg"

menuHamburguer.addEventListener("click", () => {
   menu.classList.toggle("esconder");
   document.querySelector(".header__menu-hamburguer").src = imgAtual;
   let aux = imgAtual;
   imgAtual = imgAnterior;
   imgAnterior = aux
})