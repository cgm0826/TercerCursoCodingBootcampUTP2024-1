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

En el archivo de EstructurasDeControl.js existe el menu de Estructura de Control en el cual
se encuentran los siguientes indices:
1 Adivina  el Numero en este indice realiza una interaccion con el usuario al preguntar que 
numero es del 1 al 100, si no es el correcto este dira si el numero es mas bajo o alto
2 Calculadora facturial solicitamos un numero al usuario y le responderemos con el numero 
factorial del antes mencionado
3 Contador de Vocales al proporcionarnos una frace o palabra la funcion contara las vocales en esta
4 Salir este nos cerrara el menu al no escoger ninguna de las anteriores
*/

const prompt = require('prompt-sync')(); // se utiliza para obtener entradas del usuario
//desde la terminal 

// Adivina el numero [0,100)
function adivinaElNumero () { //Esta función genera un número aleatorio entre 0 al 99 y tambien me adivina el numero y la veces que se intento
    
    console.log('Bienvenid@, adivina el número entre 0 y 99.');
    const getRandomInt = Math.floor(Math.random() * 100); // Genera un numero entero aleatorio de 0 y 99
    let intentos = 0; // Almacena las veces que se intento dar el numero exacto
    let adivinado = false; // Revisa el resultado si es el exacto o no

    while (!adivinado) {
        const dato = parseInt(prompt('Adivina el número: ')); // Ingresa el valor dado por el usuario

        if (dato === getRandomInt) {
            adivinado = true;
            console.log(`Felicidades adivinaste el número en ${intentos} intentos.`);
        } else if (dato < getRandomInt) {
            console.log('El número es demasiado bajo, intenta de nuevo');
        } else {
            console.log('El número es demasido alto');
        };
        intentos++
    };
    
};



// Calculadora de factorial
function calFactorial () {
    console.log('Bienvenid@ a la calculadora factorial.')
    let n = parseInt(prompt('Ingrese un número para calcular su factorial: ')); // Toma el valor dado por el usuario
    let factorial = 1; 
    let resultado = 1;

    while(factorial <= n) { // Este bucle se ejecuta mientras factorial sea menor e igual a n
        resultado = factorial * resultado // Toma el valor de resultado y lo multiplica por el resultado anterior
        factorial++
    };
    console.log(`El factorial de ${n} es: ${resultado}`);
};


// Contador de vocales
function contadorDeVocales () {//En esta función toma una frase ingresada y realizada un conteo de cuantas vocales tiene la frase y devulve el resultado de la cantidad de vocales se encuentra 
    const frase = prompt('Ingresa la frase: '); // Guarda el valor dado por el usuario desde la terminal
    let vocalA = (frase.match(/[a]/gi) ?? []).length; // cuenta la cantidad de veces que se encuentra la vocal (a) por la frase dada por el usuario, frase.match(/[a]/gi) utiliza el metodo match para buscar todas las veces que se repite la letra (a), g es un modificador que indica que debe buscar todas las concidencias, i hace que la busqueda si hay mayusculas o minusculas no tenga problema en tomar la vocal (a)
    let vocalE = (frase.match(/[e]/gi) ?? []).length; // ??[] este operador es un operador fusion nula, si no se encuentra concidencia se crea un arreglo vacio, y length obtine la longitud del arreglo 
    let vocalI = (frase.match(/[i]/gi) ?? []).length;
    let vocalO = (frase.match(/[o]/gi) ?? []).length;
    let vocalU = (frase.match(/[u]/gi) ?? []).length;

    console.log(`La frase ${frase} tiene las siguinetes vocales:`)
    console.log(`a está ${vocalA} vez.`)
    console.log(`e está ${vocalE} vez.`)
    console.log(`i está ${vocalI} vez.`)
    console.log(`o está ${vocalO} vez.`)
    console.log(`u está ${vocalU} vez.`)
};


// menu 
function menu() { 
    console.log('\nMenú');
    console.log('1). Adivina el número.');
    console.log('2). Calculadora factorial.');
    console.log('3). Contador de vocales.');
    console.log('4). Salir del menú');

    let option = prompt('Seleccione una opción del menu: ');

    switch(option) { // es un menu que se entrega en la terminal para que el usuario le sea mas facil de interatuar con las programs realizados, en cada caso es la opcion que tome el usuario se seleciona la opcion dada y da a correr el programa deseado por el usuario y al final del programa vuelve el menu para elegir otra opcion o salir del menu
        case '1':
            console.log('\nHas seleccionado la opcion 1.');
            adivinaElNumero();
            menu();
            break;
        
        case '2':
            console.log('Has seleccionado la opcion 2.');
            calFactorial();
            menu();
            break;
        
        case '3':
            console.log('Has seleccionado la opcion 3.');
            contadorDeVocales();
            menu();
            break;

        case '4':
            break;

        default:
            console.log('\nNo has seleccionado ninguna opción del menú.')
            menu();
    };
};
menu();
