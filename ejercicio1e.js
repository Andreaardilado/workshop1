//EjercicioE
/*Hacer un algoritmo con JavaScript que reciba cualquier letra del 
abecedario y muestre en consola el valor booleano que indique si es o no 
una vocal.*/

let letra = prompt("Ingrese una letra");

const vocal1 = "a";
const vocal2 = "e";
const vocal3 = "i";
const vocal4 = "o";
const vocal5 = "u";
const vocal11 = "A";
const vocal22 = "E";
const vocal33 = "I";
const vocal44 = "O";
const vocal55 = "U";

let resultadoe = (letra  == vocal1) || (letra  == vocal2) || (letra  == vocal3) || (letra  == vocal4)|| (letra  == vocal5) || (letra  == vocal11) || (letra  == vocal22) || (letra  == vocal33) || (letra  == vocal44)|| (letra  == vocal55);

console.log("La letra es una vocal:"+ resultadoe);