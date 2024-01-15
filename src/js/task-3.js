'use strict'
const inputElem = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputElem.addEventListener('input', onInputChange);

function onInputChange() {
    const inputValue = inputElem.value.trim();
    spanName.textContent = inputValue === '' ? 'Anonymous' : inputValue;
    };
