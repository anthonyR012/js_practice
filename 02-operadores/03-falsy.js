
//short circuit


/*
Falsy operatores

false
null
undefined
0
""
NaN

*/

let nameUser = "Chancho";
let username = nameUser || "Guest";
console.log(username);

function fnt1() {
  console.log("Function 1 executed");
    return true;
}

function fnt2() {
  console.log("Function 2 executed");
    return true;
}

let x = fnt1() || fnt2(); // fnt2 no se ejecuta porque fnt1 ya devolvió true
console.log(x); // true

