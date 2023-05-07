
function validarFecha(texto) {
    var regex = /\b\d{2}\/\d{2}\/\d{4}\b/;

    if (regex.test(texto)) {
        return "La cadena introducida SÍ contiene una fecha";
    } else {
        return "La cadena introducida NO contiene una fecha";
    }

}

console.log(validarFecha("Nací el 05/04/1982 en Donostia."));
console.log(validarFecha("Nací el 5/04/1982 en Donostia."));
console.log(validarFecha("Nací el 05/4/1982 en Donostia."));
console.log(validarFecha("Nací el 05/04/198 en Donostia."));


function validarEmail(texto) {
    var regex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if (regex.test(texto)) {
        return "El e-mail introducido SÍ es válido";
    } else {
        return "El e-mail introducido NO es válido";
    }

}

console.log(validarEmail("marcrg07@gmail.com"));
console.log(validarEmail("marc_rg07@gmail.com"));


function escapeHTML(text) {
    let replacements = [["compro", "vendo"], ["Astra", "Corsa"], ["Mercedes", "Aston Martin"], ["Lewis Hamilton", "Fernando Alonso"]];

    replacements.forEach(function (replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}

console.log(escapeHTML("compro Opel Astra"));
console.log(escapeHTML("Pole position para el Mercedes de Lewis Hamilton"));


function invertirNombreApellido(nombreCompleto) {
    let nombreApellidos = nombreCompleto.split(" ");

    let nombreApellidosInvertido = nombreApellidos.reverse().join(", ");

    return nombreApellidosInvertido;
}

console.log(invertirNombreApellido("John Smith"));
console.log(invertirNombreApellido("Rafael Nadal Parera"));
console.log(invertirNombreApellido("Rafael Nadal"));

function eliminaEtiqueta() {
    let etiquetaPeligrosa = document.querySelector("script");

    etiquetaPeligrosa.remove();
};

document.addEventListener('DOMContentLoaded', () => {

    eliminaEtiqueta();

});
