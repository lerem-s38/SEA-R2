/*console.log('HELLO WORLD');

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
}*/

// ------------------------------------------------------------------------------


/* fonction click sur le menu burger */
function myFunction() {
  const submenu = document.getElementById("myLinks");
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}



