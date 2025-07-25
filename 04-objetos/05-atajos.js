
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

console.log(obj.constructor); 

let obj1 = new Object();

console.log(obj1.constructor);

/*
new Array()
new Boolean()
new Date()
new Function()
new Number()
new Object()
new RegExp()
new String()
*/

function User(id, name) {
    this.id = id;
    this.name = name;
    this.saludar = function () { //deja de ser funcion y pasa a ser un metodo
        console.log("Hola, soy " + this.name);
    };
}


const user = new User(1, "Alberto");
console.log(user.constructor)