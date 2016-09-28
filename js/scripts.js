'use strict';

var open = document.querySelector('.page-nav__open');
var close = document.querySelector('.page-nav__close');
var menu = document.querySelector('.page-nav__menu');

open.addEventListener('click', function() {
  menu.style.display = 'block';
  menu.style.animation = '.3s open-menu';
});

close.addEventListener('click', function() {
  menu.style.display = 'none';
});
