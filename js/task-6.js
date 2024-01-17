'use strict'
const container = document.querySelector("#controls");
const inputNumb = document.querySelector("input[type='number']");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
const messageContainer = document.createElement("p");

btnCreate.addEventListener('click', onCreateClick);
btnDestroy.addEventListener('click', onDestroyClick);

container.insertAdjacentElement('beforeend', messageContainer);

function onCreateClick() {
    const amount = parseInt(inputNumb.value);

    if (isNaN(amount) || amount < 1 || amount > 100) {
    displayMessage('Please enter a number between 1 and 100.');
    return;
    }
    createBoxes(amount);
}
function onDestroyClick() {
    destroyBoxes();
}

function destroyBoxes() {
    boxesContainer.textContent = "";
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
function displayMessage(message) {
    messageContainer.textContent = message;
}



