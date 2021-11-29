let divPrincipal = document.querySelector('.container-form');
let divLogin = document.querySelector('.form_login');
let divRegister = document.querySelector('.form_register');
let btnRegisterActive = document.querySelector('.goToCreateUser');
let btnLoginActive = document.querySelector('.goToLogin');

//Contenedores de las partes del formulario:
let formTitle = document.querySelectorAll('.form_container-title');
let formInputs = document.querySelectorAll('.form_container-inputs');
let formButtons = document.querySelectorAll('.form_container-buttons');

let inputsForm = document.querySelectorAll('.input-form');


btnRegisterActive.addEventListener('click', function (e) {
    divPrincipal.classList.toggle('active');
    divRegister.classList.toggle('active');
    divLogin.classList.toggle('active');
    formTitle.forEach((e) => {
        e.classList.toggle('active');
    });
    formInputs.forEach((e) => {
        e.classList.toggle('active');
    });
    formButtons.forEach((e) => {
        e.classList.toggle('active');
    });
    inputsForm.forEach((e) => {
        e.classList.toggle('active');
    })
});

btnLoginActive.addEventListener('click', function (e) {
    divPrincipal.classList.toggle('active');
    divRegister.classList.toggle('active');
    divLogin.classList.toggle('active');
    formTitle.forEach((e) => {
        e.classList.toggle('active');
    });
    formInputs.forEach((e) => {
        e.classList.toggle('active');
    });
    formButtons.forEach((e) => {
        e.classList.toggle('active');
    });
    inputsForm.forEach((e) => {
        e.classList.toggle('active');
    })
});


