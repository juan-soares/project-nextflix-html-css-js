const buttons = document.querySelectorAll(".button");
const cards = document.querySelectorAll(".technology__card");

function desselecionarbutton() {
  const selectedButton = document.querySelector(".button--selected");
  selectedButton?.classList.remove("button--selected");
}

function desselecionartechnology() {
  const selectedCard = document.querySelector(".technology__card--selected");
  selectedCard?.classList.remove("technology__card--selected");
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    desselecionarbutton();
    desselecionartechnology();
    button.classList.add("button--selected");
    cards[index].classList.add("technology__card--selected");
  });
});
