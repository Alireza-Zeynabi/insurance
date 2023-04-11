const txt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere provident officiis ducimus?",
  signBtn = document.getElementById('sign-btn'),
  formCont = document.querySelector('.form-content'),
  textCont = document.querySelector('.text-content'),
  insurance = document.querySelector('.insurance')

document.addEventListener("DOMContentLoaded", typeWriter);
signBtn.addEventListener('click', insurancePage);

let i = 0;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("effectPar").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 45);
  }
}


// =-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function insurancePage(e){
  
  e.preventDefault()
    formCont.style.display = 'none';
    // textCont.style.display = 'none';
    insurance.style = 'display:flex'
}
