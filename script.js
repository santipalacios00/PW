const firebaseConfig = {
    apiKey: "AIzaSyBFKo65veH6H_NfZEPEaVRqPv-DtBwGWxM",
    authDomain: "alfgame-e438f.firebaseapp.com",
    projectId: "alfgame-e438f",
    storageBucket: "alfgame-e438f.appspot.com",
    messagingSenderId: "493104096636",
    appId: "1:493104096636:web:1361d0bdda78a2ff5af0f9",
    measurementId: "G-EHQ8FJ9J2F"
};
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Obtener una referencia a la colección "Frases"
const db = firebase.firestore();
const frasesCollection = db.collection("Frases");

// Función para obtener la frase del documento con ID "1" de la colección "Frases"
function obtenerFrase() {
    // Obtener el documento con ID "1" de la colección "Frases"
    frasesCollection.doc("1").get().then((doc) => {
        if (doc.exists) {
            // Obtener los datos del documento
            const fraseData = doc.data();

            // Actualizar el contenido del elemento "phrase" en el HTML con la frase obtenida
            const phraseElement = document.querySelector(".phrase");
            phraseElement.textContent = fraseData.frase;
        } else {
            console.log("No se encontró el documento con ID '1'");
        }
    }).catch((error) => {
        console.error("Error al obtener la frase:", error);
    });
}

// Llamar a la función obtenerFrase al iniciar el juego
window.addEventListener("DOMContentLoaded", obtenerFrase);


const audio = document.getElementById('miAudio');
const toggleButton = document.getElementById('toggleAudio');

// Manejo del AUDIO 

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento de audio
    const audio = document.getElementById('miAudio');

    // Reproducir el audio automáticamente
    audio.play();
});

// Función para cambiar dinámicamente la imagen del botón
function toggleButtonImage() {
    const bocinaImage = toggleButton.querySelector('.bocina-image');
    if (audio.paused) {
        bocinaImage.src = 'https://static.thenounproject.com/png/2090371-200.png'; // Cambia a la imagen de bocina activa
    } else {
        bocinaImage.src = 'https://cdn0.iconfinder.com/data/icons/website-fat-outlines-part-1-black/96/web-02-512.png'; // Cambia a la imagen de bocina muteada
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


// Botones del encabezado

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
    btn.addEventListener("click", function(event) {
        modal.style.display = "block";
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    });

    // Cuando se hace clic en el botón de cierre, ocultar el modal
    closeBtn.addEventListener("click", function(event) {
        modal.style.display = "none";
        event.stopPropagation(); // Evitar la propagación del evento al contenedor principal del modal
    });

    // Cuando se hace clic fuera del contenido del modal, cerrarlo
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});


