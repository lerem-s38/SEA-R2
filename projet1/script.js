/* champ requis pour le formulaire*/

const myForm = document.getElementById('form')

myForm.addEventListener('submit', function(e){
    const myFirstName = document.getElementById('firstname');

    if (myFirstName.value.trim() === ""){
        const myError = document.getElementById('error1');
        myError.innerHTML = "Firstname is required";
        myError.style.color = "black";
        e.preventDefault();
    } 

const myLastName = document.getElementById('lastname');

    if (myLastName.value.trim() === ""){
        const myError = document.getElementById('error2');
        myError.innerHTML = "Lastname is required";
        myError.style.color = "black";
        e.preventDefault();
    } 

const myEmail = document.getElementById('exampleFormControlInput1');

    if (myEmail.value.trim() === ""){
        const myError = document.getElementById('error3');
        myError.innerHTML = "Email is required";
        myError.style.color = "black";
        e.preventDefault();
    } 

const myMessage = document.getElementById('exampleFormControlTextarea1');

     if(myMessage.value.trim() === ""){
        const myError = document.getElementById('error4');
        myError.innerHTML = "Message is required";
        myError.style.color = "black";
        e.preventDefault();
    }else {
        alert('form send');
    }
    

})