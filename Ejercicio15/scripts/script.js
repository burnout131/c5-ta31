
var galeria = document.getElementById("galeria");
var imagenes = galeria.getElementsByClassName("imagen");
var visor = document.getElementById("visor");
var imagenGrande = visor.getElementsByTagName("img")[0];

imagenGrande.src = imagenes[0].src;
visor.style.display = "flex";

for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", function () {
        imagenGrande.src = this.src;
        visor.style.display = "flex";
    });
}

visor.addEventListener("click", function () {
    visor.style.display = "none";
});