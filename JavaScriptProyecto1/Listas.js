/*
- Fecha de publicación: 14 de abril del 2024
- Hora: 6:00 PM
- Versión de su codigo: 11
- Autores del lenguaje utilizado: ECMASCRIPT 6.0 (javascrit 6.0)
- Versión del lenguaje utilizado: 6.0
- Presentado por:   Ingeniero Camilo Giraldo
                    Ingeniera Angie Guazaquillo
- Universidad Tecnológica de Pereira
- Programa de Ingenieria de Sistemas y Computación
- Descripcion del programa:
Tenemos tres listas las cuales hacen:
-  La primera funcion nos indica cual de los numeros en la lista es el menor y el mayor
-  La segunda funcion concatena las dos listas y organizarla de menor a mayor
-  La tercera funcion invierte el orden de los numero dentro de una lista 
*/
const prompt = require('prompt-sync')(); // se utiliza para obtener entradas del usuario
//desde la terminal 

// Mayores y menores
function mayoresMenores () { // Crear lista de los numeros disponibles
    let numeros = [5, 12, 3, 8, 1] // Guarda un array

    let mayor = Math.max(...numeros); // Calcula el valor maximo del arreglo
// Encontrar el mayor numero

    let menor = Math.min(...numeros); // Calcula el valor minimo del arreglo
// Encontrar el menor numero

    console.log("el mayor numero es:", mayor);
    console.log("el menor numero es", menor);
};

// Concatenación de Listas
function concatenarListas () {
    //crear listas 
    let lista1 =[4, 9, 2] // Guarda el arreglo dado
    let lista2 =[7, 5, 1] // Guarda el arreglo dado

    let ListaCombinada = lista1.concat(lista2); // Combinar las listas
    
    ListaCombinada.sort(function(a,b) { // Ordena el arreglo de forma ascendente y de ordena numericamente en orden creciente
        return a-b;
    });
    console.log("Concatenaciòn de listas ordenadas", ListaCombinada);
};

// Inversión de una lista 
function inversionLista () {
    let lista =[ 3, 6, 9, 12, 15]; // Guarda una lista 
    let listainvertida = invertirlista (lista); // guarda los datos dados de la variablre invertrlista

    function invertirlista (lista) { // Toma la lista dada como entrada y devuelve una nueva lista con los elementos invertidos
        let  listainvertida = lista.slice();
        listainvertida . reverse ();
        return listainvertida;
    };
    console . log("lista original",lista);
    console . log("lista invertida",listainvertida);
};
mayoresMenores();
console.log('\n');
concatenarListas();
console.log('\n');
inversionLista();
