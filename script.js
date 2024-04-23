const audio = document.getElementById('miAudio');
const toggleButton = document.getElementById('toggleAudio');
const cross = document.querySelector('.cross');

// Función para cambiar dinámicamente la imagen del botón
function toggleButtonImage() {
    const bocinaImage = toggleButton.querySelector('.bocina-image');
    if (audio.paused) {
        bocinaImage.src = 'https://static.thenounproject.com/png/2090371-200.png'; // Cambia a la imagen de bocina muteada
    } else {
        bocinaImage.src = 'https://cdn0.iconfinder.com/data/icons/website-fat-outlines-part-1-black/96/web-02-512.png'; // Cambia a la imagen de bocina activa
    }
}

// Evento para cambiar la imagen del botón cuando se toca el botón
toggleButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    toggleButtonImage();
});

// Evento para cambiar la imagen del botón cuando se pausa o reproduce el audio
audio.addEventListener('play', () => {
    toggleButtonImage();
});

audio.addEventListener('pause', () => {
    toggleButtonImage();
});

// Boton random
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

//Boton ranking

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el modal
    var modal = document.getElementById("ranking-modal");

    // Obtener el botón que abre el modal
    var btn = document.querySelector(".ranking-header a");

    // Obtener el botón de cierre del modal
    var closeBtn = modal.querySelector(".close");

    // Cuando se hace clic en el botón, mostrar el modal
    btn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Cuando se hace clic en el botón de cierre, ocultar el modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cuando se hace clic fuera del modal, ocultarlo
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
