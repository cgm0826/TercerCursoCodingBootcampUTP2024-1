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
Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.

//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo
Salvedad 2: al terminar el recorrido se ve la coma
*/
// Sumatoria de la serie de Fiboncci hasta el 100
//Esta línea imprime una introducción al programa
console.log('Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100. Los números a sumar son:');
//Esta es la declaración de la función que realiza la operación.
function sumaFibonacci () {
    //Estas líneas inicializan las dos primeras variables que representan los dos primeros números de la serie de Fibonacci.
    let dato1 = 0;
    let dato2 = 1;
    //Esta línea inicializa una cadena de texto que se usará para almacenar y mostrar la secuencia de números de Fibonacci.
    let resultado = '';
    //Esta línea inicializa una variable que se usará para calcular la suma total de los números de la serie.
    let suma = 0;
    // Ejecuta el bloque de código mientras que el último número generado sea menor o igual a 100.
    while (dato1 <= 100) {
        //Esta línea agrega el último número generado a la variable
        suma += dato1;
        //Esta línea agrega el último número generado y una coma a la cadena de texto 
        resultado += dato1 + ', ';
        //Esta línea calcula el próximo número de la serie sumando los dos últimos números.
        const dato3 = dato1 + dato2;
        dato1 = dato2;
        dato2 = dato3;
    }
    //Esta línea imprime la secuencia de números de Fibonacci y la suma total.
    console.log(resultado + 'y su suma es: ' + suma );
    //La función devuelve la suma total de los números de la serie.
    return suma;
};
// Esta línea llama a la función 
sumaFibonacci();