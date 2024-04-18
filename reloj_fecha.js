const $tiempo = document.querySelector('.tiempo'),
$fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth(), // Corregido: es f.getMonth()
    anio = f.getFullYear(),
    diaSemana = f.getDay(); // Corregido: es f.getDay()

    let timeString = f.toLocaleTimeString();
    let dateString = f.toLocaleDateString(); // Obtener la fecha como string
    $tiempo.innerHTML = timeString;
    $fecha.innerHTML = dateString; // Agregar la fecha al elemento HTML
}
setInterval(() => {
    digitalClock()
}, 1000);

digitalClock(); // Llama a la función para mostrar el reloj al cargar la página
