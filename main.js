

const generarNumeroAleatorio = () => {

    return Math.floor(Math.random() * 100) + 1;

}

const verificarAdivinanza = (numeroSecreto, numeroAcertado) => {

    if(numeroAcertado === numeroSecreto){
        console.log("Felicitaciones acertaste el Número")
    }else if(numeroAcertado > numeroSecreto){
        console.log("El Número secreto es Menor. ¡Seguí Intentando!")
    }
    else() =>{
        console.log("El Número secreto es Mayor. ¡Seguí Intentando!")
    }

}

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};