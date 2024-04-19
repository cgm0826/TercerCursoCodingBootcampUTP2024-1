/*
- Fecha de publicación: 19 de abril del 2024
- Hora: 6:00 AM
- Versión de su codigo: 03
- Autores del lenguaje utilizado: ECMASCRIPT 6.0 (javascrit 6.0)
- Versión del lenguaje utilizado: 6.0
- Presentado por:   
                    Ingeniera Luisa Victoria
                    Ingeniera Lizeth 
                    Ingeniera Andrea
                    Ingeniero Juan Manuel
                    Ingeniero Santiago Castaño
                    Ingeniero Andres
                    Ingeniero Camilo

- Universidad Tecnológica de Pereira
- Programa de Ingenieria de Sistemas y Computación
- Descripcion del programa:
Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.

//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo
Salvedad 2: al terminar el recorrido se ve la coma

*/

// Serie de Fibonacci hasta el 10.000
console.log('Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......');
//Esta línea imprime una descripción de lo que hace el programa.
console.log('Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.');
// Esta línea imprime las instrucciones de hasta dónde se calculará la serie.
//Esta es la declaración de la función que calcula la serie de Fibonacci.
function serieFibonacci () {
    // Estas líneas inicializan las dos primeras variables que almacenarán los dos últimos números de la serie.
    let dato1 = 0;
    let dato2 = 1;
    // Esta línea inicializa una cadena de texto que almacenará todos los números de la serie para su visualización.
    let resultado = '';
    // Ejecuta el bloque de código mientras que el último número generado sea menor o igual a 10,000.
    while (dato1 <= 10000) {
        resultado += dato1 + ', ';
        const dato3 = dato1 + dato2;
        dato1 = dato2;
        dato2 = dato3;
    }
    //Esta línea imprime la serie de Fibonacci acumulada en la cadena de texto
    console.log(resultado);
};
//Esta línea llama a la función
serieFibonacci();