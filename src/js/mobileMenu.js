'use strict';

const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
  body: document.querySelector('body'),
  mobList: document.querySelector('.navigation__list'),
  main: document.querySelector('.main-content'),
  test: document.querySelector('.test'),
  result: document.querySelector('.result'),
  header: document.querySelector('.header__subcontainer'),
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
refs.mobList.addEventListener('click', removeMenu);

function toggleMenu() {
  refs.menu.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function removeMenu(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }

  if (
    event.target.hasAttribute('data-main') &&
    refs.main.classList.contains('is-none')
  ) {
    moveToMain();
  }

  if (
    event.target.hasAttribute('data-about') &&
    refs.main.classList.contains('is-none')
  ) {
    moveToMain();
  }

  if (event.target.hasAttribute('data-test')) {
    startTest();
  }

  refs.menu.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
}

function startTest() {
  refs.main.classList.add('is-none');
  refs.test.classList.remove('is-none');
  refs.result.classList.add('is-none');
  refs.header.classList.toggle('is-hidden');
}

function moveToMain() {
  refs.main.classList.toggle('is-none');
  refs.test.classList.add('is-none');
  refs.result.classList.add('is-none');
  refs.header.classList.toggle('is-hidden');
}
