'use strict'
const container = document.querySelector("#controls");
const inputNumb = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy");
const boxesContainer = document.querySelector("#boxes");

console.log(inputNumb);
console.log(btnCreate);
console.log(btnDestroy);
console.log(boxesContainer);

btnCreate.addEventListener('click', onCreateClick);
btnDestroy.addEventListener('click', onDestroyClick);

function onCreateClick() {
  const amount = parseInt(inputNumb.value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  createBoxes(amount);
}
function onDestroyClick() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divElem = document.createElement("div");
    divElem.style.width = `${30 + i * 10}px`;
    divElem.style.height = `${30 + i * 10}px`;
    divElem.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(divElem);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



