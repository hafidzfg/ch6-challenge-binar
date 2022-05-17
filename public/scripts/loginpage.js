"use strict";

const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const linkLoginOpen = document.querySelector(".open-login");
const linkRegisterOpen = document.querySelector(".open-register");

//untuk switching login dengan register form
const openRegister = function () {
  console.log("Button clicked");
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
};

const openLogin = function () {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
};

linkRegisterOpen.addEventListener("click", openRegister);
linkLoginOpen.addEventListener("click", openLogin);

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const data = new FormData(event.target);

//   const formJSON = Object.fromEntries(data.entries());

//   // for multi-selects, we need special handling
//   formJSON.reg = data.getAll("reg");

//   const results = document.querySelector(".results pre");
//   results.innerText = JSON.stringify(formJSON, null, 2);
// }

// const form = document.querySelector(".register-form");
// form.addEventListener("submit", handleFormSubmit);

console.log("Script login page jalan!");
