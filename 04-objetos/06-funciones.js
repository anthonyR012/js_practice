

function Usuario (id, name, profesion) {
    this.id = id;
    this.name = name;
    this.profesion = profesion;
    this.saludar = function() {
        console.log(`Hola, mi nombre es ${this.name}`);
    }
}

console.log(Usuario.name);

const U = Usuario;

let user = new U(1, "Alberto", "Desarrollador");
console.log(user);
user.saludar();

function of(Fn, id, name, profesion) {
    return new Fn(id, name, profesion);
}

let user1 = of(Usuario, 1, "Carlos","Desarrollador");
console.log(user1);
user1.saludar();

function returned (){
    return function () {
        console.log("Hola");
    }
}

const saludar = returned();
saludar();