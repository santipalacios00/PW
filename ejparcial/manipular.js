var jsonTexto = '{"nombre":"Juan","edad":30,"ciudad":"Barcelona"}';
var objeto = JSON.parse(jsonTexto);
console.log(objeto.nombre); // Imprime: Juan