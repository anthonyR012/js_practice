
//factory function es una funcion que devuelve un objeto completo y con sus propiedades 

function crearUser(id, name, profesion) {
    return {
        id: id,
        name: name,
        profesion: profesion,
        guardarClave: function (clave) {
            console.log("Guardar clave: " + clave);
        }
    }
}


const user = crearUser(1, "Alberto", "Desarrollador");

const user2 = crearUser(2, "Pedro", "Desarrollador");
console.log(user,user2);