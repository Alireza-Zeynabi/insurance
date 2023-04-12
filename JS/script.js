const txt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere provident officiis ducimus?",
  signBtn = document.getElementById('sign-btn'),
  formCont = document.querySelector('.form-content'),
  textCont = document.querySelector('.text-content'),
  insurance = document.querySelector('.insurance'),
  submitBtn = document.querySelector('.submit-btn'),
  factor = document.querySelector('.factor'),
  car = document.querySelector('#car')

document.addEventListener("DOMContentLoaded", typeWriter);
signBtn.addEventListener('click', insurancePage);
submitBtn.addEventListener('click', showFactor)

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

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function showFactor() {
  
  insurance.style.display ='none'
  factor.style.display = 'block'
}
// =-=-=-=-=-=-=-=-=-=
// year select
let today = new Date().toLocaleDateString('fa-IR');
console.log(today);




// =-=-=-=-=-=-=-=-=-=-=-=-=-
// car tag

const tagSelect1= document.querySelector('#tag-select1'),
 tagSelect2 = document.querySelector('#tag-select2'),
 tagSelect3 = document.querySelector('#tag-select3'), 
 tagSelect4 = document.querySelector('#tag-select4')
for (let i = 10; i <= 99 ; i++) {

  let ct1 = `<option value="${i}">${i}</option>`
  tagSelect1.insertAdjacentHTML('beforeend',ct1)

  let ct4 = `<option value="${i}">${i}</option>`
  tagSelect4.insertAdjacentHTML('beforeend',ct4)
}

for (let x = 111; x <= 999 ; x++) {
  
    let ct2 = `<option value="${x}">${x}</option>`
    tagSelect2.insertAdjacentHTML('beforeend',ct2)
}



let prsionWords = [ 'الف' ,"ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"]
for (let z = 0; z < prsionWords.length; z++) {

  let ct3 = `<option value="${z}">${z}</option>`
  tagSelect3.insertAdjacentHTML('beforeend',ct3)
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


let basePrice = 0

car.addEventListener('change',findBasePrie)

function findBasePrie(params) {
  

  let cars = car.value



  // gheymat paeen
  if (cars == '') {
  return alert('لطفا موارد خواسته شده برا وارد کنید')

  }else if  (cars == 'prid') {
    
    basePrice = 2000000
  }else if  (cars == 'Ashkan') {
    
    return alert('مشتری گرامی به دلیل پایین بودن قیمت کالای شما بیمه به شمابدهکار شد با عرض پوزش')

  } else if  (cars == 'cow nissan') {
    
    basePrice = 2000000
  }else if (cars == 'youngs pikan') {
    
    basePrice = 2000000
  }
  
  // =-=-=-=-=-=-=-=-=-=-=-=
  //gheymat motevaset
  else if(cars == 'brlH230' ){
    basePrice = 5000000

  }else if (cars == 'samand') {
    basePrice = 5000000

  }else if (cars == 'sandrow') {
    basePrice = 5000000
  }
  else if (cars == 'xantia') {
    basePrice = 5000000
  }
  
  else if (cars == 'pars') {
    basePrice = 5000000
  }
  else if (cars == '405') {
    basePrice = 5000000
  }
  else if (cars == '206') {
    basePrice = 5000000
  }

  // -=-=-=-=-=-=-=-=-=
  // gheymat bala
  else if (cars == 'supra') {
    basePrice = 25000000
  }
  else if (cars == 'hilux') {
    basePrice = 25000000
  }
  else if (cars == 'porsche') {
    basePrice = 25000000
  }
  else if (cars == 'pars68') {
    basePrice = 25000000
  }
  else if (cars == 'tiggo5') {
    basePrice = 25000000
  }
  else if (cars == 'Amir206') {
    basePrice = 25000000
  }
}
// =-=-=-=-=-=-=-=-=-=

