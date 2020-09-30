console.log('HELLO WORLD');

// Animation Menu-Burger
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

// AJOUT / DISPARITION DU FORMULAIRE

const showForm = document.querySelector('#btnAddContenu');
showForm.addEventListener('click', showHide);

function showHide(event) {
  let statut = event.currentTarget.parentNode;
  const form = document.createElement('form');
  form.classList.add('formInstance');
  statut.appendChild(form);

  const labelForSubject = document.createElement('label');
  labelForSubject.classList.add('labelInstance');
  labelForSubject.innerText = 'Choisissez un sujet:';
  form.appendChild(labelForSubject);

  const select = document.createElement('select');
  select.classList.add('formInstance');
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

  const labelForName = document.createElement('labelName');
  labelForName.classList.add('labelName');
  labelForName.innerText = 'Entrer votre prénom:';
  form.appendChild(labelForName);

  const inputText = document.createElement('input');
  inputText.classList.add('inputName');
  inputText.type = 'text';
  inputText.name = 'input_name';
  inputText.innerText = ' Votre nom ici';
  form.appendChild(inputText);
}

/* <form id='formIdea'>
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
</form>; */

// function showHide() {
//   let statut = document.querySelector('#formIdea');
//   console.log('TEST');
//   if (statut.style.display == '') {
//     statut.style.display = 'none';
//   } else {
//     statut.style.display = '';
//   }
// }
