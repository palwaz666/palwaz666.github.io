// Función para pausar el movimiento de los avisos
function pauseAvisos() {
    const avisosContainer = document.querySelector('.avisos-container');
    avisosContainer.classList.add('paused');
}

// Función para reanudar el movimiento de los avisos
function resumeAvisos() {
    const avisosContainer = document.querySelector('.avisos-container');
    avisosContainer.classList.remove('paused');
}
