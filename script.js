import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, getDocs, query, collection, orderBy } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBFKo65veH6H_NfZEPEaVRqPv-DtBwGWxM",
    authDomain: "alfgame-e438f.firebaseapp.com",
    projectId: "alfgame-e438f",
    storageBucket: "alfgame-e438f.appspot.com",
    messagingSenderId: "493104096636",
    appId: "1:493104096636:web:1361d0bdda78a2ff5af0f9",
    measurementId: "G-EHQ8FJ9J2F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Tu código aquí

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
        "https://www.youtube.com/watch?v=VQhU63xKJZk&pp=ygUWYWxmIG1vbWVudG9zIGdyYWNpb3Nvcw%3D%3D",
        "https://www.youtube.com/watch?v=pTCqk29v8w8&ab_channel=RashProducciones",
        
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

// Boton ranking
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
        const querySnapshot = await getDocs(query(collection(db, "Partidas"), orderBy("puntaje", "desc")));

        const rankingList = document.querySelector(".ranking-list");
        rankingList.innerHTML = "";

        let posicion = 1;
        querySnapshot.forEach((doc) => {
            const partida = doc.data();
            const fecha = new Date(partida.fecha.seconds * 1000);
            const formattedDate = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${posicion}</td>
                <td>${partida.nombre}</td>
                <td>${partida.puntaje}</td>
                <td>${formattedDate}</td>
            `;
            rankingList.appendChild(row);
            posicion++;
        });

        const rankingModal = document.getElementById("ranking-modal");
        rankingModal.style.display = "block";
    } catch (error) {
        console.error("Error al mostrar el ranking:", error);
    }
}



// Manejar evento de clic en el botón "Ranking"
document.querySelector(".ranking-header").addEventListener("click", mostrarRanking);

// Manejar eventos cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el modal de ayuda
    var ayudaModal = document.getElementById("ayuda-modal");

    // Obtener el botón que abre el modal de ayuda
    var ayudaBtn = document.querySelector(".ayuda-header a");

    // Obtener el botón de cierre del modal de ayuda
    var ayudaCloseBtn = ayudaModal.querySelector(".close");

    // Cuando se hace clic en el botón, mostrar el modal de ayuda
    ayudaBtn.addEventListener("click", function(event) {
        ayudaModal.style.display = "block";
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    });

    // Cuando se hace clic en el botón de cierre, ocultar el modal de ayuda
    ayudaCloseBtn.addEventListener("click", function(event) {
        ayudaModal.style.display = "none";
        event.stopPropagation(); // Evitar la propagación del evento al contenedor principal del modal
    });

    // Cuando se hace clic fuera del contenido del modal de ayuda, cerrarlo
    window.addEventListener("click", function(event) {
        if (event.target == ayudaModal) {
            ayudaModal.style.display = "none";
        }
    });
});

