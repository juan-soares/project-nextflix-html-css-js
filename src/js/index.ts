const buttons = document.querySelectorAll(".button");
const technologies = document.querySelectorAll(".technology");

function desselecionarbutton() {
  const buttonselected = document.querySelector(".button.selected");
  buttonselected?.classList.remove("selected");
}

function desselecionartechnology() {
  const technologieselected = document.querySelector(".technology.selected");
  technologieselected?.classList.remove("selected");
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    desselecionarbutton();
    desselecionartechnology();
    button.classList.add("selected");
    technologies[index].classList.add("selected");
  });
});
