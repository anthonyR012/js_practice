
//valores por referencia

let user1 = { name: "Alberto" };
let user2 = user1;
user2.name = "Carlos";
console.log(user1.name);


function modificarUser(user) { user.name = "Valentina" }

modificarUser(user1); //se modifica el user1 por que es una referencia a la variable original
console.log(user1.name);

let animales = ["dog", "cat", "fish", "bird"];
let animales2 = animales;
animales2.push("hamster");
console.log(animales);



