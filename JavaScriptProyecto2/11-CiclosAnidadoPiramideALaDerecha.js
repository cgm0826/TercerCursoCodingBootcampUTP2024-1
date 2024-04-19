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
Crea una una imagen de una Piramide a la derecha en la columna 80, con la letra A y en la cantidad de lineas solicitadas (25 Filas)
                                                                              A
                                                                             AA
                                                                            AAA
                                                                           AAAA
                                                                          AAAAA
                                                                         AAAAAA
                                                                        AAAAAAA
                                                                       AAAAAAAA
                                                                      AAAAAAAAA
                                                                     AAAAAAAAAA
                                                                    AAAAAAAAAAA
                                                                   AAAAAAAAAAAA
                                                                  AAAAAAAAAAAAA
                                                                 AAAAAAAAAAAAAA
                                                                AAAAAAAAAAAAAAA
                                                               AAAAAAAAAAAAAAAA
                                                              AAAAAAAAAAAAAAAAA
                                                             AAAAAAAAAAAAAAAAAA
                                                            AAAAAAAAAAAAAAAAAAA
                                                           AAAAAAAAAAAAAAAAAAAA
                                                          AAAAAAAAAAAAAAAAAAAAA
                                                         AAAAAAAAAAAAAAAAAAAAAA
                                                        AAAAAAAAAAAAAAAAAAAAAAA
                                                       AAAAAAAAAAAAAAAAAAAAAAAA
                                                      AAAAAAAAAAAAAAAAAAAAAAAAA
Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo*/

function Piramide() {
    // Altura de la pirámide
    let Altura = 25;

    // Espacio que tiene para dar la impresión de una pirámide
    let espacio = Altura - 1 + 54;

    // Número de letras 'A' a imprimir en cada fila
    let Numerito = 1;

    // La forma definida, a la cual se le va a sumar los espacios y las letras 'A'
    let Forma = '';
    
    // Bucle externo para controlar las filas de la pirámide
    for (let i = 0; i < Altura; i++) {

        // Bucle para añadir espacios en blanco antes de las letras 'A' en cada fila
        for (let j = 0; j < espacio; j++) {
            Forma += ' ';
        }

        // Bucle para añadir las letras 'A' en cada fila
        for (let j = 0; j < Numerito; j++) {
            Forma += 'A';
        }

        // Decrementa la cantidad de espacios en blanco para la siguiente fila
        espacio--;

        // Incrementa el número de letras 'A' para la siguiente fila
        Numerito += 1;

        // Imprime la fila de la pirámide
        console.log(Forma);

        // Reinicia la cadena para la siguiente fila
        Forma = '';
    }                                                       
}

// Llama a la función para ejecutarla
Piramide()


                                                      