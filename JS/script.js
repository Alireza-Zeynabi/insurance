// --> Variables
// Selecting lorem in variable
const txt = 'در این سایت شما میتونید با کمترین هزینه و دردسر ماشین خودتون رو بیمه کنید',
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
  // Selecting year for option
  produceYear = document.querySelector("#year");

// --> Event
// Event for text effect in HTML
document.addEventListener("DOMContentLoaded", typeWriter);
// Event for sign button
signBtn.addEventListener("click", insurancePage);
// Event for submit button
submitBtn.addEventListener("click", showFactor);

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
// Function for factor to show factor page
function showFactor() {
  insurance.style.display = "none";
  factor.style.display = "block";
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
    produceYear.appendChild(option);
    option.value = i;
    option.innerHTML = ` سال ${i}`;
  }
}
// Call carModelYear function
carModelYear();

const tagSelect1 = document.querySelector("#tag-select1"),
  tagSelect2 = document.querySelector("#tag-select2"),
  tagSelect3 = document.querySelector("#tag-select3"),
  tagSelect4 = document.querySelector("#tag-select4");
for (let i = 10; i <= 99; i++) {
  let ct1 = `<option value="${i}">${i}</option>`;
  tagSelect1.insertAdjacentHTML("beforeend", ct1);

  let ct4 = `<option value="${i}">${i}</option>`;
  tagSelect4.insertAdjacentHTML("beforeend", ct4);
}

for (let x = 111; x <= 999; x++) {
  let ct2 = `<option value="${x}">${x}</option>`;
  tagSelect2.insertAdjacentHTML("beforeend", ct2);
}

let prsionWords = ["الف", "ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"];
for (let z = 0; z < prsionWords.length; z++) {
  let ct3 = `<option value="${z}">${z}</option>`;
  tagSelect3.insertAdjacentHTML("beforeend", ct3);
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let basePrice = 0;

car.addEventListener("change", findBasePrie);

function findBasePrie(params) {
  let cars = car.value;

  // gheymat paeen
  if (cars == "") {
    return alert("لطفا موارد خواسته شده برا وارد کنید");
  } else if (cars == "prid") {
    basePrice = 2000000;
  } else if (cars == "Ashkan") {
    return alert(
      "مشتری گرامی به دلیل پایین بودن قیمت کالای شما بیمه به شمابدهکار شد با عرض پوزش"
    );
  } else if (cars == "cow nissan") {
    basePrice = 2000000;
  } else if (cars == "youngs pikan") {
    basePrice = 2000000;
  }

  // =-=-=-=-=-=-=-=-=-=-=-=
  //gheymat motevaset
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

  // -=-=-=-=-=-=-=-=-=
  // gheymat bala
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


