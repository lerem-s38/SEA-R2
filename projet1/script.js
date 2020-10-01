 /* const menuderoulant = document.getElementsByClassName('.button-burger');

menuderoulant.addEventListener('click', function(){
    const etat = document.getElementsByClassName('sous-menu').style.visibility;
    if(etat === "hidden"){
        document.getElementsByClassName('sous-menu').style.visibility="visible";
    }
    else{
        document.getElementsByClassName('sous-menu').style.visibility="Hidden";
    }
}, false) */

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