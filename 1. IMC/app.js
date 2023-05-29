const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

function getValues (){
  let height = document.getElementById("height").valueAsNumber;
  let weight = document.getElementById("weight").valueAsNumber;
  let alert = document.getElementById("alert");
  let IMC = document.getElementById("IMC");
  let resultIMC;

  if (!weight) {
    alert.innerHTML = "Veuillez entrer votre poids";

  }else if (!height) {
    alert.innerHTML = "Veuillez entrer votre taille";
  } else {
    resultIMC =Math.floor(weight / ((height/100)*(height/100)));
    IMC.innerHTML = resultIMC;
    for (let i = 0; i < BMIData.length; i++) {
      const { name, color, range } = BMIData[i];
      const [minRange, maxRange] = range;

      if (resultIMC >= minRange && resultIMC < maxRange) {
        alert.innerHTML = name;
        alert.style.color = color;

        return;
      }
    }
  }
}

// CORRECTION ne pas mettre de onclick sur le button
// const form = document.querySelector("form");
// form.addEventListener("submit", handleForm);

// function handleForm(e) {
//   e.preventDefault();
//   calculateBMI();
// }

// const inputs = document.querySelectorAll("input");

// function calculateBMI() {
//   const height = inputs[0].value;
//   const weight = inputs[1].value;

//   if (!height || !weight || height <= 0 || weight <= 0) {
//     handleError();
//     return;
//   } else {
//   }
//   const BMI = (weight / Math.pow(height/100,2)).toFixed(1)

//   showResult(BMI)
// }

// const displayBMI = document.querySelector(".bmi-value");
// const result = document.querySelector(".result");

// function handleError() {
//   displayBMI.textContent = "Wops";
//   displayBMI.style.color = "inherit";
//   result.textContent = "Remplissez correctement les inputs.";
// }

// function showResult(BMI){
//   const rank = BMIData.find(data => {
//     if(BMI >= data.range[0] && BMI < data.range[1]) return data;
//     else if(typeof data.range === "number" && BMI >=data.range) return data;
//   })

//   displayBMI.textContent = BMI;
//   displayBMI.style.color = `${rank.color}`
//   result.textContent = `Résultat : ${rank.name}`
// }
