let divLogin = document.querySelector('.form_login');
let divRegister = document.querySelector('.form_register');
let btnRegisterActive = document.querySelector('.register-button');
let btnLoginActive = document.querySelector('.login-button');

btnRegisterActive.addEventListener('click', function (e) {
    divRegister.classList.toggle('active');
    divLogin.classList.toggle('active');
});

btnLoginActive.addEventListener('click', function (e) {
    divRegister.classList.toggle('active');
    divLogin.classList.toggle('active');
});


