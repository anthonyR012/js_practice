
const user = {
    id: 1,
};

// Asignar propiedades dinamicamente
user.id = 2;
user.name = "Alberto";
user["profesion"] = "Desarrollador";

user.guardarClave = function (clave) {
    console.log("Guardar clave: " + clave);
}
console.log(user);

user.guardarClave("123456");


// delete user.name;
// console.log(user);


//si no queremos que se modifique el objeto, usamos freeze
Object.freeze(user);
user.id = 3;
user.name = "Pedro";
console.log(user);

//Si queremos sus propiedades si pueda cambiar usamos freeze
// Object.seal(user);

