//Haz tú validación en javascript acá
var botonEnviarFormulario = document.getElementById("botonEnviarAhoraElFormulario");
botonEnviarFormulario.addEventListener("click",enviarFormulario)

var asunto = document.getElementById("asunto");

var mensaje = document.getElementById("mensaje");

function enviarFormulario () {
    var asuntoAEnviar = asunto.value;
    var mensajeAEnviar = mensaje.value;
    var stringFinal = "mailto:angi.pardo@irreverente.net?subject=" + asunto.value + "&body=" + mensaje.value;
    window.open(stringFinal);
}
