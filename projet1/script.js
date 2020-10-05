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
