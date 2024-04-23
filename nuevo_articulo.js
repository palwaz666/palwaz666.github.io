document.addEventListener('DOMContentLoaded', function() {
    const formArticulo = document.getElementById('form-articulo');
    const articulosContainer = document.getElementById('articulos');
    const botonMostrarFormulario = document.getElementById('mostrar-formulario');


    function obtenerContenedor(seccion) {
        if (seccion === 'generales') {
            return document.getElementById('inicio');
        } else if (seccion === 'deporte') {
            return document.getElementById('deporte');
        } else if (seccion === 'negocios') {
            return document.getElementById('negocios');
        }
    }

    function crearNuevoArticulo(id, titulo, descripcion, categoria, imagenURL, seccion) {
        const nuevoArticulo = document.createElement('div');
        nuevoArticulo.classList.add('news-item');
        nuevoArticulo.dataset.id = id;

        const imagen = document.createElement('img');
        imagen.src = imagenURL;
        imagen.alt = titulo;
        imagen.classList.add('news-image');

        const texto = document.createElement('div');
        texto.classList.add('news-text');

        const tituloElemento = document.createElement('h2');
        tituloElemento.textContent = titulo;

        const categoriaElemento = document.createElement('small');
        categoriaElemento.textContent = categoria;

        const hr = document.createElement('hr');
        hr.classList.add('is-divider', 'is-size-small'); // Agrega clases de Bulma
        texto.appendChild(hr);



        const descripcionParrafos = descripcion.split('\n').map(parrafo => {
            const p = document.createElement('p');
            p.textContent = parrafo;
            return p;
        });

        texto.appendChild(tituloElemento);
        texto.appendChild(categoriaElemento);
        texto.appendChild(hr);
        descripcionParrafos.forEach(parrafo => texto.appendChild(parrafo));

        nuevoArticulo.appendChild(imagen);
        nuevoArticulo.appendChild(texto);

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('eliminar-articulo');
        botonEliminar.addEventListener('click', function() {
            nuevoArticulo.parentNode.removeChild(nuevoArticulo);
            eliminarArticuloLocalStorage(id);
        });
        nuevoArticulo.appendChild(botonEliminar);

        obtenerContenedor(seccion).appendChild(nuevoArticulo);

        // Desplazar la página hasta el nuevo artículo agregado
        nuevoArticulo.scrollIntoView({ behavior: 'smooth', block: 'start' });

        return nuevoArticulo;
    }

    function guardarArticuloLocalStorage(id, titulo, descripcion, categoria, imagenURL, seccion) {
        const articulo = {
            id,
            titulo,
            descripcion,
            categoria,
            imagenURL,
            seccion
        };
        let articulos = JSON.parse(localStorage.getItem('articulos')) || [];
        articulos.push(articulo);
        localStorage.setItem('articulos', JSON.stringify(articulos));
    }

    function eliminarArticuloLocalStorage(id) {
        let articulos = JSON.parse(localStorage.getItem('articulos')) || [];
        articulos = articulos.filter(articulo => articulo.id != id);
        localStorage.setItem('articulos', JSON.stringify(articulos));
    }

    function cargarArticulosLocalStorage() {
        let articulos = JSON.parse(localStorage.getItem('articulos')) || [];
        articulos.forEach(articulo => {
            const nuevoArticulo = crearNuevoArticulo(articulo.id, articulo.titulo, articulo.descripcion, articulo.categoria, articulo.imagenURL, articulo.seccion);
        });
    }

    cargarArticulosLocalStorage();

    formArticulo.addEventListener('submit', function(event) {
        event.preventDefault();

        const id = Date.now();
        const titulo = formArticulo.querySelector('#titulo').value;
        const descripcion = formArticulo.querySelector('#descripcion').value;
        const categoria = formArticulo.querySelector('#categoria').value;
        const imagenURL = formArticulo.querySelector('#imagen').value;
        const seccion = formArticulo.querySelector('#seccion').value;

        const nuevoArticulo = crearNuevoArticulo(id, titulo, descripcion, categoria, imagenURL, seccion);

        guardarArticuloLocalStorage(id, titulo, descripcion, categoria, imagenURL, seccion);

        formArticulo.reset();
    });

    // Agregar controlador de eventos al botón para mostrar el formulario
    botonMostrarFormulario.addEventListener('click', function() {
        formArticulo.style.display = 'block';
        window.scrollTo(0,document.body.scrollHeight);
    });
});
