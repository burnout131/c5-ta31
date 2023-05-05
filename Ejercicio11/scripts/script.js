let contadores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 36000; i++) {

    // Generamos numeros aleatorios entre 1 y 6 para ambos dados
    let n1 = Math.floor(Math.random() * 6) + 1;
    let n2 = Math.floor(Math.random() * 6) + 1;

    // Los sumamos
    let suma = n1 + n2;

    // Contabilizamos el numero de veces que esta suma se ha llevado a cabo
    contadores[suma - 2] += 1;
}

// Mostramos el numero de veces de cada suma
for (let i = 0; i < contadores.length; i++) {
    console.log("El numero de veces que la suma de los dados ha sido " + (i + 2) + " es: " + contadores[i]);
}