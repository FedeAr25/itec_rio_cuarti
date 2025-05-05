
HTML + Script.js
Agustin Invaldi
•
19:56

script.js
JavaScript

practico1.html
HTML
Comentarios de la clase

Añade un comentario de clase…

Detalles del material
// TODO: Pedir el nombre con prompt
// TODO: Pedir la edad
// TODO: Calcular el precio de la entrada según la edad
// TODO: Mostrar un mensaje personalizado con alert

// Ejemplo final esperado:
// "Hola Juan, tenés 16 años. Tu entrada cuesta $1500"

const nombre = prompt("Ingrese su nombre")
alert("Su nombre es:" + nombre)
const edad = parseInt(prompt("Ingrese su edad"))

if (edad === 18) {
    alert("Su edad es 18")
} else if (edad === 17) {
    alert("Su edad es 17")
} else {
    alert("Desconozco su edad")
}

console.log(nombre);