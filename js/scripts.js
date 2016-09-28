'use strict';

var open = document.querySelector('.page-nav__open');
var close = document.querySelector('.page-nav__close');
var menu = document.querySelector('.page-nav__menu');
var openPortfolio = document.querySelector('.portfolio-more__wrapper');
var portfolio = document.querySelector('.portfolio-more__container');

open.addEventListener('click', function() {
  menu.style.display = 'block';
  menu.style.animation = '.3s open-menu';
});

close.addEventListener('click', function() {
  menu.style.display = 'none';
});

openPortfolio.addEventListener('click', function() {
  if (portfolio.style.cssText === 'display: flex; animation: open-menu 0.3s;') {
    portfolio.style.display = 'none';
  } else {
    portfolio.style.display = 'flex';
    portfolio.style.animation = '.3s open-menu';
  }
});
