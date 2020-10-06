/*js menu déroulant*/
const dropdownBtn = document.querySelector('.btn');

const dropdownMenu = document.querySelector('.sous-menu');

dropdownBtn.addEventListener('click', function () {
  dropdownMenu.classList.toggle('visible');
});

/* const burgerMenu = document.querySelector('.button-burger');
burgerMenu.addEventListener('click', burger);

function burger() {
  let statut = document.querySelector('.sous-menu');
  if (statut.style.display === 'none') {
    statut.style.display = 'block';
  } else {
    statut.style.display = 'none';
  }
} */
let tabBtnAdd = [
  document.querySelector('.btnAddContenu1'),
  document.querySelector('.btnAddContenu2'),
  document.querySelector('.btnAddContenu3'),
];

for (i = 0; i < tabBtnAdd.length; i++) {
  tabBtnAdd[i].addEventListener('click', showHide);
}

function showHide(event) {
  let cible =
    event.target.parentNode.parentNode.lastChild.previousSibling.style;
  console.log(cible);
  if (cible.display === '') {
    cible.display = 'block';
  } else if ((cible.display = 'block')) {
    cible.display = '';
  }
}


let btnSub = document.querySelectorAll('.subBtn');
for (i = 0; i < btnSub.length; i++) {
  btnSub[i].addEventListener('click', submitMsg);
}

function submitMsg(event) {
  event.preventDefault();
  let divCible = event.currentTarget.parentNode.parentNode;
  console.log(divCible);

  let newDivCibleContenu = document.createElement('p');
  divCible.insertBefore(newDivCibleContenu, divCible.firstChild);
  let textWilder = document.querySelector('.textarea').value;
  newDivCibleContenu.innerText = textWilder;

  let newDivCibleHun = document.createElement('p');
  divCible.insertBefore(newDivCibleHun, divCible.firstChild);
  let subjectWilder = document.querySelector('.selectInstance').value;
  newDivCibleHun.innerText = subjectWilder;

  let newDivCibleHdeux = document.createElement('p');
  divCible.insertBefore(newDivCibleHdeux, divCible.firstChild);
  let nameWilder = document.querySelector('.inputName').value;
  newDivCibleHdeux.innerText = nameWilder;


}

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// ------------------------FUNCTION AJOUTE DU CONTENU PARTICIPATIF-----------------------------------------

// ---------------------- DARK MODE ----------------------------------------------------------------------------------------------------
document.getElementById('dark-mode').addEventListener('click', darkMode);
// recuperation etat mode sombre dans local storage
let darkModeState = localStorage.getItem('modeSombre');
console.log(darkModeState);

if (typeof localStorage != 'undefined') {
  //si mode sombre activé, application du theme sombre et stockage de l'etat dans localStorage
  if (darkModeState === 'activate') {
    let darkModeCard = document.querySelectorAll(
      '.card-body, .backgroundBodyContact'
    );
    for (var i = 0; i < darkModeCard.length; i++) {
      darkModeCard[i].classList.toggle('dark-mode');
    }
    localStorage.setItem('modeSombre', 'activate');
    console.log(localStorage.getItem('modeSombre'));
  }
  // si mode sombre desactivé, stockage de l'etat dans localStorage
  else {
    localStorage.setItem('modeSombre', 'desactivated');
    console.log(localStorage.getItem('modeSombre'));
  }
} else {
  alert('Sorry, your browser do not support local storage.');
}

// Function dark mode -----------------------------------------------------------------------------------------------
function darkMode() {
  if (darkModeState === 'desactivated') {
    //activation mode sombre
    let darkModeCard = document.querySelectorAll(
      '.card-body, .backgroundBodyContact'
    );
    for (var i = 0; i < darkModeCard.length; i++) {
      darkModeCard[i].classList.toggle('dark-mode');
    }
    localStorage.setItem('modeSombre', 'activate');
    darkModeState = 'activated';
    console.log(darkModeState);
  } else {
    //desactivation mode sombre
    localStorage.setItem('modeSombre', 'desactivated');
    console.log(darkModeState);
    document.location.reload(); //recharge la page
  }
}
