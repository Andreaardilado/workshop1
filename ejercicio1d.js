//Ejercicio D
/*Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario 
básico por horas y el número de horas trabajadas en un mes y realice lo 
siguiente:
i. Calcular su salario básico mensual
ii. Determinar si recibe o no subsidio de transportes. Un empleado 
recibe este subsidio cuando el salario mensual básico es menor o 
igual a $700.000 COP
iii. Mostrar en consola el nombre del empleado, su salario básico 
mensual y si recibe o no subsidio de transport*/

let nombreEmpleado = prompt("Ingrese el nombre");
let salarioxHoras = prompt ("Ingrese su salario básico por horas");
let numHorasxMes = prompt ("Ingrese horas trabajadas por mes");

let salarioTotal = numHorasxMes*salarioxHoras;
let subsidio = salarioTotal < 700000;

console.log ("Nombre de empleado: "+ nombreEmpleado);
console.log ("Salario mensual: "+ salarioTotal);
console.log ("Aplica para subsidio: "+ subsidio);