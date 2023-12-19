
let p = true;
let q = true;
// ítem 3 tabla a. Fila 1 NOT p
let notP = !p;
console.log(notP);

//ítem 3 tabla a. Fila 1 NOT p AND q
let notPAndq = notP && q;
console.log(notPAndq);

//----------------------------------------------

let p2 = true;
let q2 = false;
// ítem 3 tabla a. Fila 2 NOT p
let notP2 = !p2;
console.log(notP2);

//ítem 3 tabla a. Fila 2 NOT p AND q
let notP1AndQ2 = notP2 && q2;
console.log(notP1AndQ2);

//----------------------------------------------

let p3 = false;
let q3 = true;
// ítem 3 tabla a. Fila 3 NOT p
let notP3 = !p3;
console.log(notP3);

//ítem 3 tabla a. Fila 3 NOT p AND q
let notP3AndQ3 = notP3 && q3;
console.log(notP3AndQ3);

//----------------------------------------------

let p4 = false;
let q4 = false;
// ítem 3 tabla a. Fila 4 NOT p
let notP4 = !p4;
console.log(notP4);

//ítem 3 tabla a. Fila 4 NOT p AND q
let notP4AndQ4 = notP4 && q4;
console.log(notP4AndQ4);

