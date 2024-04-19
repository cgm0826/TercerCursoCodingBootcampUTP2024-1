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
presenta todas las tablas de multiplicar del 1 al 10


//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo

*/

function Multiplicacion() {
    for (Multiplicando = 1 ; Multiplicando <= 10; Multiplicando++) {
        //cuando el ciclo de afuera da una vuelta el de adentro da 10
        for (Multiplicador = 1 ; Multiplicador <= 10; Multiplicador++) {
            console.log(Multiplicando + " x " + Multiplicador + " = " + Multiplicando*Multiplicador)
        }   
    }
}

Multiplicacion()