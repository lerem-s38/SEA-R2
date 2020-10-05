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

// let tabBtnSub = [
//   document.querySelector('.subBtn'),
//   document.querySelector('.subBtn'),
//   document.querySelector('.subBtn'),
// ];

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
