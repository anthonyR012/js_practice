
function User(id, name) {
    this.id = id;
    this.name = name;
    this.saludar = function () { //deja de ser funcion y pasa a ser un metodo
        console.log("Hola, soy " + this.name);
    };
}

//es necesario el new para crear un objeto
//es new por que lo que hace es:
// 1: Crear un objeto vacio
// 2: Llamar al constructor y pasarle los argumentos (se vincula un prototipo)
// 3: Devolver el objeto (This)

const user = new User(1, "Alberto");
console.log(user);
user.saludar();
