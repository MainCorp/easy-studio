'use strict';

var openPortfolio = document.querySelector('.portfolio-more__wrapper');
var portfolio = document.querySelector('.portfolio-more__container');

openPortfolio.addEventListener('click', function() {
  if (portfolio.style.cssText === 'display: flex; animation: open-menu 0.3s;') {
    portfolio.style.display = 'none';
  } else {
    portfolio.style.display = 'flex';
    portfolio.style.animation = '.3s open-menu';
  }
});
