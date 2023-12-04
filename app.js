const readlinesync = require("readline-sync");
const { generarNumeroAleatorio, verificarAdivinanza } = require("./main");

const numeroDeUsuarios = () => {
    return parseInt(readlinesync.question("Ingresa un numero: "));
};

const juegoDeAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAcertado = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');

    while (numeroAcertado !== numeroSecreto) {
        numeroAcertado = numeroDeUsuarios();
        const mensaje = verificarAdivinanza(numeroSecreto, numeroAcertado);
        console.log(mensaje);

        if (numeroAcertado < numeroSecreto) {
            console.log('El número secreto es mayor.\n');
        } else if (numeroAcertado > numeroSecreto) {
            console.log('El número secreto es menor.\n');
        }
    }

    console.log('¡Felicidades! Has adivinado el número secreto.');
};

juegoDeAdivinanza();
