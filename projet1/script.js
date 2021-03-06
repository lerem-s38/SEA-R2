/*js menu déroulant*/
const dropdownBtn = document.querySelector('.btn');

const dropdownMenu = document.querySelector('.sous-menu');

dropdownBtn.addEventListener('click', function () {
  dropdownMenu.classList.toggle('visible');
});

// ----------- SCRIPT POUR ACCORDEON ACCUEIL ------------//
let panels = document.getElementsByClassName('panel');

for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener('click', displayPanel);
}
function displayPanel() {
  let selectedPanel = this.nextElementSibling;
  if (selectedPanel.style.display === 'block') {
    selectedPanel.style.display = 'none';
  } else {
    selectedPanel.style.display = 'block';
  }
}
// ----------- FIN DU SCRIPT POUR ACCORDEON ACCUEIL ------------//

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
  let textWilder = divCible.querySelector('.textarea').value;
  newDivCibleContenu.innerText = textWilder;

  let newDivCibleHun = document.createElement('p');
  divCible.insertBefore(newDivCibleHun, divCible.firstChild);
  let subjectWilder = divCible.querySelector('.selectInstance').value;
  newDivCibleHun.innerText = subjectWilder;

  let newDivCibleHdeux = document.createElement('p');
  divCible.insertBefore(newDivCibleHdeux, divCible.firstChild);
  let nameWilder = divCible.querySelector('.inputName').value;
  newDivCibleHdeux.innerText = nameWilder;

  document.querySelector('form').reset();

  let comment = {
    author: nameWilder,
    subject: subjectWilder,
    comment: textWilder,
  };
}

//-------------------LOCAL STORAGE COMMENTAIRES----------------

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// ------------------------FUNCTION AJOUTE DU CONTENU PARTICIPATIF-----------------------------------------

// ---------------------- DARK MODE ----------------------------------------------------------------------------------------------------
document.getElementById('dark-mode').addEventListener('click', darkMode);
// recuperation etat mode sombre dans local storage
let darkModeState = localStorage.getItem('modeSombre');
console.log(
  `State darkMode from local storage when the page loads : ${darkModeState}`
);

if (typeof localStorage != 'undefined') {
  //si mode sombre activé, application du theme sombre et stockage de l'etat dans localStorage
  if (darkModeState === 'activate') {
    let darkModeCard = document.querySelectorAll(
      '.accordion, .formContainer, form'
    );
    let darkModeCard2 = document.querySelectorAll('.textarea, .inputName, select, p')
    for (var i = 0; i < darkModeCard.length; i++) {
      darkModeCard[i].classList.toggle('dark-mode');
      darkModeCard2[i].classList.toggle("dark-mode2")
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
    let darkModeCard = document.querySelectorAll('.accordion, form, .formContainer');
    let darkModeCard2 = document.querySelectorAll('.textarea, .inputName, select, p')
    for (var i = 0; i < darkModeCard.length; i++) {
      darkModeCard[i].classList.toggle('dark-mode');
      darkModeCard2[i].classList.toggle("dark-mode2")
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

/* Evenement onclick animation menu burger*/
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});






