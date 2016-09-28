'use strict';

var serviceOrder = document.querySelectorAll('.services__order');
var popupOrder = document.querySelector('.popup-order');
var closePopup = document.querySelector('.popup-order__close');
var btn = document.querySelector('.button--popup');
var inputPopup = document.querySelector('.input__value');

function showPopup(n, percent) {
  serviceOrder[n].addEventListener('click', function() {
    popupOrder.style.display = 'block';
    popupOrder.style.top = percent;
  });
}

function isValid() {
  if (inputPopup.value <= 0) {
    inputPopup.placeholder = 'Введите имя!';
    inputPopup.style.color = 'red';
  } else {
    inputPopup.style.color = '#aeaeae';
  }
}

closePopup.addEventListener('click', function() {
  popupOrder.style.display = 'none';
});

btn.addEventListener('click', function() {
  isValid();
});

inputPopup.addEventListener('input', function() {
  isValid();
});


showPopup(0, '5%');
showPopup(1, '26%');
showPopup(2, '46.5%');
showPopup(3, '67.5%');
