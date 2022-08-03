document.querySelector('#nav__button').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav__closed');
  document.querySelector('.fa-solid').classList.toggle('fa-bars');
  document.querySelector('.fa-solid').classList.toggle('fa-xmark');
});

const hamburgerMenu = document.querySelectorAll('.nav__link');
for (let i = 0; i < hamburgerMenu.length; i++) {
  hamburgerMenu[i].addEventListener('click', () => {
    document.querySelector('nav').classList.add('nav-closed');
  });
}
