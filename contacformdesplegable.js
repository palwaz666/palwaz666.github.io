const formContacto = document.getElementById('form-contacto');

formContacto.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

    // Aquí puedes agregar el código para enviar el formulario, como una solicitud AJAX o simplemente mostrar un mensaje de éxito
    alert('Formulario enviado correctamente');
    formContacto.reset(); // Limpiar el formulario después del envío
});