# Proyecto web con responsive (para practicar y repasar cosas ya vistas mas que todo)

El siguiente proyecto constara de la clonacion de un proyecto responsive de un tercero, con el fin de poder seguir aprendiendo y repasando cosas ya vistas. 

## Estructura HTML

### 1era parte: Cabecera

El inicio de la estrucutra semanticamente constara de una seccion que contendra el header, este contendra el logo y el toogle de las opciones de la "barra de navegacion".

En codigo:

```html
<section class="header">
        <header>
            <a href="#" class="logo">Leandro.</a>
            <div class="toggle" onClick=menuToggle();></div>
            <ul class="nav">
                <li><a href="#">Opcion1</a></li>
                <li><a href="#">Opcion2</a></li>
                <li><a href="#">Opcion3</a></li>
                <li><a href="#">Opcion4</a></li>
                <li><a href="#">Opcion5</a></li>
            </ul>
        </header>
    </section>
```

### 2da parte: Contenido 

Aca se mostrara las imagenes

En codigo:

```html
<div class="contenedor">
        <div class="caja">
            <div class="img">
                <img src="../img/uncharted.jpg" alt="">
            </div>
        </div>
        <div class="caja">
            <div class="img">
                <img src="../img/spidermanPS4.jpg" alt="">
            </div>
        </div>
        <div class="caja">
            <div class="img">
                <img src="../img/thelastofus.jpg" alt="">
            </div>
        </div>
        <div class="caja" id="cajaFinal">
            <div class="img">
                <img src="../img/killzonePS4.jpg" alt="">
            </div>
        </div>
    </div>
```

## Cosas aprendidas

1. A insertar fuentes para css desde google fonts
2. Centrar con flex y absolute
3. Ocultar cajas con opacity y visibility
4. Pseudoclase :last-child (para modificar el ulimo contenedor hijo de un padre)
5. A crear pseudoclases para poder togglearlas o hacer lo que sea desde javascript: .selector1.pseudoclasecreada
6. A mejorar un poco las buenas practicas en css (usando mas la descendencia)
7. Transform: scale(valornumerico);