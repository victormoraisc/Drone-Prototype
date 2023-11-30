
function headerScroll(){
    var headerNav = document.querySelector('.header');
    var logoLight = document.querySelector('.logo-light');
    var logoDark = document.querySelector('.logo-dark');
    if (window.scrollY > 0) {
      headerNav.classList.add('toggled');
      logoDark.style.display = 'block';
      logoLight.style.display = 'none';
      
    } else {
      headerNav.classList.remove('toggled');
      logoDark.style.display = 'none';
      logoLight.style.display = 'block';
    }
  }

  document.addEventListener('DOMContentLoaded', headerScroll);
  window.addEventListener('scroll', headerScroll);

  headerScroll();