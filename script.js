document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento de audio
    var audio = document.getElementById("miAudio");
    
    // Obtener el botón de alternancia de audio
    var toggleButton = document.getElementById("toggleAudio");
    
    // Manejar el clic en el botón de alternancia de audio
    toggleButton.addEventListener("click", function() {
        // Verificar si el audio está silenciado
        if (audio.muted) {
            // Activar el audio
            audio.muted = false;
            toggleButton.textContent = "Mutear Audio";
        } else {
            // Silenciar el audio
            audio.muted = true;
            toggleButton.textContent = "Activar Audio";
        }
    });
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