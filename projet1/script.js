console.log('HELLO WORLD');

// ---------------------------------NAV ET HEADER---------------------------------------------

document.querySelector('.sous-menu').style.display = 'none';

const burgerMenu = document.querySelector('.button-burger');
burgerMenu.addEventListener('click', burger);

function burger() {
  let statut = document.querySelector('.sous-menu');
  if (statut.style.display === 'none') {
    statut.style.display = 'block';
  } else {
    statut.style.display = 'none';
  }
}

// ------------------------------------------------------------------------------
