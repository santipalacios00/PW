// Importar las funciones necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDocs, addDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBFKo65veH6H_NfZEPEaVRqPv-DtBwGWxM",
    authDomain: "alfgame-e438f.firebaseapp.com",
    projectId: "alfgame-e438f",
    storageBucket: "alfgame-e438f.appspot.com",
    messagingSenderId: "493104096636",
    appId: "1:493104096636:web:1361d0bdda78a2ff5af0f9",
    measurementId: "G-EHQ8FJ9J2F"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de Firestore
const firestore = getFirestore(app);

// Obtener una referencia a la colección "Frases"
const frasesCollection = collection(firestore, "Frases");


// Función para mostrar una frase aleatoria al usuario
async function mostrarFrase() {
    try {
        const querySnapshot = await getDocs(frasesCollection);
        if (querySnapshot.empty) {
            console.error("La colección de frases está vacía");
            return null;
        }

        // Obtener una frase aleatoria de la colección
        const randomIndex = Math.floor(Math.random() * querySnapshot.size);
        const randomDoc = querySnapshot.docs[randomIndex];
        const fraseData = randomDoc.data();
        const frase = fraseData.frase;
        const autor = fraseData.autor;

        // Mostrar la frase en la interfaz
        const phraseElement = document.querySelector(".phrase");
        phraseElement.textContent = frase;

        // Retornar el autor para verificar la respuesta del usuario
        return autor;
    } catch (error) {
        console.error("Error al obtener la frase:", error);
        return null;
    }
}
// Función para comparar la respuesta del usuario con el autor de la frase
function compararRespuesta(respuesta, autor) {
    // Convertir la respuesta del usuario y los elementos del array "autor" a minúsculas
    const respuestaMinuscula = respuesta.toLowerCase();
    const autorMinuscula = autor.map(item => item.toLowerCase());

    // Verificar si la respuesta del usuario se encuentra en el array "autor" en minúsculas
    return autorMinuscula.includes(respuestaMinuscula);
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



// Función para cerrar el modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Función para mostrar el modal
function showModal() {
    document.getElementById("myModal").style.display = "block";
}



async function iniciarJuego() {
    let score = 0; // Reiniciar puntaje
    document.getElementById("score").textContent = score;

    const submitGuessButton = document.getElementById("submitGuess");
    const guessInput = document.getElementById("guessInput");

    // Función para manejar la lógica del juego
    function manejarJuego(autor) {
        // Manejar el evento de clic en el botón de adivinar
        submitGuessButton.addEventListener("click", clicAdivinar);

        // Manejar el evento de tecla Enter en el campo de texto
        guessInput.addEventListener("keydown", presionarEnter);

        function clicAdivinar() {
            const respuestaUsuario = guessInput.value;
            if (compararRespuesta(respuestaUsuario, autor)) {
                // Respuesta correcta: incrementar puntaje y mostrar la siguiente frase
                score++;
                document.getElementById("score").textContent = score;
                document.getElementById("feedback").textContent = "¡Respuesta correcta!";
                mostrarFrase().then(nuevoAutor => {
                    autor = nuevoAutor; // Mostrar siguiente frase
                    guessInput.value = ""; // Limpiar campo de texto
                });
            } else {
                // Respuesta incorrecta: mostrar modal y deshabilitar la adivinanza
                document.getElementById("feedback").textContent = "¡Respuesta incorrecta! Juego terminado. Puntos: " + score;
                guessInput.disabled = true;
                submitGuessButton.disabled = true;
                showModal(); // Mostrar modal para ingresar el nombre del jugador
            }
        }

        function presionarEnter(event) {
            if (event.key === "Enter") {
                clicAdivinar();
            }
        }
    }

    // Mostrar la primera frase y ejecutar la lógica del juego
    mostrarFrase().then(autor => {
        manejarJuego(autor);
    });
}


// Manejar evento de clic en el botón "Comenzar Juego"
document.getElementById("startGame").addEventListener("click", () => {
    document.getElementById("feedback").textContent = ""; // Limpiar mensaje de retroalimentación
    document.getElementById("guessInput").value = ""; // Limpiar campo de texto
    document.getElementById("guessInput").disabled = false; // Habilitar entrada de texto
    document.getElementById("submitGuess").disabled = false; // Habilitar botón de adivinar
    iniciarJuego();
});

