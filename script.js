import { getFirestore, collection, doc, setDoc, getDocs, addDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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


// Función para mostrar el modal del ranking con la lista de partidas
async function mostrarRanking() {
    try {
        // Obtener las partidas ordenadas por puntaje de forma descendente
        const querySnapshot = await getDocs(query(collection(firestore, "Partidas"), orderBy("puntaje", "desc")));

        // Limpiar la lista de jugadores antes de mostrar las nuevas entradas
        const rankingList = document.querySelector(".ranking-list");
        rankingList.innerHTML = "";

        // Iterar sobre las partidas y mostrarlas en el modal
        querySnapshot.forEach((doc) => {
            const partida = doc.data();
            const listItem = document.createElement("li");
            listItem.textContent = `Nombre: ${partida.nombre}, Puntaje: ${partida.puntaje}, Fecha: ${partida.fecha}`;
            rankingList.appendChild(listItem);
        });

        // Mostrar el modal del ranking
        const rankingModal = document.getElementById("ranking-modal");
        rankingModal.style.display = "block";
    } catch (error) {
        console.error("Error al mostrar el ranking:", error);
    }
}

// Manejar evento de clic en el botón "Ranking"
document.querySelector(".ranking-header").addEventListener("click", mostrarRanking);


