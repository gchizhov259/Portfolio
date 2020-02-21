let button = null;
let menu = null;
let body = null;

const menuActiveClass = "hamburger-menu--active";
const bodyOverflowHiddenClass = "overflow-hidden";

window.onload = function() {
  setElements();
  trigger();
};

/* Найти элементы и добавить в переменные */
function setElements() {
  button = document.querySelector(".hamburger-menu__btn");
  menu = document.querySelector(".hamburger-menu");
  body = document.querySelector("body");
}

/* Навешиваем событие на клик по кнопке */
function trigger() {
  button.onclick = function() {
    if (!menu.classList.contains(menuActiveClass)) {
      openMenu();
    } else {
      closeMenu();
    }
  };
}

/**
 * Открыть меню
 */
function openMenu() {
  menu.classList.add(menuActiveClass);
  body.classList.add(bodyOverflowHiddenClass);
}

/**
 * Закрыть меню
 */
function closeMenu() {
  menu.classList.remove(menuActiveClass);
  body.classList.remove(bodyOverflowHiddenClass);
}
