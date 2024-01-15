'use srtrict'
const divElem = document.querySelector(".widget");
const spanElem = document.querySelector(".color");
const btnChange = document.querySelector('button');

console.log(divElem);
console.log(spanElem);
console.log(btnChange);

btnChange.addEventListener("click", onBtnClick);
spanElem.addEventListener("click", onSpanClick);

function onBtnClick() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    spanElem.textContent = randomColor;
}

function onSpanClick() {
    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

