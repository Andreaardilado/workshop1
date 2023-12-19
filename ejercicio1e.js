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

let resultadoe = (letra  == vocal1) || (letra  == vocal2) || (letra  == vocal3) || (letra  == vocal4)|| (letra  == vocal5);

console.log("La letra es una vocal:"+ resultadoe);