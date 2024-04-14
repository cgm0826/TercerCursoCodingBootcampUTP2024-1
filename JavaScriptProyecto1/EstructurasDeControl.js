const prompt = require('prompt-sync')();

// Adivina el numero [0,100)
function adivinaElNumero () { //Esta función genera un número aleatorio entre 0 al 99 y tambien me adivina el numero y la veces que se intento
    
    console.log('Bienvenid@, adivina el número entre 0 y 99.');
    const getRandomInt = Math.floor(Math.random() * 100);
    let intentos = 0;
    let adivinado = false;

    while (!adivinado) {
        const dato = parseInt(prompt('Adivina el número: '));

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
    let n = parseInt(prompt('Ingrese un número para calcular su factorial: '));
    let factorial = 1;
    let resultado = 1;

    while(factorial <= n) {
        resultado = factorial * resultado
        factorial++
    };
    console.log(`El factorial de ${n} es: ${resultado}`);
};


// Contador de vocales
function contadorDeVocales () {//En esta función toma una frase ingresada y realizada un conteo de cuantas vocales tiene la frase y devulve el resultado de la cantidad de vocales se encuentra 
    const frase = prompt('Ingresa la frase: ');
    let vocalA = (frase.match(/[a]/gi) ?? []).length;
    let vocalE = (frase.match(/[e]/gi) ?? []).length;
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

    switch(option) {
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