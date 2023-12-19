//EjercicioD
/*El aeropuerto El Dorado se encuentra en remodelación y requiere un 
programa para suministrarlo a su personal de seguridad con el objetivo de 
brindar información a los turistas sobre donde se debe tramitar las salidas 
internacionales para nacionales y extranjeros. Se le solicita diseñar este 
programa para que reciba el primer dígito de un número de pasaporte y 
que muestre el valor booleano que indique si el turista es del país o 
extranjero. Todos los No. de pasaporte que inicien con la letra A son 
nacionales.*/

/*let numeroPasaporte = prompt("Ingrese el primer dígito del pasaporte:")
let salidaNacional = numeroPasaporte === "a";

console.log("Salida Nacional:" + salidaNacional);*/

let numeroPasaporte = prompt ("Ingrese elprimer dígito de su pasaporte");
const salidaNalMin = "a";
const salidaNalMayus ="A";

let resultado = (numeroPasaporte == salidaNalMayus) || (numeroPasaporte == salidaNalMin);

console.log ("Salida Nacional:" +resultado);


