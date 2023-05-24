const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

// let taille = document.getElementById("taille").valueAsNumber;
// let poids = document.getElementById("poids").valueAsNumber;
// let alert = document.getElementById("alert");

function getValues (){
  let taille = document.getElementById("taille").valueAsNumber;
  let poids = document.getElementById("poids").valueAsNumber;
  let alert = document.getElementById("alert");
  let IMC = document.getElementById("IMC");
  let resultIMC;

  if (!poids) {
    alert.innerHTML = "Veuillez entrer votre poids";

  }else if (!taille) {
    alert.innerHTML = "Veuillez entrer votre taille";
  } else {
    resultIMC = poids * (taille*taille)/10;
    IMC.innerHTML = resultIMC;
  }
}
