import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

// Config de Firebase 
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID",
    measurementId: "TU_MEASUREMENT_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de Firestore
const firestore = getFirestore(app);

// Obtener una referencia a la colección "Frases"
const frasesCollection = collection(firestore, "Frases");

// Función para obtener la frase del documento con ID "1" de la colección "Frases"
function obtenerFrase() {
    // Obtener el documento con ID "1" de la colección "Frases"
    const docRef = doc(frasesCollection, "1");
    getDoc(docRef).then((doc) => {
        if (doc.exists()) {
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
