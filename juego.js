// Importar módulos de Firebase (URLs actualizadas)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "tu_api_key",
    authDomain: "alfgame-e438f.firebaseapp.com",
    projectId: "alfgame-e438f",
    storageBucket: "alfgame-e438f.appspot.com",
    messagingSenderId: "493104096636",
    appId: "1:493104096636:web:1361d0bdda78a2ff5af0f9",
    measurementId: "G-EHQ8FJ9J2F"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
const firestore = getFirestore(app);

// Obtener una referencia a la colección "Frases"
const frasesCollection = collection(firestore, "Frases");

let frasesDificultad1 = [];
let frasesDificultad2 = [];
let frasesDificultad3 = [];
let dificultadActual = 1;
let juegoActivo = false;

// Función para cargar frases por dificultad desde Firestore
async function cargarFrasesPorDificultad() {
    try {
        const querySnapshot = await getDocs(frasesCollection);
        querySnapshot.forEach(doc => {
            const frase = doc.data();
            switch (frase.dificultad) {
                case 1:
                    frasesDificultad1.push(frase);
                    break;
                case 2:
                    frasesDificultad2.push(frase);
                    break;
                case 3:
                    frasesDificultad3.push(frase);
                    break;
                default:
                    break;
            }
        });
    } catch (error) {
        console.error("Error al cargar frases por dificultad:", error);
    }
}

// Función para reiniciar el juego y las frases mostradas
async function reiniciarJuego() {
    // Limpiar las frases mostradas del nivel actual
    limpiarFrasesMostradas();

    // Incrementar la dificultad actual si es posible
    if (dificultadActual < 3) {
        dificultadActual++;
    } else {
        // Si ya se completaron todas las dificultades, el juego ha terminado
        console.log("¡Has ganado el juego!");
        dificultadActual = 1; // Reiniciar la dificultad a 1 para futuros juegos
    }
    await cargarFrasesPorDificultad();
}

// Función para obtener una frase aleatoria según la dificultad actual
function obtenerFraseAleatoria() {
    let fraseAleatoria = null;

    switch (dificultadActual) {
        case 1:
            if (frasesDificultad1.length > 0) {
                fraseAleatoria = obtenerFraseDeArray(frasesDificultad1);
            } else {
                reiniciarJuego(); // Reiniciar juego al agotar las frases del nivel
                return obtenerFraseAleatoria();
            }
            break;
        case 2:
            if (frasesDificultad2.length > 0) {
                fraseAleatoria = obtenerFraseDeArray(frasesDificultad2);
            } else {
                reiniciarJuego(); // Reiniciar juego al agotar las frases del nivel
                return obtenerFraseAleatoria();
            }
            break;
        case 3:
            if (frasesDificultad3.length > 0) {
                fraseAleatoria = obtenerFraseDeArray(frasesDificultad3);
            } else {
                // Si no hay más frases de dificultad 3, el juego ha terminado
                console.log("¡Has ganado el juego!");
                return null;
            }
            break;
        default:
            break;
    }

    return fraseAleatoria;
}

// Función auxiliar para obtener una frase aleatoria de un array específico
function obtenerFraseDeArray(array) {
    const frasesDisponibles = array.filter(frase => !frasesMostradas.includes(frase));
    if (frasesDisponibles.length === 0) {
        return null; // Si todas las frases han sido mostradas, retornar null
    }
    const randomIndex = Math.floor(Math.random() * frasesDisponibles.length);
    const fraseSeleccionada = frasesDisponibles[randomIndex];
    frasesMostradas.push(fraseSeleccionada);
    return fraseSeleccionada;
}

// Función para limpiar las frases mostradas del nivel actual
function limpiarFrasesMostradas() {
    frasesMostradas = [];
}

// Función para comparar la respuesta del usuario con el autor de la frase
function compararRespuesta(respuesta, autor) {
    const respuestaMinuscula = respuesta.toLowerCase();
    const autorMinuscula = autor.map(item => item.toLowerCase());
    return autorMinuscula.includes(respuestaMinuscula);
}

// Función para mostrar una frase al usuario
async function mostrarFrase() {
    try {
        let frase = obtenerFraseAleatoria();

        // Si no hay frases disponibles, reiniciar el juego
        if (!frase) {
            reiniciarJuego();
            frase = obtenerFraseAleatoria();
        }

        if (!frase) {
            console.error("No hay frases disponibles");
            return null;
        }

        const autor = frase.autor;
        const fraseTexto = frase.frase;

        // Mostrar la frase en la interfaz
        const phraseElement = document.querySelector(".phrase");
        phraseElement.textContent = fraseTexto;

        // Limpiar campo de texto para la nueva frase
        document.getElementById("guessInput").value = "";

        // Retornar el autor para verificar la respuesta del usuario
        return autor;
    } catch (error) {
        console.error("Error al obtener la frase:", error);
        return null;
    }
}

// Función para iniciar el juego
function iniciarJuego() {
    juegoActivo = true;
    let score = 0; // Reiniciar puntaje
    document.getElementById("score").textContent = score;

    // Mostrar la primera frase
    mostrarFrase().then(autor => {
        // Manejar evento de clic en el botón "Adivinar"
        document.getElementById("submitGuess").addEventListener("click", clicAdivinar);

        // Manejar evento de tecla Enter en el campo de texto
        document.getElementById("guessInput").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                clicAdivinar();
            }
        });

        function clicAdivinar() {
            const respuestaUsuario = document.getElementById("guessInput").value;
            if (compararRespuesta(respuestaUsuario, autor)) {
                // Respuesta correcta, incrementar puntaje y mostrar siguiente frase
                score++;
                document.getElementById("score").textContent = score;
                document.getElementById("feedback").textContent = "¡Respuesta correcta!";
                mostrarFrase().then(nuevoAutor => {
                    if (nuevoAutor) {
                        autor = nuevoAutor; // Mostrar siguiente frase
                        document.getElementById("guessInput").value = ""; // Limpiar campo de texto
                    } else {
                        // Si no hay más frases disponibles, terminar el juego
                        terminarJuego();
                    }
                });
            } else {
                // Respuesta incorrecta, mostrar modal y deshabilitar el botón de adivinar
                document.getElementById("feedback").textContent = "¡Respuesta incorrecta! Juego terminado. Puntos: " + score;
                document.getElementById("guessInput").disabled = true; // Deshabilitar entrada de texto
                document.getElementById("submitGuess").disabled = true; // Deshabilitar botón de adivinar
                showModal(); // Mostrar modal para ingresar el nombre del jugador
                juegoActivo = false;
            }
        }
    });
}

// Función para terminar el juego
function terminarJuego() {
    juegoActivo = false;
    limpiarFrasesMostradas(); // Limpiar las frases mostradas del nivel actual
    dificultadActual = 1; // Reiniciar la dificultad a 1 al finalizar el juego
    document.getElementById("guessInput").disabled = true; // Deshabilitar entrada de texto
    document.getElementById("submitGuess").disabled = true; // Deshabilitar botón de adivinar
    showModal(); // Mostrar modal para ingresar el nombre del jugador
}

// Manejar evento de clic en el botón "Comenzar Juego"
document.getElementById("startGame").addEventListener("click", () => {
    if (!juegoActivo) {
        document.getElementById("feedback").textContent = ""; // Limpiar mensaje de retroalimentación
        document.getElementById("guessInput").value = ""; // Limpiar campo de texto
        document.getElementById("guessInput").disabled = false; // Habilitar entrada de texto
        document.getElementById("submitGuess").disabled = false; // Habilitar botón de adivinar
        iniciarJuego();
    }
});

// Función para cerrar el modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Función para mostrar el modal
function showModal() {
    document.getElementById("myModal").style.display = "block";
}

// Manejar evento de clic en el botón "Guardar Puntuación"
document.getElementById("saveScoreBtn").addEventListener("click", async () => {
    const playerName = document.getElementById("playerNameInput").value;
    const score = parseInt(document.getElementById("score").textContent); // Convertir a número

    // Obtener la fecha actual como un objeto Timestamp
    const currentDate = new Date();

    try {
        // Guardar la puntuación en la colección "Partidas"
        await addDoc(collection(firestore, "Partidas"), {
            nombre: playerName,
            puntaje: score,
            fecha: currentDate
        });
        console.log("Puntuación guardada con éxito");
    } catch (error) {
        console.error("Error al guardar la puntuación:", error);
    }

    // Ocultar el modal
    closeModal();
});

// Ejecutar la carga inicial de frases por dificultad al cargar la página
window.onload = async () => {
    await cargarFrasesPorDificultad();
};
