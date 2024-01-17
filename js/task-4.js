'use strict'
const formElem = document.querySelector(".login-form");

console.log(formElem);

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const userName = formElem.elements.email.value.trim();
    const userPassword = formElem.elements.password.value.trim();
    
    if (userName === "" || userPassword === "") {
        alert("All form fields must be filled in");
    }

    const formData = {
    userName,
    userPassword,
    };
    
    formElem.reset();
    console.log(formData);
};
