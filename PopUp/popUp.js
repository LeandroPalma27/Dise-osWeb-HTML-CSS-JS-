var btnAddToCart = document.querySelectorAll('.btn-add');
var btnCerrarPopUp = document.querySelectorAll('.btn-cerrar');
var btnPagarAll = document.getElementById('btnPagarAll');
var btnPagarOne = document.getElementById('btnPagarOne');
var btnPagar = document.querySelectorAll('.btn-pagarOneAll');

btnAddToCart.forEach(button => {
    button.addEventListener('click', () => {
        let contenedorModal = document.getElementById('contenedorModal');
        mostrarPopUp(contenedorModal);
    });
});

btnCerrarPopUp.forEach(button => {
    button.addEventListener('click', () => {
        let btnCerrarPopUp = button.closest('.contenedor-modal');
        cerrarPopUp(btnCerrarPopUp);
    });
});

btnPagar.forEach(button => {
    button.addEventListener('click', () => {
        let btnCerrarPopUp = button.closest('.contenedor-modal__resumen');
        cerrarPopUp(btnCerrarPopUp);
    })
})

function mostrarPopUp(data) {
    data.classList.toggle('active');
    let bodyBlur = document.getElementById('bodyBlur');
    bodyBlur.classList.toggle('active');
}

function cerrarPopUp(data) {
    data.classList.remove('active');
    bodyBlur.classList.remove('active');
}

btnPagarAll.addEventListener('click', function(e) {
    let contenedorModalCart = document.getElementById('contenedorModalResumen');
    mostrarPopUp(contenedorModalCart);
});

btnPagarOne.addEventListener('click', function(e) {
    let contenedorModalCart = document.getElementById('contenedorModalResumen');
    mostrarPopUp(contenedorModalCart);
});
