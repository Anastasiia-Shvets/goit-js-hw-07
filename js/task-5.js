'use srtrict'
const divElem = document.querySelector(".widget");
const spanElem = document.querySelector(".color");
const btnChange = document.querySelector("button.change-color");

btnChange.addEventListener("click", onBtnClick);

function onBtnClick() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    spanElem.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

