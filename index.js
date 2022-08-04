//Dark mode switcher

const toggleSwitch = document.querySelector(
  '.theme__switcher input[type="checkbox"]',
);
const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
};

toggleSwitch.addEventListener('change', switchTheme, false);

//Hamburger menu open/close (mobile + small tablet)
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
