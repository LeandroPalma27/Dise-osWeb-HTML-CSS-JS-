//El atributo onclick de la caja que contiene el icono del menu ejecuta la funcion.
function menuToggle(){
const toggleMenu = document.querySelector('.toggle');
// En una variable almacenamos el selector al cual queremos togglear.
//El metodo querySelector() sirve para seleccionar un selector css.
const nav = document.querySelector('.nav');
toggleMenu.classList.toggle('active');
//A traves de classList, accedemos al metodo toggle para asi poder cambiar a la clase que le asginamos active, y esta contiene cambios visuales.
//classList sirve para acceder de mejor manera a los metodos de un elemento (en este caso del DOMlist).
nav.classList.toggle('active');
//El metodo toggle() permite alternar entre dos acciones, en este caso, alternaremos entre el selector sin la clase asignada active y el selector con la clase active asignada.
}