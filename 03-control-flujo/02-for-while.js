

let i = 0;
//mientras i sea menor que 5, imprime el valor de i y luego incrementa i en 1
while (i < 5) {
    console.log("El valor de i es: " + (i));
    i++;
}



i = 0;
//mientras i sea menor que 5, imprime el valor de i y luego incrementa i en 1
console.log("Bucle do while");
do {
    console.log("El valor de i es: " + (i));
    i++;
} while (i < 5);

console.log("Bucle for");
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + (i));
}

console.log("Bucle for in");

const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
};

for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

console.log("Bucle for of");

const animales = ['dog', 'cat', 'fish', 'bird'];

for (let animal of animales) {
    console.log(animal);
}