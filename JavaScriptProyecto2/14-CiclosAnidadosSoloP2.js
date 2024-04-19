/*- Versión del lenguaje utilizado: 6.0
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
presenta el patron:

P P P P P P P P P P P P P  
  P P P P P P P P P P P
    P P P P P P P P P
      P P P P P P P
        P P P P P
          P P P
            P

Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo*/

function mostrarLetras() {
    // Inicialización de variables
    let i = -1 // Controla el número de filas
    let iAux; // Variable auxiliar para imprimir espacios en blanco antes de las letras
    let j = 14 // Controla el número de letras por fila
    let jAux = 14 // Variable auxiliar para controlar el número de letras por fila

    // Letra que se imprime en cada iteración
    let letra = 'P '

    // Bucle principal que controla el número de filas a imprimir
    while (i < 6) {
        // Incrementa el contador de filas
        i++ 
        iAux = i

        // Bucle interno para imprimir espacios en blanco antes de las letras
        while ( iAux > 0) {
            process.stdout.write("  ") // Imprime dos espacios en blanco
            iAux--
        }

        // Actualiza el número de letras por fila
        j = jAux -= 2

        // Bucle interno para imprimir letras en cada fila
        while (j >= 0){
            process.stdout.write(letra) // Imprime la letra
            j--
        }
        
        // Imprime un salto de línea al final de cada fila
        console.log(' ')
        

    }
    
    // Decrementa el número de letras por fila para la siguiente iteración
    jAux--
}

// Llama a la función para ejecutarla
mostrarLetras()
