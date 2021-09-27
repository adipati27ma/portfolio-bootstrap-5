const nav = document.querySelector('ul.navbar-nav');
const menuLists = document.querySelectorAll('a.nav-link');

nav.addEventListener('click', (e) => {
  menuLists.forEach((menu) => {
    menu.classList.remove('active');
  });
  e.target.classList.add('active');
});
