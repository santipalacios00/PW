const audio = document.getElementById('miAudio');
const toggleButton = document.getElementById('toggleAudio');
const cross = document.querySelector('.cross');

// Evento para cambiar la visibilidad de la cruz cuando se toca el botón
toggleButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        cross.style.display = 'block'; // Muestra la cruz cuando el audio está activo
    } else {
        audio.pause();
        cross.style.display = 'none'; // Oculta la cruz cuando el audio está muteado
    }
});

// Evento para cambiar la visibilidad de la cruz cuando se pausa o reproduce el audio
audio.addEventListener('play', () => {
    cross.style.display = 'block'; // Muestra la cruz cuando el audio está activo
});

audio.addEventListener('pause', () => {
    cross.style.display = 'none'; // Oculta la cruz cuando el audio está muteado
});



document.addEventListener("DOMContentLoaded", function() {
    // Array de URLs de videos o fotos aleatorias de Alf
    var alfVideos = [
        "https://www.youtube.com/watch?v=2JlnDtLw_AE&ab_channel=HacKan",
        "https://www.youtube.com/watch?v=2hBSMInlDGg&ab_channel=JanSchmelter",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    ];

    // Obtener todos los elementos <a> dentro de <li> con la clase "random-header"
    var randomLinks = document.querySelectorAll(".random-header a");

    // Asignar una URL aleatoria a cada enlace y abrir en una nueva pestaña
    randomLinks.forEach(function(link) {
        // Generar un índice aleatorio para seleccionar una URL del array
        var randomIndex = Math.floor(Math.random() * alfVideos.length);
        // Crear una URL con un parámetro de consulta único
        var randomUrl = alfVideos[randomIndex] + "?cachebuster=" + Date.now();
        // Asignar la URL aleatoria al atributo "href" del enlace
        link.href = randomUrl;
        // Agregar el atributo target para abrir en una nueva pestaña
        link.target = "_blank";
    });
});