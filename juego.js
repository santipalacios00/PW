// Importar las funciones necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc, addDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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
function mostrarFrase() {
    // Obtener una frase aleatoria de la colección
    const randomIndex = Math.floor(Math.random() * frasesCollection.length);
    const frase = frasesCollection[randomIndex].frase;
    const autor = frasesCollection[randomIndex].autor;

    // Mostrar la frase en la interfaz
    const phraseElement = document.querySelector(".phrase");
    phraseElement.textContent = frase;

    // Retornar el autor para verificar la respuesta del usuario
    return autor;
}

// Función para comparar la respuesta del usuario con el autor de la frase
function compararRespuesta(respuesta, autor) {
    return autor.includes(respuesta);
}

// Función para iniciar el juego
function iniciarJuego() {
    // Reiniciar puntaje
    let score = 0;
    document.getElementById("score").textContent = score;
    
    // Mostrar la primera frase
    const autor = mostrarFrase();

    // Manejar evento de clic en el botón "Adivinar"
    document.getElementById("submitGuess").addEventListener("click", () => {
        const respuestaUsuario = document.getElementById("guessInput").value;
        if (compararRespuesta(respuestaUsuario, autor)) {
            // Respuesta correcta, incrementar puntaje y mostrar siguiente frase
            score++;
            document.getElementById("score").textContent = score;
            document.getElementById("feedback").textContent = "¡Respuesta correcta!";
            autor = mostrarFrase(); // Mostrar siguiente frase
        } else {
            // Respuesta incorrecta, terminar el juego
            document.getElementById("feedback").textContent = "¡Respuesta incorrecta! Juego terminado. Puntos: " + score;
            document.getElementById("guessInput").disabled = true; // Deshabilitar entrada de texto
            document.getElementById("submitGuess").disabled = true; // Deshabilitar botón de adivinar
        }
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