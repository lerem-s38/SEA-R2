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
// ------------------------------------------------------------------------------

// AJOUT / DISPARITION DU FORMULAIRE

// JAVASCRIPT BOUTTONS
// EVENT BOUTTON ADD
let showForm = document.querySelector('.btnAddContenu1');
showForm.addEventListener('click', showHide);

// EVENT BOUTTON SUPP

let hideForm = document.querySelector('.closeSubmit1');
hideForm.addEventListener('click', hideShow);

// HTML BOUTTONS
// EVENT BOUTTON ADD
showForm = document.querySelector('.btnAddContenu2');
showForm.addEventListener('click', showHide);

// EVENT BOUTTON SUPP

hideForm = document.querySelector('.closeSubmit2');
hideForm.addEventListener('click', hideShow);

// GIT BOUTTONS
// EVENT BOUTTON ADD
showForm = document.querySelector('.btnAddContenu3');
showForm.addEventListener('click', showHide);

// EVENT BOUTTON SUPP

hideForm = document.querySelector('.closeSubmit3');
hideForm.addEventListener('click', hideShow);
// ------------------------FUNCTION AFFICHE CACHE LE FORMULAIRE-----------------------------------------

function showHide(event) {
  console.log('test');
  let statut = event.currentTarget.parentNode;

  const form = document.createElement('form');
  form.classList.add('formInstance');
  statut.appendChild(form);

  const labelForSubject = document.createElement('label');
  labelForSubject.classList.add('labelInstance');
  labelForSubject.innerText = 'Choisissez un sujet:';
  form.appendChild(labelForSubject);

  const select = document.createElement('select');
  select.classList.add('selectInstance');
  form.appendChild(select);

  const array = [
    'Liste des sujet',
    'Astuce',
    'Code brut',
    'Bonne pratique',
    'signaler un bug',
  ];

  for (let i = 0; i < array.length; i++) {
    let option = document.createElement('option');
    option.value = array[i];
    option.text = array[i];
    select.appendChild(option);
  }

  const labelForName = document.createElement('label');
  labelForName.classList.add('labelName');
  labelForName.innerText = 'Entrer votre prénom:';
  form.appendChild(labelForName);

  const inputText = document.createElement('input');
  inputText.classList.add('inputName');
  inputText.type = 'text';
  inputText.name = 'input_name';
  form.appendChild(inputText);

  const labelForMsg = document.createElement('label');
  labelForMsg.classList.add('labelMsg');
  labelForMsg.innerText = 'Entrer votre message:';
  form.appendChild(labelForMsg);

  const inputMsg = document.createElement('textarea');
  inputMsg.classList.add('textarea');
  inputMsg.name = 'input_msg';
  form.appendChild(inputMsg);

  const subBtn = document.createElement('button');
  subBtn.classList.add('subBtn');
  subBtn.innerText = 'ENVOYER';
  form.appendChild(subBtn);

  let subMsg = document.querySelector('.subBtn');
  subMsg.addEventListener('click', submitMsg);

  function submitMsg(event) {
    event.preventDefault();
    let divCible = event.currentTarget.parentNode.parentNode.parentNode;
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
}

function hideShow(event) {
  let statut2 = event.currentTarget.parentNode.children[2].remove();
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
