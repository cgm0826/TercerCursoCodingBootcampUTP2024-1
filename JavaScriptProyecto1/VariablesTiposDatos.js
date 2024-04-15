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
En el menu podemos encontrar los indices de la primera peticion los cuales son:
1 Un Conversor de temperatura o conversor el cual usa la fórmula para convertir de
celsius a fahrenheit es (9/5 * C°) + 32 
2 Una calculadora  de IMC solicitamos la informacion del peso en kilogramos y la 
estatura en metros  y para calcular el IMC usamos la formula Peso/(Altura)^2
3 El generador de nombre de usuario: solicitamos el nombre, apellido y año de nacimiento
junto a esta informacion generamos el nombre de usuario
4 La funcion Fibonacci (con ciclos) suma los dos numeros anteriores dados por ustedes
5 Y la ultima opcion de este menu es la salida de este 
*/

const prompt = require('prompt-sync')();// se utiliza para obtener entradas del usuario
//desde la terminal 

// Conversor de temperatura
function conversor () { // En esta variable se realiza la funcion de tomar el dato dato por el usuario y hacer la operacion de conversión de celsius a fahrenheit
    console.log('\nBienvenid@ al conversor de grados celsius a grados fahrenheit');
    
    const tempCelsius = parseFloat(prompt('Por favor ingresa el grado celsiu que deseas convertir: ')); // Almacena el valor dado por el usuario en la terminal
    const tempToFahrenheit = (9 / 5) * tempCelsius + 32; // Realiza la operacion de conversion de los grados 
    console.log(`${tempCelsius}°C son ${tempToFahrenheit.toFixed(2)}°F`);
};


// Calculadora de IMC

function calculadora () { // En esta variable se realiza la funcion de tomar los valores dados por el usuario y realiza la operacion de IMC y entrega el resultado de la operación realizada
    console.log('\nBienvenid@ a la calculadora IMC');
    
    const peso = parseFloat(prompt('Por favor, ingresa tu peso en kilogramos: ')); // Guarda el peso dado 
    const altura = parseFloat(prompt('Por favor, ingresa tu altura en metros: ')); // Guarda la altura dada
    const IMC = peso / (altura ** 2); // Realiza la operacion de IMC
    //const IMCRedondeado = Math.round(IMC * 100) / 100;
    console.log(`\nTu índice de masa corporal (IMC) es: ${IMC.toFixed(2)}`);
};


// Generador de nombre de usuario 
function nombreDeUsuario () { // En esta variable se guarda los datos solictados al usuario y con los datos convierte y entrga un nombre de usuario
    console.log('\nBienvenid@ al generador de nombre de usuario');

    const nombre = prompt('Ingrese su nombre: '); // Guarda el nombre del usuario
    const apellido = prompt('Ingrese su apellido: '); // Guarda el apellido del usuario
    const añoDeNacimiento = prompt('Ingrese su año de nacimiento: '); // Guarda el año de naciomiento del usuario
    const resultado = nombre+apellido+añoDeNacimiento; // Convina el nombre, apellido y el año de nacimiento
    console.log(`Su nombre de usuario es: ${resultado}`);
}


//  Funcion Fibonacci 

function Fibonacci () { // En esta variable realiza la operacion de calcular la función fibonacci
    console.log('\nBienvenid@ a la Funcion Fibonacci');

    function funccion (n) { // Calcula el factorial
        if (n <= 1) { 
            return n;
        }
        let dato1 = 0;
        let dato2 = 1;

        for (let i = 2; i <= n; i++) { // Calcula el n-ésimo termino de la secuencia fibonacci, el bucle inicia desde i=2 ya que los primeros dos terminos son 1 y 1
            const dato3 = dato1 + dato2; // en cada ciclo se calcula el siguiente termino fibonacci en el dato 3 sumando los valores en dato1 y dato2, luego se actualiza los valores de dato1 y dato2 para el siguiente ciclo, al terminar el bucle, en la variable de dato2 contendar el valor del término fibonacci
            dato1 = dato2;
            dato2 = dato3;
        }
        return dato2;
    };
    const n = parseInt(prompt('Ingrese el valor de n: ')); // Guarda el dato dado por el usuario desde la terminal
    const respuesta = funccion(n); // Guarda el valor del resultado dado por la funccion fibonacci 
    console.log(`El ${n} número de Fibonacci es: ${respuesta}`);
};


// menu 
function menu() { 
    console.log('\nMenú');
    console.log('1). Conversor de °C a °F.');
    console.log('2). Indice de masa corporal.');
    console.log('3). Creador de nombre de usuario.');
    console.log('4). Función Fibonacci.');
    console.log('5). Salir del menú');

    let option = prompt('Seleccione una opción del menu: ');

    switch(option) { // es un menu que se entrega en la terminal para que el usuario le sea mas facil de interatuar con las programs realizados, en cada caso es la opcion que tome el usuario se seleciona la opcion dada y da a correr el programa deseado por el usuario y al final del programa vuelve el menu para elegir otra opcion o salir del menu
        case '1':
            console.log('\nHas seleccionado la opcion 1.');
            conversor();
            menu();
            break; 

        case '2':
            console.log('Has seleccionado la opcion 2.');
            calculadora();
            menu();
            break; 

        case '3':
            console.log('Has seleccionado la opcion 3.');
            nombreDeUsuario();
            menu();
            break;

        case '4':
            console.log('Has seleccionado la opcion 4.');
            Fibonacci();
            menu();
            break;
            
        case '5':
            break;

        default:
            console.log('\nNo has seleccionado ninguna opción del menú.')
            menu();
    };
};
menu();
