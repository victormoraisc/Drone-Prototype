const headerNav = document.querySelector('.header-nav');
const sandwitch = document.querySelectorAll('.lines');
const logoLight = document.querySelector('.logo-light');
const logoDark = document.querySelector('.logo-dark');
const menuButton = document.querySelector('.burger-menu');
const floatingMenu = document.querySelector('.floating-menu');

function headerScroll(){
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

  document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.querySelector('.input-phone');

    phoneInput.addEventListener('input', function (event) {
        let phoneNumber = event.target.value.replace(/\D/g, '');

        if (phoneNumber.length > 11) {
            phoneNumber = phoneNumber.slice(0, 11);
        }

        if (phoneNumber.length > 2) {
            phoneNumber = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2)}`;
        }

        if (phoneNumber.length > 10) {
            phoneNumber = `${phoneNumber.substring(0, 10)}-${phoneNumber.substring(10)}`;
        }

        event.target.value = phoneNumber;
    });

    phoneInput.addEventListener('keydown', function (event) {
        if (event.key.match(/\D/) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    });
});

menuButton.addEventListener('click', function() {
    floatingMenu.classList.toggle('active');
    if(floatingMenu.classList.contains('active')) {
      menuButton.classList.add('active');
      headerNav.classList.add('toggled');
      logoDark.style.display = 'block';
      logoLight.style.display = 'none';
      sandwitch.forEach(sandwitch => {
        sandwitch.classList.add('toggled');
      })
    }else if (!floatingMenu.classList.contains('active') && window.scrollY == 0) {
      menuButton.classList.remove('active');
      headerNav.classList.remove('toggled');
      logoDark.style.display = 'none';
      logoLight.style.display = 'block';
      sandwitch.forEach(sandwitch => {
        sandwitch.classList.remove('toggled');
      })
    }else {
      menuButton.classList.remove('active');
    }
  })
