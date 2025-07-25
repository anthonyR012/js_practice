
//operadores logicos

//and
//or
//not
let a = true;
let b = false;  
console.log(a && b); // AND lógico
console.log(a || b); // OR lógico
console.log(!a); // NOT lógico
console.log(!b); // NOT lógico  
console.log(a && !b); // AND lógico con NOT
console.log(a || !b); // OR lógico con NOT
console.log(!a && b); // NOT lógico con AND
console.log(!a || b); // NOT lógico con OR
console.log(a && b || !a); // Combinación de AND, OR y NOT
console.log((a || b) && !a); // Combinación de OR, AND
console.log((a && b) || !b); // Combinación de AND, OR y NOT
console.log((!a || b) && a); // Combinación de NOT, OR, AND
console.log((!a && !b) || (a || b)); // Combinación de NOT, AND, OR
console.log((a && b) || (a || !b)); // Combinación de AND, OR y NOT
console.log((!a || !b) && (a || b)); // Combinación de NOT, AND, OR
console.log(a == b); // Igualdad
console.log(a != b); // Desigualdad
console.log(a === b); // Igualdad estricta
console.log(a !== b); // Desigualdad estricta
console.log(a > b); // Mayor que
console.log(a < b); // Menor que
console.log(a >= b); // Mayor o igual que
console.log(a <= b); // Menor o igual que   
console.log(a ? 'Verdadero' : 'Falso'); // Operador ternario