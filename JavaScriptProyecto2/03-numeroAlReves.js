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
Este programa pide por teclado una secuencia de numeros y devuelve la secuencia inversa.

//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo

*/


const prompt = require('prompt-sync')();// Ingresa el dato dado por el usurio por medio de la consola 
//Esta es la declaración de la función que se encarga de invertir el número.
function ReverseNumber(){
    //Aquí se le pide al usuario que ingrese un número, y el valor ingresado se almacena en la variable
    let numero = prompt("Ingresar número: ");
    // console.log(typeof numero)
    //Esta línea convierte el string ingresado en un arreglo de caracteres, separando cada dígito.
    let separar = numero.split("");
    //La función reverse() invierte el orden de los elementos en el arreglo separar.
    let invertir = separar.reverse();
    // Une los elementos del arreglo invertir en un string
    let unir = invertir.join("");
    // Imprime el número invertido en la consola.
    console.log(unir);
}
//Esta línea llama a la función
ReverseNumber();