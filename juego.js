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
function agregarFrase(nuevaFrase) {
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

let frase2 = {
    frase: "Señor Coto, yo lo conozco",
    autor: ["Nestor", "Nestor Kirchner", "El tuerto", "El pinguino", "Kirchner"],
    dificultad: 2,
    link: "https://media.minutouno.com/p/3e75bb01213230d5018738e0d5619fd8/adjuntos/150/imagenes/026/573/0026573400/1200x675/smart/kirchner.png"
};

let frase3 = {
    frase: "El que depositó pesos, recibirá pesos. El que depositó dólares, recibirá dólares",
    autor: ["Eduardo Duhalde", "Duhalde"],
    dificultad: 2,
    link: "https://www.lanacion.com.ar/resizer/v2/eduardo-duhalde-en-marzo-de-2002-asumio-la-MDGHU6ZWMVCY7GWU7J3OB3ZHAE.jpg?auth=e324409cd58ae298184b3a7f02d8bbeb23ce3054b0c4fbe759e20b51ed791d19&width=880&height=586&quality=70&smart=true"
};

let frase4 = {
    frase: "Yo me equivoqué y pagué. Pero la pelota no se mancha",
    autor: ["Maradona", "Diego", "Dios", "El Diego", "Diego Maradona", "Diego Armando Maradona"],
    dificultad: 1,
    link: "https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2021/11/24/maradona-1.jpeg"
};

let frase5 = {
    frase: "Dentro de poco tiempo se va a licitar un sistema de vuelos espaciales mediante el cual, desde una plataforma que quizás se instale en Córdoba, esas naves espaciales se van a remontar a la estratósfera y desde ahí elegir el lugar adonde quieran ir, de tal forma que en una hora y media podamos estar desde Argentina en Japón, Corea o en cualquier parte del mundo",
    autor: ["Menem", "Carlos Saul", "Carlos Saul Menem", "El innombrable"],
    dificultad: 1,
    link: "https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2021-02/141102-1996_0.jpg?h=144d094f&itok=BZSOfjFc"
};

let frase6 = {
    frase: "Hay que dejar de robar por dos años",
    autor: ["Barrionuevo", "Luis Barrionuevo", "Jose Luis Barrionuevo"],
    dificultad: 3,
    link: "https://media.urgente24.com/p/e30733ed4c3e3274c25d2e436e75f4c3/adjuntos/319/imagenes/002/087/0002087198/1200x675/smart/tenemos-que-dejar-robar-dos-anos-dijo-barrionuevo-los-90.jpg"
};

let frase7 = {
    frase: "Me cortaron las piernas",
    autor: ["Maradona", "Diego", "Dios", "El Diego", "Diego Maradona", "Diego Armando Maradona"],
    dificultad: 1,
    link: "https://pbs.twimg.com/ext_tw_video_thumb/1145366043411591170/pu/img/BLs3bVS1Gkf6wM_E.jpg"
};

let frase8 = {
    frase: "Hoy podemos dar a gracias a Dios: la casa está en orden y no hay sangre en la Argentina. ¡Felices Pascuas!",
    autor: ["Alfonsin", "Alfonsín", "Raúl Ricardo Alfonsín", "Raul Ricardo Alfonsin", "Raul Alfonsin"],
    dificultad: 2,
    link: "https://www.ncn.com.ar/wp-content/uploads/2023/04/ALfonsinCasaR.jpg"
};

let frase9 = {
    frase: "Barrilete cósmico, ¿de qué planeta viniste?",
    autor: ["Victor Hugo", "Victor Hugo Morales", "Hugo Morales"],
    dificultad: 1,
    link: "https://editorial.aristeguinoticias.com/wp-content/uploads/2022/06/Maradona-Gol-del-Siglo-22062022-.jpeg"
};

let frase10 = {
    frase: "Señores jueces, quiero utilizar una frase que pertenece ya a todo el pueblo argentino: Nunca más",
    autor: ["Julio César Strassera", "Julio Strassera", "Strassera"],
    dificultad: 3,
    link: "https://tn.com.ar/resizer/08CUp7hUz55W8ECFg7DCSy8U_DA=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/DFMKWIXPFBE4NOYRMKCYJ7WLBA.jpg"
};

let frase11 = {
    frase: "Carajo! Mierda!",
    autor: ["Mirtha", "Mirtha Legrand", "La Chiqui", "Legrand"],
    dificultad: 1,
    link: "https://upload.wikimedia.org/wikipedia/commons/8/89/Mirtha_Legrand_2013.jpg"
};

let frase12 = {
    frase: "Tres empanadas, que miseria",
    autor: ["Brandoni", "Luis Brandoni"],
    dificultad: 1,
    link: "https://i.ytimg.com/vi/q10LsZlR7tk/maxresdefault.jpg"
};

let frase13 = {
    frase: "¡Mamá, ¡sacá la mano de ahí, carajo! ¡Se acaba de cortar la electricidad porque metiste tu cutucuchillo, te vas a quedar electrificada loca!",
    autor: ["Ricky", "Ricky Fort", "Fort", "El Comandante", "Ricardo Fort"],
    dificultad: 1,
    link: "https://www.cronista.com/files/image/408/408493/619e731ea7a5e.jpg"
};

let frase14 = {
    frase: "Anda pa alla, bobo",
    autor: ["Messi", "Lionel", "Lionel Messi", "Lionel Andres Messi", "Lionel Andres Messi Cuccitini", "La pulga"],
    dificultad: 1,
    link: "https://media.a24.com/p/593242f9d21b6e2d77dd49aa0df899d6/adjuntos/296/imagenes/009/096/0009096440/1200x675/smart/que-mira-bobojpg.jpg"
};

let frase15 = {
    frase: "Está mal, pero no tan mal",
    autor: ["Guido", "Guido Kaczka", "Kaczka"],
    dificultad: 2,
    link: "https://chasquifederal.com.ar/wp-content/uploads/2023/10/231030-Guido-K-Fte.-Linkedl.png"
};

let frase16 = {
    frase: "No me peguen, soy Giordano",
    autor: ["Giordano", "Roberto Giordano"],
    dificultad: 1,
    link: "https://i.ytimg.com/vi/mbVxLpQHIAw/sddefault.jpg"
};

let frase17 = {
    frase: "No tiene bebida alcoholica señorita, tiene Gatorei",
    autor: ["El Narigon", "El doctor Bilardo", "Bilardo", "Carlos Bilardo", "Carlos Salvador Bilardo", "Carlos Salvador"],
    dificultad: 1,
    link: "https://media.ambito.com/p/c525f5eda4717e30e4237f48ddf7ebe0/adjuntos/239/imagenes/038/641/0038641453/1200x675/smart/gatorade-bilardo2jpg.jpg"
};

let frase18 = {
    frase: "¿Quién te conoce papá? Tomatela te dije",
    autor: ["El atendedor de boludos", "Atendedor de boludos"],
    dificultad: 2,
    link: "https://tn.com.ar/resizer/GN66ZlzIR7mmh9EAlo0Ewafzc0w=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/MNKLNTEBOVH2TFDIPLFELPZ5WI.jpg"
};

let frase19 = {
    frase: "¡No se inunda más! ¡No se inunda más!",
    autor: ["Mauricio Macri", "Macri", "Mauricio", "Mauri", "El gato"],
    dificultad: 1,
    link: "https://resizer.glanacion.com/resizer/v2/macri-durante-el-cerre-de-campana-de-juntos-por-BWIL3YDQYJB45NU7ECKR5DRASA.jpg?auth=8b4785695ff91cbacc872400c8c6f4cf1bb86e8c53a5269184d1a8d9c0bda4c4&width=420&height=280&quality=70&smart=true"
};

let frase20 = {
    frase: "¿Te das cuenta? Putos no faltan, los que faltan son financistas",
    autor: ["Ricardo Darin", "Darin", "Richard", "RD", "Ricardo Darín", "Darín"],
    dificultad: 3,
    link: "https://homominimus.files.wordpress.com/2015/07/putos-no-faltan.jpg?w=1024&h=508"
};

let frase21 = {
    frase: "Si querés llorar, llorá",
    autor: ["Moria", "Casán", "Moria Casán", "Casan", "La one"],
    dificultad: 1,
    link: "https://pbs.twimg.com/tweet_video_thumb/CllAfvvXIAADsRs.jpg"
};

let frase22 = {
    frase: "Yo hago puchero, ella hace puchero, yo hago ravioles, ella hace ravioles….¡Qué país!",
    autor: ["China Zorrilla", "Zorrilla", "Concepción Matilde Zorrilla de San Martín Muñoz del Campo"],
    dificultad: 2,
    link: "https://i.pinimg.com/736x/15/23/70/152370ffb2074d914b922430fbfd4e0c.jpg"
};

let frase23 = {
    frase: "No hay plata",
    autor: ["Milei", "Javier Milei", "Javier Gerardo Milei", "El Javo", "El peluca", "Peluca", "Javo"],
    dificultad: 1,
    link: "https://www.lv16.com.ar/archivos/img/o/184021_1703247538_874.jpg"
};

let frase24 = {
    frase: "Puede fallar",
    autor: ["Tusam"],
    dificultad: 1,
    link: "https://media.lacapital.com.ar/p/d2ab9dcdc5806ec31a84c1bc7ec7b14b/adjuntos/203/imagenes/100/075/0100075936/1200x675/smart/tusampng.png"
};

let frase25 = {
    frase: "A Grondona se le escapó la tortuga",
    autor: ["Maradona", "Diego", "Dios", "El Diego", "Diego Maradona", "Diego Armando Maradona"],
    dificultad: 2,
    link: "https://media.ambito.com/p/c7fee2ceda8bef6b597e76e3aeadce45/adjuntos/239/imagenes/038/287/0038287741/1200x675/smart/maradona-sudafrica-2010.jpg"
};

let frase26 = {
    frase: "A Toresani, Segurola y Habana 4310, séptimo piso, y vamos a ver si me dura treinta segundos",
    autor: ["Maradona", "Diego", "Dios", "El Diego", "Diego Maradona", "Diego Armando Maradona"],
    dificultad: 1,
    link: "https://media.tycsports.com/files/2020/10/07/124756/maradona-toresani.jpg"

};

let frase27 = {
    frase: "Me están haciendo bowling",
    autor: ["Vicky Xipolitakis", "Xipolitakis", "Victoria Xipolitakis"],
    dificultad: 1,
    link: "https://cdn.memegenerator.es/imagenes/memes/thumb/23/40/23408804.jpg"
};

let frase28 = {
    frase: "¡La puta que vale la pena estar vivo!",
    autor: ["Héctor Alterio", "Hector Alterio", "Alterio"],
    dificultad: 3,
    link: "https://alpha-assets.tadevel-cdn.com/658ed12fc289c2b3eb2faa57/720.jpeg"
};

let frase29 = {
    frase: "Después de que vi a Dios, no tomo más vino. Yo creía que era verso: no es verso. Está el chabón",
    autor: ["Pappo", "Papo", "Norberto Aníbal Napolitano", "Norberto Anibal Napolitano", "Norberto Napolitano"],
    dificultad: 3,
    link: "https://media.diariopopular.com.ar/p/a1767e65ae0463d61bad01687222081f/adjuntos/143/imagenes/006/590/0006590916/pappo.jpg"
};

let frase30 = {
    frase: "Pero si es una nenaaaa",
    autor: ["Francella", "Guillermo Francella", "Guille Francella", "El Guille", "Guille"],
    dificultad: 1,
    link: "https://i.ytimg.com/vi/04VN5cZ88t4/hqdefault.jpg"
};

let frase31 = {
    frase: "Basta, chicos",
    autor: ["Ricky", "Ricky Fort", "Fort", "El Comandante", "Ricardo Fort"],
    dificultad: 1,
    link: "https://media.tenor.com/_SO77mUL_HsAAAAe/basta-chicos.png"
};

let frase32 = {
    frase: "Gracias, totales",
    autor: ["Gustavo", "Gus Cerati", "Cerati", "Gustavo Cerati"],
    dificultad: 1,
    link: "https://www.revistagente.com/wp-content/uploads/2022/09/cerati-620x464.png.webp"
};

let frase33 = {
    frase: "¿Qué pretende usted de mí?",
    autor: ["Isabel Sarli", "Coca Sarli", "Sarli"],
    dificultad: 3,
    link: "https://img.cine.ar/image/566b326588bf777873122d72/context/odeon_fotograma"
};

let frase34 = {
    frase: "Billetera mata galán",
    autor: ["Jacobo Winograd", "Winograd"],
    dificultad: 3,
    link: "https://media.airedesantafe.com.ar/p/1513b77d790bbd7d9be712935a42de63/adjuntos/268/imagenes/003/685/0003685665/1200x0/smart/imagepng.png"
};

let frase35 = {
    frase: "Me robaron las fotos de Wanda",
    autor: ["El fan de Wanda", "Fan de Wanda", "Mariano de la Canal", "de la Canal"],
    dificultad: 2,
    link: "https://www.montecaserosonline.com/galeria/payasooooooo_delcanal.jpg"
};

let frase36 = {
    frase: "Paso a paso",
    autor: ["Mostaza", "Mostaza Merlo", "Merlo"],
    dificultad: 2,
    link: "https://i.ytimg.com/vi/uMWH8rVFicw/maxresdefault.jpg"
};

let frase37 = {
    frase: "Que mal que la estoy pasando!",
    autor: ["Gaudio", "Gato Gaudio", "El Gato", "Gaston Gaudio", "GG", "El Gato Gaudio"],
    dificultad: 1,
    link: "https://i.pinimg.com/originals/64/62/c9/6462c99ac0d7af515232d5e32bc8ef89.jpg"
};

let frase38 = {
    frase: "El publico se renueva",
    autor: ["Mirtha", "Mirtha Legrand", "La Chiqui", "Legrand"],
    dificultad: 1,
    link: "https://upload.wikimedia.org/wikipedia/commons/8/89/Mirtha_Legrand_2013.jpg"
};

let frase39 = {
    frase: "¡No mientas, Silvina Escupidero! no mientas. Y no metas a tu abuela muerta que nadie le faltó el respeto, ridícula",
    autor: ["Moria", "Casán", "Moria Casán", "Casan", "La one"],
    dificultad: 2,
    link: "https://tn.com.ar/resizer/N8XAhptDI1uxsz0DINbCEW3WHJE=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/SZ7P6BIKHVEJLKUMVUOPUMTG6I.png"
};

let frase40 = {
    frase: "¿Y si te llama Román?",
    autor: ["Seba Vignolo", "Sebastián Vignolo", "Vignolo", "Pollo Vignolo", "El Pollo Vignolo", "El pollo"],
    dificultad: 2,
    link: "https://pbs.twimg.com/media/FWyMTZMXkAAglDG.jpg"
};

let frase41 = {
    frase: "¿Cómo vas a atender al otro? ¡Qué carajo me importa! ¡Pisalo! ¡Pisalo! ¡Al contrario, pisalo!",
    autor: ["El Narigon", "El doctor Bilardo", "Bilardo", "Carlos Bilardo", "Carlos Salvador Bilardo", "Carlos Salvador"],
    dificultad: 2,
    link: "https://media.tycsports.com/files/2019/02/06/41325/momento-retro-carlos-bilardo-y-el-pisalo-pisalp.jpg"
};


let frase42 = {
    frase: "Me quiero ir.",
    autor: ["Hernán Lorenzino", "Lorenzino"],
    dificultad: 3,
    link: "https://www.serargentino.com/public/images/2020/10/16039895850-Lorenzino-773x458.jpg"
};

let frase43 = {
    frase: "¿Qué haces nene, vos querés morir en este instante?",
    autor: ["Blas Giunta", "Giunta", "Huevo Giunta", "Blas"],
    dificultad: 3,
    link: "https://tn.com.ar/resizer/TCWHwOBCNsRI-1zuSoyQ0gp9IkE=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/OYKMWJEGFNHA5GML42DKADPTQQ.jpg"
};

let frase44 = {
    frase: "Si no fuera por el fútbol , muchos seríamos vírgenes todavía.",
    autor: ["Turco García", "Claudio Omar García", "Claudio Omar Garcia", "Turco Garcia", "El turco", "Turco"],
    dificultad: 3,
    link: "https://media.a24.com/p/8f540ce8a64086c4ad6ca018327a9ed1/adjuntos/296/imagenes/008/840/0008840695/1200x675/smart/turco-garcia.jpeg"
};

agregarFrase(frase2);
agregarFrase(frase3);
agregarFrase(frase4);
agregarFrase(frase5);
agregarFrase(frase6);
agregarFrase(frase7);
agregarFrase(frase8);
agregarFrase(frase9);
agregarFrase(frase10);
agregarFrase(frase11);
agregarFrase(frase12);
agregarFrase(frase13);
agregarFrase(frase14);
agregarFrase(frase15);
agregarFrase(frase16);
agregarFrase(frase17);
agregarFrase(frase18);
agregarFrase(frase19);
agregarFrase(frase20);
agregarFrase(frase21);
agregarFrase(frase22);
agregarFrase(frase23);
agregarFrase(frase24);
agregarFrase(frase25);
agregarFrase(frase26);
agregarFrase(frase27);
agregarFrase(frase28);
agregarFrase(frase29);
agregarFrase(frase30);
agregarFrase(frase31);
agregarFrase(frase32);
agregarFrase(frase33);
agregarFrase(frase34);
agregarFrase(frase35);
agregarFrase(frase36);
agregarFrase(frase37);
agregarFrase(frase38);
agregarFrase(frase39);
agregarFrase(frase40);
agregarFrase(frase41);
agregarFrase(frase42);
agregarFrase(frase43);
agregarFrase(frase44);




