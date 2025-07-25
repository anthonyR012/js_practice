
let i = 0;

while (i < 10) {
    if (i === 3) {
        i++;
        console.log("saltar 3");
        continue;
    }
    if(i === 8){
        console.log("salir");
        break;
    }
    console.log("El valor de i es: " + (i));
    i++;
}
