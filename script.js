document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.mdc-top-app-bar__section--align-end');
  
  menuToggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'none' || nav.style.display === '' ? 'block' : 'none';
  });
});