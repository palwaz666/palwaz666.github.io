// Obtén el navbar y la posición inicial de la página
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

// Función que añade o quita la clase 'fixed-top' basada en la posición del scroll
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
}

// Añade el evento 'scroll' para llamar a la función 'stickyNavbar' al hacer scroll
window.onscroll = function() {
    stickyNavbar();
};