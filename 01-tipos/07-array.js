
let animales = ['dog', 'cat', 'fish', 'bird'];

animales.push('hamster'); // Agrega un nuevo elemento al final del array
animales.unshift('turtle'); // Agrega un nuevo elemento al inicio del array
animales.pop(); // Elimina el ultimo elemento del array
animales.shift(); // Elimina el primer elemento del array
console.log(animales); // Muestra el array modificado

animales.splice(1, 2); // Elimina dos elementos a partir del índice 1
console.log(animales); // Muestra el array después de eliminar elementos

animales = animales.concat(['rabbit', 'snake']); // Combina dos arrays

console.log(animales); // Muestra el array combinado

animales.sort(); // Ordena los elementos del array alfabéticamente
console.log(animales); // Muestra el array ordenado

animales.reverse(); // Invierte el orden de los elementos del array
console.log(animales); // Muestra el array invertido

let numeros = [5, 3, 8, 1, 2];
numeros.sort((a, b) => a - b); // Ordena los números de menor a mayor
console.log(numeros); // Muestra el array de números ordenado

let numerosDesc = numeros.slice().sort((a, b) => b - a); // Ordena los números de mayor a menor
console.log(numerosDesc); // Muestra el array de números ordenado de forma descend

let numerosFiltrados = numeros.filter(num => num > 2); // Filtra los números mayores a 2
console.log(numerosFiltrados); // Muestra los números filtrados

//recorrer el array con forEach
animales.forEach((animal, index) => {
    console.log(`Animal en el índice ${index}: ${animal}`);
}); // Muestra cada animal con su índice

