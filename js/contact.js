'use strict';
var contactFormValue = document.querySelectorAll('.contacts-form__value');
var btnContactsForm = document.querySelector('.button--contacts-form');
var hint = {
  '0': contactFormValue[0].placeholder,
  '1': contactFormValue[1].placeholder,
  '2': contactFormValue[2].placeholder,
  '3': contactFormValue[3].placeholder
};

function isValidContactForm(n) {
  if (contactFormValue[n].value <= 0) {
    contactFormValue[n].placeholder = 'Вы не ввели данные в поле (' + hint[n] + ')';
    contactFormValue[n].style.color = '#f00';
  } else {
    contactFormValue[n].style.color = '#b5b5b5';
  }
}

function showHint(n) {
  contactFormValue[n].addEventListener('input', function() {
    isValidContactForm(n);
  });
}

btnContactsForm.addEventListener('click', function() {
  isValidContactForm(0);
  isValidContactForm(1);
  isValidContactForm(2);
  isValidContactForm(3);
});

showHint(0);
showHint(1);
showHint(2);
showHint(3);
