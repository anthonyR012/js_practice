
let email = "x0S7o@example.com";
let nameUser = "Alberto";
let direccion = {
    ciudad: "Madrid",
    pais: "España"
}

let persona = {
    email: email,
    nameUser: nameUser,
    direccion: direccion,
    recuperarClave : function(){
        console.log("Recuperar clave");
    }
}

console.log(persona);

persona.recuperarClave();