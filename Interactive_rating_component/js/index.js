

const submitButton = document.querySelector(".submit-button");
const allRateButtons = document.querySelectorAll(".rate-btn");

const lightGrey = "hsl(216, 12%, 54%)";
const grey = "hsl(213, 19%, 25%)";
const white = "hsl(0, 0%, 100%)";
const orange = "hsl(25, 97%, 53%)";

let clicked = false;
let selectedRate = null;

function toggleColor (e) {

    if (clicked) {
        for (let rateBtn of allRateButtons) {
            rateBtn.style.backgroundColor = grey;
            rateBtn.style.color = lightGrey;
        }
        e.currentTarget.style.backgroundColor = lightGrey;
        e.currentTarget.style.color = white;

    } else {
        e.currentTarget.style.backgroundColor = lightGrey;
        e.currentTarget.style.color = white;
        clicked = true;
    }

}

function SelectRate (e) {
    selectedRate = e.currentTarget.value;
    let chosenRating = document.querySelector(".chosen-rating");
    chosenRating.innerHTML = selectedRate;
}


function ShowThankYouState (e) {
   const thankYou = document.querySelector(".thank-you-state");
   const interactivComponent = document.querySelector(".interactiv-component");
   thankYou.style.display = "flex";
   interactivComponent.style.display = "none";
}


submitButton.addEventListener("click", ShowThankYouState);

for (let rateBtn of allRateButtons) {
    rateBtn.addEventListener("mousedown", SelectRate);
    rateBtn.addEventListener("click", toggleColor);
}
