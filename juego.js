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

// Función para agregar una nueva frase a la colección "Frases"
function agregarNuevaFrase(nuevaFrase) {
    // Agregar un nuevo documento a la colección "Frases"
    addDoc(frasesCollection, nuevaFrase)
    .then(() => {
        console.log("Nueva frase agregada correctamente");
    })
    .catch((error) => {
        console.error("Error al agregar la nueva frase:", error);
    });
}

// Ejemplo de uso de la función para agregar una nueva frase
const nuevaFrase = {
    frase: "Para ser buena política no me tengo que disfrazar de pobre",
    autor: ["Cristina", "CFK", "Cristina Fernandez de Kirchner", "Cris", "La Jefa"],
    dificultad: 3,
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Cristina_Fern%C3%A1ndez_de_Kirchner_-_Foto_Oficial_2.jpg/866px-Cristina_Fern%C3%A1ndez_de_Kirchner_-_Foto_Oficial_2.jpg"
};

agregarNuevaFrase(nuevaFrase);
