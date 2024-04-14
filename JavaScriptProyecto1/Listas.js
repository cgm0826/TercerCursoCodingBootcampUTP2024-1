const prompt = require('prompt-sync')();

// Mayores y menores
// Crear lista de los numeros disponibles
function mayoresMenores () {
    let numeros = [5, 12, 3, 8, 1]

    let mayor = Math.max(...numeros);
// Encontrar el mayor numero

    let menor = Math.min(...numeros);
// Encontrar el menor numero

    console.log("el mayor numero es:", mayor);
    console.log("el menor numero es", menor);
};

// Concatenación de Listas
function concatenarListas () {
    //crear listas 
    let lista1 =[4, 9, 2]
    let lista2 =[7, 5, 1]

    // combinar las listas
    let ListaCombinada = lista1.concat(lista2);
    
    ListaCombinada.sort(function(a,b) {
        return a-b;
    });
    console.log("Concatenaciòn de listas ordenadas", ListaCombinada);
};

// Inversión de una lista 
function inversionLista () {
    let lista =[ 3, 6, 9, 12, 15];
    let listainvertida = invertirlista (lista);

    function invertirlista (lista) {
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