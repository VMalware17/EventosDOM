//DOM para el boton Enviar
const btnEnviar = document.querySelector("#btnEnviar");

//escuchador de eventos para el boton

btnEnviar.addEventListener("click", () => {});

//console.log("usaste el evento click en el boton");

//evento UI de carga
//este se carga en la llamada inicial del sitio
window.addEventListener("load", () => {
    //console.log("he cargado la pagina completamente");
    alert("Bienvenido a mi pagina");
});
//al cambiar el ttamaño de la window
window.addEventListener("resize", () => {
    //console.log("has redimensionado el tamaño de la pantalla");
});

//scroll al enrollar el contenido de la window

window.addEventListener("scroll", () => {
    console.log("estas haciendo scroll en el contenido");
});