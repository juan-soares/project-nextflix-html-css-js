const buttons = document.querySelectorAll(".button");
const cards = document.querySelectorAll(".technology__card");

function resetButtonSelection() {
  const selectedButton = document.querySelector(".button--selected");
  selectedButton?.classList.remove("button--selected");
}

function resetCardSelection() {
  const selectedCard = document.querySelector(".technology__card--selected");
  selectedCard?.classList.remove("technology__card--selected");
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    resetButtonSelection();
    resetCardSelection();
    button.classList.add("button--selected");
    cards[index].classList.add("technology__card--selected");
  });
});
