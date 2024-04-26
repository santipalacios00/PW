// Agregar una frase a la colección "Frases"
const db = firebase.firestore();
const frasesCollection = db.collection('Frases');

frasesCollection.add({
    frase: 'Lorem ipsum dolor sit amet',
    autor: ['Autor 1', 'Autor 2', 'Autor 3'],
    link: 'https://example.com/image.jpg',
    dificultad: 'facil'
})
.then((docRef) => {
    console.log('Frase agregada con ID:', docRef.id);
})
.catch((error) => {
    console.error('Error al agregar frase:', error);
});
