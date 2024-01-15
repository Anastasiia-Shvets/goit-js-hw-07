"use strict";
const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const userEmail = formElem.elements.email.value.trim();
    const userPassword = formElem.elements.password.value.trim();
    
    if (userEmail === "" || userPassword === "") {
        alert("All form fields must be filled in");
        return false;
    }

    const formData = {
    userEmail,
    userPassword,
    };
    
    formElem.reset();
    console.log(formData);
};
