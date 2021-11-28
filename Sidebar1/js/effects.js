//CODIGO TOGGLEADOR

//Para usar ejecutar algun evento en el DOM (nodo de elementos), es necesario usar el metodo addEventListener(), para asegurarnos que los eventos que hagamos se ejecuten luego se haber sido cargados (TAMBIEN SE PUEDE HACER CON jquery).
//El bendito problema se genera debido a que el script se carga al inicio y por eso en el DOM aun no esta representado los elementos a eventear, sino hasta despues de cargar el script.
document.addEventListener('DOMContentLoaded', function () {
    //Para cualquier cambio visual CSS a traves de javascript, se trae a las clases de los elementos en cuestion, con querySelector("selectorDeId,clase,etc").
    let btnMenu = document.querySelector("#btnMenu"); //Escoge selectores de CSS, por eso se pone "#btnMenu".
    let sidebar = document.querySelector(".sidebar");
    let btnSearch = document.getElementById("btnBuscar"); //Tambien se puede cambiar usando getElementById().

    //Esta funcion sirve para togglear entre selectores css.
    //El toggleo alterna entre dos selectores. No hace falta condicionar un regreso al selector principal.

    btnMenu.onclick = function togglear() {
        sidebar.classList.toggle("active"); //Solo se cambia 'class="sidebar"' por 'class="sidebar active'. Para asi poder cambir aspectos visuales entre selectores css.
    }
    btnSearch.onclick = function btnBuscarTogglea() {
        sidebar.classList.toggle("active");
    }
});

