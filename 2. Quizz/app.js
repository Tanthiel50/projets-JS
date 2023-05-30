const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit);
const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");


function handleSubmit(e) {
    e.preventDefault();
    const results = [];
    const radioButtons = document.querySelectorAll("input[type='radio']:checked");
    radioButtons.forEach((radioButton, index) => {
        if (radioButton.value === responses[index]) {
            results.push(true);
        } else {
            results.push(false);
        }
    });
    showResults(results);
    addColors(results)
    console.log(results)
}

function showResults(results) {
    const errorsNumber = results.filter(error => error === false).length; 
    switch (errorsNumber) {
        case 0:
            titleResult.textContent= emojis[0]+"C'est un sans faute"+emojis[0];
            helpResult.textContent = "Quelle culture ...";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>5 / 5</span>";
            markResult.style.display = "block";
            break;
        case 1:
            titleResult.textContent= emojis[1]+"Une erreur"+emojis[1];
            helpResult.textContent = "On y est presque ...";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>4 / 5</span>";
            markResult.style.display = "block";
            break;
        case 2:
            titleResult.textContent= emojis[2]+"Deux erreurs"+emojis[2];
            helpResult.textContent = "C'est pas passé loin ...";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>3 / 5</span>";
            markResult.style.display = "block";
            break;
        case 3:
            titleResult.textContent= emojis[2]+"Trois erreurs"+emojis[2];
            helpResult.textContent = "Ca commence à être chaud ...";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>2 / 5</span>";
            markResult.style.display = "block";
            break;
        case 4:
            titleResult.textContent= emojis[3]+"Quatres erreurs"+emojis[3];
            helpResult.textContent = "On va dire que c'était pas ton jour ...";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>1 / 5</span>";
            markResult.style.display = "block";
            break;
        case 5:
            titleResult.textContent= emojis[4]+"Cinq erreurs"+emojis[4];
            helpResult.textContent = "Bon l'histoire c'est pas ton truc ...";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>0 / 5</span>";
            markResult.style.display = "block";
            break;
        default:
            console.log("C'était pas prévu")
            break;
    }
}

function addColors(results) {
    const block = document.querySelectorAll(".question-block");
    results.forEach((response, index) => {
        if(results[index]) {
            block[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)"
        } else {
            block[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c)"
        }
        })
    }

