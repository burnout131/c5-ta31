
const listenerFueraTabla = (id) => {

    // Obtenemos el id de la etiqueta
    let p = document.getElementById(id);

    // Añadimos el listener
    p.addEventListener("click", () => {
        window.alert("Has clicado el párrafo de fuera de la tabla");
    });

}

const listenerDentroTabla = (id) => {

    // En funcion del id que nos llegue por parámetro, mostramos un mensaje u otro,
    // para que el usuario sepa exactamente en que tabla ha hecho click
    if (id === "tabla1") {
        let p = document.getElementById(id);
        p.addEventListener("click", () => {
            window.alert("Has clicado un párrafo de la tabla 1");
        });
    } else if (id === "tabla2") {
        let p = document.getElementById(id);
        p.addEventListener("click", () => {
            window.alert("Has clicado un párrafo de la tabla 2");
        });
    }
}

// Añadimos los listeners cuando se hayan cargado los elementos HTML
document.addEventListener("DOMContentLoaded", () => {
    listenerFueraTabla("fueraTabla");
    listenerDentroTabla("tabla1");
    listenerDentroTabla("tabla2");
});