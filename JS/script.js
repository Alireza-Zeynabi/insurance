// --> Variables
// Selecting text in variable
const txt =
    "در این سایت شما میتونید با کمترین هزینه و دردسر ماشین خودتون رو بیمه کنید",
  // Selecting sign button
  signBtn = document.getElementById("sign-btn"),
  // Selecting form content
  formCont = document.querySelector(".form-content"),
  // Selecting text content
  textCont = document.querySelector(".text-content"),
  // Selecting insurance page
  insurance = document.querySelector(".insurance"),
  // Selecting submit button
  submitBtn = document.querySelector(".submit-btn"),
  // Selecting factor page
  factor = document.querySelector(".factor"),
  // Selecting car for option
  car = document.querySelector("#car"),
  // Selecting car tag level1
  tagSelect1 = document.querySelector("#tag-select1"),
  // Selecting car tag level2
  tagSelect2 = document.querySelector("#tag-select2"),
  // Selecting car tag level3
  tagSelect3 = document.querySelector("#tag-select3"),
  // Selecting car tag level4
  tagSelect4 = document.querySelector("#tag-select4"),
  // Selecting year for option
  produceYear = document.querySelector("#year"),
  showLastPrice = document.querySelector('#show-lastPrice')

// --> Event
// Event for text effect in HTML
document.addEventListener("DOMContentLoaded", typeWriter);
// Event for sign button
signBtn.addEventListener("click", insurancePage);
// Event for submit button
submitBtn.addEventListener("click", showFactor);
// Event for when select was change
car.addEventListener("change", findBasePrie);

// --> Functions
// Function for timer for text effect in HTML
let i = 0;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("effectPar").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 45);
  }
}
// Function for insurance to show insurance page
function insurancePage(e) {
  e.preventDefault();
  formCont.style.display = "none";
  // textCont.style.display = 'none';
  insurance.style = "display:flex";
}

// Function for creating model car
function carModelYear() {
  // Create variable for convert date to persian date
  const year = new Date().toLocaleDateString("fa-IR-u-nu-latn").slice(0, 4),
    // Convert date string to number
    maxYear = Number(year),
    // Delete 20 year from max year
    minYear = maxYear - 20;

  // Create loop to create option for year
  for (let i = maxYear; i >= minYear; i--) {
    let option = document.createElement("option");
    option.setAttribute('value',[i])
    produceYear.appendChild(option);
    option.value = i;
    option.innerHTML = ` سال ${i}`;
  }

}
// Call carModelYear function
carModelYear();

// Creating loop for car tag level1
for (let i = 10; i <= 99; i++) {
  let ct1 = `<option value="${i}">${i}</option>`;
  tagSelect1.insertAdjacentHTML("beforeend", ct1);

  let ct4 = `<option value="${i}">${i}</option>`;
  tagSelect4.insertAdjacentHTML("beforeend", ct4);
}

// Creating loop for car tag level2
for (let x = 111; x <= 999; x++) {
  let ct2 = `<option value="${x}">${x}</option>`;
  tagSelect2.insertAdjacentHTML("beforeend", ct2);
}

// Creating loop for car tag level3
let prsionWords = ["د", "ب", "ج", "ه", "ق", "ص", "م", "ن", "ل", "ی", "س" ,'و','ط'];
for (let z = 0; z < prsionWords.length; z++) {
  let ct3 = `<option value="${z}">${prsionWords[z]}</option>`;
  tagSelect3.insertAdjacentHTML("beforeend", ct3);
}


// Functions for check the price of the car
let basePrice = 0;
function findBasePrie() {
  // Selecting car values
  let cars = car.value;

  // Low price cars
  if (cars == "") {
    return alert("لطفا موارد خواسته شده برا وارد کنید");
  } else if (cars == "prid") {
    basePrice = 2000000;
  } else if (cars == "Ashkan") {
    basePrice = 0;
    return alert(
      "مشتری گرامی به دلیل پایین بودن قیمت کالای شما بیمه به شمابدهکار شد با عرض پوزش"
    );
  } else if (cars == "cow nissan") {
    basePrice = 2000000;
  } else if (cars == "youngs pikan") {
    basePrice = 2000000;
  }

  // Medium segment cars
  else if (cars == "brlH230") {
    basePrice = 5000000;
  } else if (cars == "samand") {
    basePrice = 5000000;
  } else if (cars == "sandrow") {
    basePrice = 5000000;
  } else if (cars == "xantia") {
    basePrice = 5000000;
  } else if (cars == "pars") {
    basePrice = 5000000;
  } else if (cars == "405") {
    basePrice = 5000000;
  } else if (cars == "206") {
    basePrice = 5000000;
  }

  // High priced cars
  else if (cars == "supra") {
    basePrice = 25000000;
  } else if (cars == "hilux") {
    basePrice = 25000000;
  } else if (cars == "porsche") {
    basePrice = 25000000;
  } else if (cars == "pars68") {
    basePrice = 25000000;
  } else if (cars == "tiggo5") {
    basePrice = 25000000;
  } else if (cars == "Amir206") {
    basePrice = 25000000;
  }


}
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


produceYear.addEventListener('change',findYear)
let yearPrice = 0
function findYear(basePrice) {
  
 let years = produceYear.value
 

if (years == '') {
  
}if( years == '1402' ){

  yearPrice = 500000

}


}

  
  // let lastPrice = yearPrice + basePrice
 
// Function for factor to show factor page
function showFactor() {
  insurance.style.display = "none";
  factor.style.display = "block";

  let lastPrice =  yearPrice + basePrice

  showLastPrice.innerHTML = lastPrice

}




