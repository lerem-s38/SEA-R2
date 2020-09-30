console.log('HELLO WORLD');

// Animation Menu-Burger
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

// AJOUT / DISPARITION DU FORMULAIRE

const showForm = document.querySelector('#btnAddContenu');
showForm.addEventListener('click', showHide);

function showHide() {
  let statut = document.querySelector('#formIdea');
  console.log('TEST');
  if (statut.style.display == '') {
    statut.style.display = 'none';
  } else {
    statut.style.display = '';
  }
}

// const addTopic = document.querySelector('.addSubject');
// addTopic.addEventListener('click', addElement);

// function addsection() {
//   let subjectTitle = document.querySelector('#sujet-select');
//   let userName = document.querySelector('#name');
//   let userTitle = document.querySelector('#title');
//   let userMsg = document.querySelector('#msg');

//   function addElement(e) {
//     let divActive = event.target.parentNode.parentNode;
//     console.log(divActive);
//   }
// }

<form id='formIdea'>
  <label for='sujet-select'>Choisissez un sujet:</label>

  <select name='sujets' id='sujet-select'>
    <option value=''>Liste des sujets</option>
    <option value='astuce'>Astuce</option>
    <option value='code'>Code brut</option>
    <option value='bonne_pratique'>Bonne pratique</option>
    <option value='Bug'>Signaler un bug</option>
  </select>

  <div>
    <label for='name'>Nom :</label>
    <input type='text' id='name' name='user_name' />
  </div>
  <div>
    <label for='title'>Titre de votre ajout :</label>
    <input type='text' id='title' name='user_title' />
  </div>
  <div>
    <label for='msg'>Message :</label>
    <textarea id='msg' name='user_message'>
      Entrez votre message :
    </textarea>
  </div>

  <button type='submit' class='addSubject'>
    Ajouter un Topic
  </button>
</form>;
