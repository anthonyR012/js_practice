
// Los objetos en JavaScript son una colección de pares clave-valor. 
// Pueden contener cualquier tipo de datos, incluso otros objetos.

const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador",
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  },
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
};

console.log(persona);
persona.saludar();

// Accediendo a propiedades del objeto
console.log(persona.nombre); // Juan
console.log(persona["edad"]); // 30
// Accediendo a propiedades anidadas
console.log(persona.direccion.ciudad); // Madrid
console.log(persona.direccion["pais"]); // España   

// Añadiendo una nueva propiedad
persona.email = "x0S7o@example.com";

// Modificando una propiedad existente
persona.edad = 31;
console.log(persona);

// Eliminando una propiedad
delete persona.profesion;
console.log(persona);