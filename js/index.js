const submitButton = document.querySelector(".submit-button");

function ChangeButtonColor (e) {
    e.currentTarget.style.backgroundColor = "hsl(0, 0%, 100%)";
    e.currentTarget.style.color = "hsl(25, 97%, 53%)";
}

function ChangeCursor (e) {
    e.currentTarget.style.cursor = "pointer";
}

submitButton.addEventListener("mousemove", ChangeButtonColor);
submitButton.addEventListener("mousemove", ChangeCursor);
submitButton.removeEventListener("mouseout", ChangeButtonColor);


