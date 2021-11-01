const nameElem = document.querySelector('.js-name');

nameElem.textContent = sessionStorage.getItem('UserName');