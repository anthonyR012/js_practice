

function saludo() {
    return `Hola, mundo!`;
}


console.log(saludo());

// Definición de una función que recibe un parámetro
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar('Juan')); // Muestra "Hola, Juan!"


//arguments (No recomendado)

function sumar() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sumar(1, 2, 3, 4)); // Muestra 10

