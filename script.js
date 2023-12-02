
function headerScroll(){
    var headerNav = document.querySelector('.header');
    var sandwitch = document.querySelectorAll('.lines');
    var logoLight = document.querySelector('.logo-light');
    var logoDark = document.querySelector('.logo-dark');
    if (window.scrollY > 0) {
      headerNav.classList.add('toggled');
      logoDark.style.display = 'block';
      logoLight.style.display = 'none';
      sandwitch.forEach(sandwitch => {
        sandwitch.classList.add('toggled');
      })
    } else {
      headerNav.classList.remove('toggled');
      logoDark.style.display = 'none';
      logoLight.style.display = 'block';
      sandwitch.forEach(sandwitch => {
        sandwitch.classList.remove('toggled');
      })
    }
  }

  document.addEventListener('DOMContentLoaded', headerScroll);
  window.addEventListener('scroll', headerScroll);

  headerScroll();