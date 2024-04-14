const prompt = require('prompt-sync')();
// Conversor de temperatura

function conversor () {
    console.log('\nBienvenid@ al conversor de grados celsius a grados fahrenheit');
    
    const tempCelsius = parseFloat(prompt('Por favor ingresa el grado celsiu que deseas convertir: '));
    const tempToFahrenheit = (9 / 5) * tempCelsius + 32;
    console.log(`${tempCelsius}°C son ${tempToFahrenheit.toFixed(2)}°F`);
};


// Calculadora de IMC

function calculadora () {
    console.log('\nBienvenid@ a la calculadora IMC');
    
    const peso = parseFloat(prompt('Por favor, ingresa tu peso en kilogramos: '));
    const altura = parseFloat(prompt('Por favor, ingresa tu altura en metros: '));
    const IMC = peso / (altura ** 2);
    //const IMCRedondeado = Math.round(IMC * 100) / 100;
    console.log(`\nTu índice de masa corporal (IMC) es: ${IMC.toFixed(2)}`);
};


// Generador de nombre de usuario 

function nombreDeUsuario () {
    console.log('\nBienvenid@ al generador de nombre de usuario');

    const nombre = prompt('Ingrese su nombre: ');
    const apellido = prompt('Ingrese su apellido: ');
    const añoDeNacimiento = prompt('Ingrese su año de nacimiento: ');
    const resultado = nombre+apellido+añoDeNacimiento;
    console.log(`Su nombre de usuario es: ${resultado}`);
}


//  Funcion Fibonacci 

function Fibonacci () {
    console.log('\nBienvenid@ a la Funcion Fibonacci');

    function funccion (n) {
        if (n <= 1) {
            return n;
        }
        let dato1 = 0;
        let dato2 = 1;

        for (let i = 2; i <= n; i++) {
            const dato3 = dato1 + dato2;
            dato1 = dato2;
            dato2 = dato3;
        }
        return dato2;
    };
    const n = parseInt(prompt('Ingrese el valor de n: '));
    const respuesta = funccion(n);
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

    switch(option) {
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