document.addEventListener('DOMContentLoaded', function() {
  const zoomableImages = document.querySelectorAll('.zoomable');

  zoomableImages.forEach(function(image) {
    image.addEventListener('click', function(event) {
      event.stopPropagation(); // Evitar que el evento se propague a los elementos hijos

      // Crear el contenedor para la imagen completa
      const fullSizeContainer = document.createElement('div');
      fullSizeContainer.classList.add('full-size', 'active'); // Agregar la clase 'active' para mostrar la imagen

      // Crear una nueva imagen con el atributo src de la imagen actual
      const fullSizeImage = document.createElement('img');
      fullSizeImage.src = image.src;

      // Agregar la nueva imagen al contenedor
      fullSizeContainer.appendChild(fullSizeImage);

      // Agregar el contenedor al cuerpo
      document.body.appendChild(fullSizeContainer);

      // Agregar evento de clic al contenedor para ocultar la imagen
      fullSizeContainer.addEventListener('click', function hideImage(event) {
        if (event.target === fullSizeContainer) {
          fullSizeContainer.classList.remove('active'); // Ocultar la imagen
          setTimeout(() => {
            fullSizeContainer.remove(); // Eliminar el contenedor después de que termine la transición
          }, 300); // Esperar el tiempo de la transición
        }
      });
    });
  });
});
